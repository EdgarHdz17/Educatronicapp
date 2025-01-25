import { Text, View, ScrollView, Modal, Alert, Pressable } from "react-native";
import React from "react";
import stylesModalInfo from "../styles/components/ModalInfoStyles";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ModalInfo = ({ visible, onClose }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal cerrado.");
        onClose();
      }}
    >
      <View style={stylesModalInfo.modalView}>
        <ScrollView>
          <Text style={stylesModalInfo.modalText}>
            {"\n"}APLICACIÓN DESARROLLADA EN:{"\n"}EXPO REACT NATIVE
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <Icon name="logo-apple-appstore" size={40} color="black"></Icon>
                <Icon name="logo-react" size={40} color="black"></Icon>
                <Icon
                  name="logo-google-playstore"
                  size={40}
                  color="black"
                ></Icon> */}
          </View>

          <Text style={stylesModalInfo.modalText}>
            {"\n"}DESARROLLADOR:{"\n"}Ing.Edgar Hernández Hernández{"\n"}
          </Text>
          <Text style={stylesModalInfo.modalText}>
            RESPONSABLES DEL PROYECTO EDUCATRÓNICA:{"\n"}Dr. Enrique Ruiz
            Velazco Sánchez
            {"\n"}Dra. Josefina Bárcenas López{"\n"}M. en C. Victor Hugo García
            Ortega
          </Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {/* <Image
                  source={require("../assets/Images/UNAM.png")}
                  style={styles.image}
                  resizeMode="contain"
                /> */}
          </View>

          <Text style={stylesModalInfo.modalText}>
            {"\n"}UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO
          </Text>
          <Text style={stylesModalInfo.modalText}>{"\n"}Versión: 3.0</Text>

          <Pressable
            style={stylesModalInfo.buttonCloseModal}
            onPress={() => onClose()}
          >
            <AntDesign name="closecircle" size={30} color="black" />
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalInfo;
