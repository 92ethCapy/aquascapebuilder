"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BUBBLE_COUNT = 100;
const RAY_COUNT = 6;

export default function UnderwaterScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.z = 5;

    /* -------------------------------------------------------------- */
    /*  Bubbles                                                        */
    /* -------------------------------------------------------------- */
    const bubbleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(BUBBLE_COUNT * 3);
    const bSizes = new Float32Array(BUBBLE_COUNT);
    const speeds = new Float32Array(BUBBLE_COUNT);
    const phases = new Float32Array(BUBBLE_COUNT);
    const opacities = new Float32Array(BUBBLE_COUNT);

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = Math.random() * -3;
      bSizes[i] = Math.random() * 6 + 2;
      speeds[i] = Math.random() * 0.25 + 0.08;
      phases[i] = Math.random() * Math.PI * 2;
      opacities[i] = Math.random() * 0.35 + 0.1;
    }

    bubbleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    bubbleGeo.setAttribute("aSize", new THREE.BufferAttribute(bSizes, 1));
    bubbleGeo.setAttribute(
      "aOpacity",
      new THREE.BufferAttribute(opacities, 1),
    );

    const bubbleMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aOpacity;
        varying float vOpacity;
        void main() {
          vOpacity = aOpacity;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (280.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vOpacity;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;

          // Soft edge
          float alpha = smoothstep(0.5, 0.12, d) * vOpacity;

          // Specular highlight
          float hl = smoothstep(0.4, 0.08, length(gl_PointCoord - vec2(0.36, 0.34)));

          // Rim ring
          float rim = smoothstep(0.48, 0.42, d) - smoothstep(0.42, 0.36, d);

          vec3 col = mix(vec3(0.65, 0.93, 1.0), vec3(1.0), hl * 0.7 + rim * 0.25);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    const bubbles = new THREE.Points(bubbleGeo, bubbleMat);
    scene.add(bubbles);

    /* -------------------------------------------------------------- */
    /*  Light rays                                                     */
    /* -------------------------------------------------------------- */
    const rays: THREE.Mesh[] = [];
    const rayGroup = new THREE.Group();

    for (let i = 0; i < RAY_COUNT; i++) {
      const w = Math.random() * 0.7 + 0.25;
      const h = 14;
      const geo = new THREE.PlaneGeometry(w, h);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x90e0ef,
        transparent: true,
        opacity: Math.random() * 0.035 + 0.015,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.x = (i - RAY_COUNT / 2) * 2.0 + (Math.random() - 0.5);
      mesh.position.y = 2;
      mesh.position.z = -2 - Math.random();
      mesh.rotation.z = (Math.random() - 0.5) * 0.2;
      rays.push(mesh);
      rayGroup.add(mesh);
    }

    scene.add(rayGroup);

    /* -------------------------------------------------------------- */
    /*  Animate                                                        */
    /* -------------------------------------------------------------- */
    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const posAttr = bubbleGeo.getAttribute("position");
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < BUBBLE_COUNT; i++) {
        arr[i * 3 + 1] += speeds[i] * 0.01;
        arr[i * 3] += Math.sin(t * 0.4 + phases[i]) * 0.0012;

        if (arr[i * 3 + 1] > 6) {
          arr[i * 3 + 1] = -6;
          arr[i * 3] = (Math.random() - 0.5) * 12;
        }
      }
      posAttr.needsUpdate = true;

      rays.forEach((ray, idx) => {
        ray.rotation.z =
          Math.sin(t * 0.12 + idx * 1.1) * 0.06 +
          (idx - RAY_COUNT / 2) * 0.03;
        const mat = ray.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.022 + Math.sin(t * 0.25 + idx * 0.7) * 0.012;
      });

      renderer.render(scene, camera);
    };

    animate();

    /* -------------------------------------------------------------- */
    /*  Resize                                                         */
    /* -------------------------------------------------------------- */
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    /* -------------------------------------------------------------- */
    /*  Cleanup                                                        */
    /* -------------------------------------------------------------- */
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);

      bubbleGeo.dispose();
      bubbleMat.dispose();
      rays.forEach((r) => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" aria-hidden />;
}
