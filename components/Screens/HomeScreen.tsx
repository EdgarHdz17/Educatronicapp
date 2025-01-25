import { Text, View, TouchableOpacity, Button, Modal } from "react-native";
import React, { useState } from "react";
import stylesHome from "../../styles/HomeStyles";
import LottieView from "lottie-react-native";
import ModalInfo from "../ModalInfo";
import Entypo from "@expo/vector-icons/Entypo";

const HomeScreen = () => {
  const [modalInfo, setModalInfo] = useState(false);

  const handleModalInfo = () => {
    setModalInfo(!modalInfo);
  };

  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.innerContainer}>
        <View style={stylesHome.titleContainer}>
          <Text style={stylesHome.titleText}>EDUCATRONICAPP</Text>
          <TouchableOpacity onPress={handleModalInfo}>
            <Entypo name="info-with-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={stylesHome.lottieContainer}>
          <TouchableOpacity>
            <LottieView
              source={require("../../assets/LottieFiles/edurobot.json")}
              autoPlay
              loop
              style={{ width: 350, height: 350 }}
            />
          </TouchableOpacity>
          <ModalInfo visible={modalInfo} onClose={handleModalInfo} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
