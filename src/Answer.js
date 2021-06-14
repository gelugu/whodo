import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "./styleConfig";
import { Feather } from "@expo/vector-icons";

export const Answer = ({ problem, clearProplem, setModalVisible }) => {
  const [winner, setWinner] = useState("");

  const hisGradient = [COLORS.his, COLORS.his, COLORS.her, COLORS.her];
  const herGradient = [COLORS.her, COLORS.her, COLORS.his, COLORS.his];
  const hisImage = require("../assets/he.png");
  const herImage = require("../assets/she.png");

  const names = ["Рома", "Милена"];

  const pickWhoDo = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setWinner(names[randomIndex]);
  };

  useEffect(() => {
    pickWhoDo();
  }, []);

  const onButtonPress = () => {
    setModalVisible(false);
    clearProplem();
  };

  return (
    <LinearGradient
      colors={winner === "Рома" ? hisGradient : herGradient}
      style={styles.background}
    >
      <ImageBackground
        source={winner === "Рома" ? hisImage : herImage}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={[styles.textContainer, {backgroundColor: winner === "Рома" ? COLORS.pink : COLORS.yellow}]}>
            <Text style={styles.text}>{problem}</Text>
            <Text style={styles.text}>{`Это сделает, ${winner}`}</Text>
          </View>
          <View/>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onButtonPress}>
              <Feather
                name="repeat"
                size={36}
                color={winner === "Рома" ? COLORS.yellow : COLORS.pink}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textContainer: {
    marginHorizontal: 15,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontFamily: "CourierPrimeRegular",
    textAlign: "center",
    color: COLORS.his,
  },
  buttonContainer: {
    width: Dimensions.get("screen").width,
    marginRight: 50,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  background: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
