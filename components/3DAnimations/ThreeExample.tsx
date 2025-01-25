import React, { useEffect, useRef } from "react";
import { GLView } from "expo-gl";
import * as THREE from "three";
import { Renderer } from "expo-three";

const ThreeExample = () => {
  const onContextCreate = async (gl: any) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // Crear el renderer
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    // Crear la escena
    const scene = new THREE.Scene();

    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Crear un cubo
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animar la escena
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotar el cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      gl.endFrameEXP(); // Necesario para renderizar en Expo
    };

    animate();
  };

  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
};

export default ThreeExample;
