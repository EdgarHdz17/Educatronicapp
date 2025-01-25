import { Text, TouchableOpacity } from "react-native";
import React from "react";
import stylesButtonCode from "../styles/components/ButtonCodeStyles";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import IconSourceType from "../utils/ButtonTypes";

interface ButtonControlProps {
  icon: string;
  iconType: IconSourceType;
  textButton: string;
  onPress: () => void;
}

const ButtonCode: React.FC<ButtonControlProps> = ({
  icon,
  iconType,
  textButton,
  onPress,
}) => {
  const renderIcon = () => {
    switch (iconType) {
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
      case "FontAwesome":
        return (
          <FontAwesome
            name={icon as keyof typeof FontAwesome.glyphMap}
            size={24}
            color="black"
          />
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={stylesButtonCode.container}>
      {renderIcon()}
      <Text style={stylesButtonCode.textButton}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCode;
