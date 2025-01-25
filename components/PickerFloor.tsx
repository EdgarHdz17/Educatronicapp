import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import stylesPicker from "../styles/components/PickerFloorStyles";

interface PickerFloorProps {
  selectedFloor: number;
  setSelectedFloor: Function;
}
const PickerFloor: React.FC<PickerFloorProps> = ({
  selectedFloor,
  setSelectedFloor,
}) => {
  return (
    <View style={stylesPicker.container}>
      <Picker
        selectedValue={selectedFloor}
        onValueChange={(itemValue) => setSelectedFloor(itemValue)}
        mode="dropdown"
        itemStyle={stylesPicker.itemContainer}
      >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
      </Picker>
      <Text style={stylesPicker.floorText}>Piso: {selectedFloor}</Text>
    </View>
  );
};

export default PickerFloor;

const styles = StyleSheet.create({});
