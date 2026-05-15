"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0d1117, 1);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d1117, 0.011);

    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 500);
    camera.position.set(0, 0, 80);

    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    const COLORS = [0x2b7ec1, 0x6b3fa0, 0x00b4c8, 0x4a90d9, 0x8b5cd0];

    const NODE_COUNT = 130;
    const nodePositions = [];
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeGeo = new THREE.SphereGeometry(0.5, 8, 8);

    for (let i = 0; i < NODE_COUNT; i++) {
      const col = COLORS[Math.floor(Math.random() * COLORS.length)];
      const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85 });
      const mesh = new THREE.Mesh(nodeGeo, mat);

      const r = 15 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      mesh.position.set(x, y, z);
      mesh.userData = {
        baseOpacity: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.8 + Math.random() * 1.2,
      };

      nodePositions.push(new THREE.Vector3(x, y, z));
      nodeGroup.add(mesh);
    }

    const MAX_DIST = 22;
    const edgePoints = [];
    const edgeColors = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      let connections = 0;
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (connections >= 4) break;
        const d = nodePositions[i].distanceTo(nodePositions[j]);
        if (d < MAX_DIST) {
          edgePoints.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          edgePoints.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
          const c = new THREE.Color().lerpColors(
            new THREE.Color(0x2b7ec1),
            new THREE.Color(0x00b4c8),
            Math.random()
          );
          edgeColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
          connections++;
        }
      }
    }

    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(edgePoints, 3));
    edgeGeo.setAttribute("color", new THREE.Float32BufferAttribute(edgeColors, 3));
    const edgeMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.15 });
    nodeGroup.add(new THREE.LineSegments(edgeGeo, edgeMat));

    const triShape = new THREE.Shape();
    const ts = 5;
    triShape.moveTo(0, ts);
    triShape.lineTo(-ts * 0.866, -ts * 0.5);
    triShape.lineTo(ts * 0.866, -ts * 0.5);
    triShape.lineTo(0, ts);

    const tri1 = new THREE.Mesh(
      new THREE.ShapeGeometry(triShape),
      new THREE.MeshBasicMaterial({ color: 0x2b7ec1, wireframe: true, transparent: true, opacity: 0.12 })
    );
    tri1.position.set(-30, 15, 20);
    scene.add(tri1);

    const tri2 = new THREE.Mesh(
      new THREE.ShapeGeometry(triShape),
      new THREE.MeshBasicMaterial({ color: 0x6b3fa0, wireframe: true, transparent: true, opacity: 0.08 })
    );
    tri2.position.set(35, -18, 10);
    tri2.scale.set(0.7, 0.7, 0.7);
    scene.add(tri2);

    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 180;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 140;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    scene.add(
      new THREE.Points(
        pGeo,
        new THREE.PointsMaterial({ color: 0x00b4c8, size: 0.2, transparent: true, opacity: 0.3 })
      )
    );

    let mx = 0, my = 0;
    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let t = 0;
    let rafId;

    function animate() {
      rafId = requestAnimationFrame(animate);
      t += 0.007;

      nodeGroup.rotation.y = t * 0.15 + mx * 0.1;
      nodeGroup.rotation.x = t * 0.07 + my * 0.07;
      tri1.rotation.z = t * 0.28;
      tri2.rotation.z = -t * 0.22;

      nodeGroup.children.forEach((child) => {
        if (child.isMesh && child.userData.phase !== undefined) {
          const { baseOpacity, phase, speed } = child.userData;
          child.material.opacity = baseOpacity * (0.55 + 0.45 * Math.sin(t * speed + phase));
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={mountRef}
      className="absolute inset-0 w-full h-full three-bg"
      aria-hidden="true"
    />
  );
}