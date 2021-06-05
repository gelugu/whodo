import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "./styleConfig";

export const Question = ({ setProblem, setModalVisible }) => {
  const [placeholder, setPlaceholder] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    pickPlaceholder();
  }, []);

  const CLEAR_DELAY = 500;

  const placeholders = ["О чём спорим?", "Я уже знаю кто это будет!"];

  const pickPlaceholder = () => {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    setPlaceholder(placeholders[randomIndex]);
  };

  const clearQuestionField = () => {
    setTimeout(() => {
      setQuestion("");
    }, CLEAR_DELAY);
  }

  const onSubmit = () => {
    if (question) {
      setProblem(question);
      setModalVisible(true);
      clearQuestionField();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setQuestion}
        value={question}
        placeholder={placeholder}
      />
      <Button
        onPress={onSubmit}
        title="Кто?"
        color={COLORS.grey}
        accessibilityLabel="Выбрать победителя"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    fontSize: 16,
    color: COLORS.dark,

    margin: 10,
    padding: 10,

    borderRadius: 5,
    borderWidth: 3,
    borderBottomColor: COLORS.her,
    borderRightColor: COLORS.her,
    borderLeftColor: COLORS.his,
    borderTopColor: COLORS.his,
  },
  button: {
    margin: 10,
  },
});
