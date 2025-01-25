import { StyleSheet } from "react-native";
import { GlobalColors } from "../GlobalColors";

const stylesModalInfo = StyleSheet.create({
  modalView: {
    marginTop: 150,
    marginHorizontal: 20,
    backgroundColor: "#f0f8ff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 35,
    textAlign: "center",
  },
  textStyle: {
    color: "blue",
    fontStyle: "italic",
    textAlign: "center",
  },
  buttonCloseModal: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default stylesModalInfo;
