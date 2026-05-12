"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleField({
  count = 300,
  color = "#00B4C8",
  speed = 1,
  size = 0.3,
  spread = 80,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 80;

    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    const geo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute("position", posAttr);

    const mat = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let t = 0;
    let rafId;

    function animate() {
      rafId = requestAnimationFrame(animate);
      t += 0.004 * speed;

      const pos = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        pos[i * 3]     += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y + Math.sin(t + i * 0.1) * 0.005;
        pos[i * 3 + 2] += velocities[i].z;

        if (Math.abs(pos[i * 3])     > spread) pos[i * 3]     *= -0.9;
        if (Math.abs(pos[i * 3 + 1]) > spread / 2) pos[i * 3 + 1] *= -0.9;
        if (Math.abs(pos[i * 3 + 2]) > spread) pos[i * 3 + 2] *= -0.9;
      }
      geo.attributes.position.needsUpdate = true;

      points.rotation.y = t * 0.05;
      mat.opacity = 0.35 + 0.15 * Math.sin(t * 0.5);

      renderer.render(scene, camera);
    }
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
      scene.clear();
    };
  }, [count, color, speed, size, spread]);

  return (
    <canvas
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}