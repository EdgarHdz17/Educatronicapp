type IconSourceType =
  | "AntDesign"
  | "FontAwesome"
  | "FontAwesome5"
  | "FontAwesome6"
  | "Ionicons"
  | "MaterialCommunityIcons";

export default interface ButtonTypes {
  icon: string;
  iconType: IconSourceType;
  text: string;
  action?: () => void;
}
