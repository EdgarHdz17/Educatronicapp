import { StyleSheet } from "react-native";
import { GlobalColors } from "./GlobalColors";

const stylesCoding = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: GlobalColors.secondary,
  },
  headerContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  statusTextContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
  },
  containerButtons: {
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  containerCode: {
    flex: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingRight: 10,
  },
  inputName: {
    height: 40,
    width: "80%",
    backgroundColor: GlobalColors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: GlobalColors.primary,
    borderWidth: 2,
  },
  inputCode: {
    height: "80%",
    width: "100%",
    backgroundColor: GlobalColors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: GlobalColors.primary,
    borderWidth: 2,
  },
  pickerButton: {
    height: 80,
    width: "70%",
    backgroundColor: "#56D0F6",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    borderRadius: 10,
  },
});

export default stylesCoding;
