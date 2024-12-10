import { View } from "react-native";
import React from "react";
import stylesSimulation from "../../styles/SimulationStyles";
import ThreeExample from "../ThreeExample";
import Animation from "../Animation";
import ButtonControl from "../ButtonControl";
import IconsControls from "../../constants/IconsControls";
import RecordAudio from "../RecordAudio";

type Props = {};

const SimulationScreen = (props: Props) => {
  return (
    <View style={stylesSimulation.container}>
      {/* <View style={stylesSimulation.simulationContainer}></View> */}
      <RecordAudio />
      <View style={stylesSimulation.controlContainer}>
        {IconsControls.map((icon, index) => (
          <ButtonControl
            key={index}
            icon={icon.icon}
            text={icon.text}
            iconType={icon.iconType}
            action={icon.action}
          />
        ))}
      </View>
    </View>
  );
};

export default SimulationScreen;
