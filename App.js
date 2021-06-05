import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { Answer } from "./src/Answer";
import { Question } from "./src/Question";
import { COLORS } from "./src/styleConfig";

export default function App() {
  const [problem, setProblem] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Question setProblem={setProblem} setModalVisible={setModalVisible} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
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
