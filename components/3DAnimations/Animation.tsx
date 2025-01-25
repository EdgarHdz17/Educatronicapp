import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GLView } from "expo-gl";
import * as THREE from "three";
import { Renderer } from "expo-three";

type Props = {};

const Animation = (props: Props) => {
  const onContextCreate = async (gl: any) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // Crear el renderer
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    // Crear la escena
    const scene = new THREE.Scene();

    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;

    // Crear la base del edificio
    const baseGeometry = new THREE.PlaneGeometry(2, height);
    const baseMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b4513,
      side: THREE.DoubleSide,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    scene.add(base);

    // Crear la segunda cara del edificio
    const secondFaceGeometry = new THREE.PlaneGeometry(2, height);
    const secondFaceMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      side: THREE.DoubleSide,
    });
    const secondFace = new THREE.Mesh(secondFaceGeometry, secondFaceMaterial);
    secondFace.position.z = -0.1; // Posicionar detrás de la primera cara
    scene.add(secondFace);

    // Renderizar la escena
    renderer.render(scene, camera);
    gl.endFrameEXP(); // Necesario para renderizar en Expo
  };
  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
};

export default Animation;

const styles = StyleSheet.create({});
