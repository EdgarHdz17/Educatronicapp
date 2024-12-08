import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ButtonTypes from "../utils/ButtonTypes";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import stylesButtonControl from "../styles/components/ButtonControlStyles";

const ButtonControl: React.FC<ButtonTypes> = ({
  text,
  icon,
  iconType,
  action,
}) => {
  const renderIcon = () => {
    switch (iconType) {
      case "FontAwesome":
        return (
          <FontAwesome5
            name={icon as keyof typeof FontAwesome5.glyphMap}
            size={24}
            color="black"
          />
        );
      case "FontAwesome5":
        return (
          <FontAwesome5
            name={icon as keyof typeof FontAwesome5.glyphMap}
            size={24}
            color="black"
          />
        );
      case "Ionicons":
        return (
          <Ionicons
            name={icon as keyof typeof Ionicons.glyphMap}
            size={24}
            color="black"
          />
        );
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={icon as keyof typeof MaterialCommunityIcons.glyphMap}
            size={24}
            color="black"
          />
        );
      case "FontAwesome6":
        return (
          <FontAwesome6
            name={icon as keyof typeof FontAwesome6.glyphMap}
            size={24}
            color="black"
          />
        );
      case "AntDesign":
        return (
          <AntDesign
            name={icon as keyof typeof AntDesign.glyphMap}
            size={24}
            color="black"
          />
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={stylesButtonControl.container} onPress={action}>
      {renderIcon()}
      <Text style={stylesButtonControl.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonControl;
