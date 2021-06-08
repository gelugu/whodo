import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Sandbox } from "./Sandbox";
import { Answer } from "./src/Answer";
import { Question } from "./src/Question";
import { COLORS } from "./src/styleConfig";

const SANDBOX = false;

export default function App() {
  const [fontsLoaded] = useFonts({
    CourierPrimeRegular: require("./assets/fonts/CourierPrime-Regular.ttf"),
    CourierPrimeBold: require("./assets/fonts/CourierPrime-Bold.ttf"),
    CourierPrimeItalic: require("./assets/fonts/CourierPrime-Italic.ttf"),
    CourierPrimeBoldItalic: require("./assets/fonts/CourierPrime-BoldItalic.ttf"),
  });

  // if (!fontsLoaded)
  //   return (
  //     <Image style={styles.loader} source={{ uri: "./assets/load.svg" }} />
  //   );

  const [problem, setProblem] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  if (SANDBOX) return <Sandbox />;

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={[COLORS.his, COLORS.his, COLORS.her, COLORS.her]}
        style={styles.background}
      >
        <Question setProblem={setProblem} setModalVisible={setModalVisible} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={setModalVisible.bind(null, !modalVisible)}
        >
          <Answer
            problem={problem}
            clearProplem={setProblem.bind(null, "")}
            setModalVisible={setModalVisible}
          />
        </Modal>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  loader: {},
});
