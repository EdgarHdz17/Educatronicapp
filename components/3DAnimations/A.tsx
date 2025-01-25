import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas } from "@react-three/fiber/native";
import { Box } from "@react-three/drei";

type Props = {};

const A = (props: Props) => {
  return (
    <View>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box>
          <meshStandardMaterial attach="material" color="hotpink" />
        </Box>
      </Canvas>
      <Text>A</Text>
    </View>
  );
};

export default A;

const styles = StyleSheet.create({});
