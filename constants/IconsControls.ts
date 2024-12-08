import ButtonTypes from "../utils/ButtonTypes";
import upLevelSound from "../funtions/upLevelSound";
import downLevelSound from "../funtions/downLevelSound";
import openDoorSound from "../funtions/openDoorSound";
import closeDoorSound from "../funtions/closeDoorSound";
import stopSound from "../funtions/stopSound";

const IconsControls: ButtonTypes[] = [
  {
    icon: "caretup",
    text: "Subir",
    iconType: "AntDesign",
    action: upLevelSound,
  },
  {
    icon: "caretdown",
    text: "Bajar",
    iconType: "AntDesign",
    action: downLevelSound,
  },
  {
    icon: "file-upload",
    text: "Abrir",
    iconType: "FontAwesome5",
    action: openDoorSound,
  },
  {
    icon: "trash",
    text: "Cerrar",
    iconType: "FontAwesome6",
    action: closeDoorSound,
  },
  {
    icon: "stop-circle",
    text: "Detener",
    iconType: "FontAwesome",
    action: stopSound,
  },
];

export default IconsControls;
