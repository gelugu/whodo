import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { Sandbox } from "./Sandbox";
import { Answer } from "./src/Answer";
import { Question } from "./src/Question";
import { COLORS } from "./src/styleConfig";

const SANDBOX = false;

export default function App() {
  const [problem, setProblem] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  if (SANDBOX) return <Sandbox />

  return (
    <View style={styles.container}>
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
});
