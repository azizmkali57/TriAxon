"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobeScene({
  size = 400,
  color = "#2B7EC1",
  accentColor = "#00B4C8",
  speed = 1,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(size, size, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 500);
    camera.position.z = 3.5;

    const globeGeo = new THREE.SphereGeometry(1, 48, 48);
    const globeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    const innerGeo = new THREE.SphereGeometry(0.98, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.04,
    });
    scene.add(new THREE.Mesh(innerGeo, innerMat));

    const ringColors = [color, accentColor, "#6B3FA0"];
    const orbits = [];

    [1.4, 1.7, 2.0].forEach((radius, idx) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.005, 8, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(ringColors[idx]),
        transparent: true,
        opacity: 0.25,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + (idx * Math.PI) / 6;
      ring.rotation.y = (idx * Math.PI) / 4;
      scene.add(ring);
      orbits.push(ring);
    });

    const dotGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const dotMats = [
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color) }),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(accentColor) }),
      new THREE.MeshBasicMaterial({ color: new THREE.Color("#6B3FA0") }),
    ];

    const dots = [1.4, 1.7, 2.0].map((r, i) => {
      const dot = new THREE.Mesh(dotGeo, dotMats[i]);
      scene.add(dot);
      return { mesh: dot, radius: r, angle: Math.random() * Math.PI * 2, axis: orbits[i].rotation.clone() };
    });

    const locationGeo = new THREE.SphereGeometry(0.03, 8, 8);
    const locationMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(accentColor) });
    const latLons = [
      [28.6, 77.2],   
      [51.5, -0.1],  
      [40.7, -74.0],  
      [35.7, 139.7], 
      [37.8, -122.4], 
      [19.1, 72.9],   
      [-33.9, 151.2],
      [48.9, 2.3],   
    ];

    latLons.forEach(([lat, lon]) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const loc = new THREE.Mesh(locationGeo, locationMat);
      loc.position.set(
        -Math.sin(phi) * Math.cos(theta),
         Math.cos(phi),
         Math.sin(phi) * Math.sin(theta)
      );
      globe.add(loc);
    });

    let t = 0;
    let rafId;

    function animate() {
      rafId = requestAnimationFrame(animate);
      t += 0.008 * speed;

      globe.rotation.y = t * 0.3;
      orbits.forEach((ring, i) => {
        ring.rotation.z = t * (0.4 + i * 0.15) * (i % 2 === 0 ? 1 : -1);
      });

      dots.forEach((dot, i) => {
        dot.angle = t * (1.2 + i * 0.3);
        const r = dot.radius;
        const ring = orbits[i];
        const localPos = new THREE.Vector3(
          r * Math.cos(dot.angle),
          r * Math.sin(dot.angle),
          0
        );
        localPos.applyEuler(ring.rotation);
        dot.mesh.position.copy(localPos);
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      renderer.dispose();
      scene.clear();
    };
  }, [size, color, accentColor, speed]);

  return (
    <canvas
      ref={mountRef}
      style={{ width: size, height: size }}
      className="pointer-events-none"
      aria-hidden="true"
    />
  );
}