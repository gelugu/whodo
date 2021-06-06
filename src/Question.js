import React, { useEffect, useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "./styleConfig";

export const Question = ({ setProblem, setModalVisible }) => {
  const [placeholder, setPlaceholder] = useState("");
  const [buttonTitle, setButtonTitle] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    pickPlaceholder();
    pickButtonTitle();
  }, []);

  const CLEAR_DELAY = 500;

  const placeholders = ["О чём спорим?", "Я уже знаю кто это будет!"];
  const buttonTitles = ["Кто это будет?"];

  const pickPlaceholder = () => {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    setPlaceholder(placeholders[randomIndex]);
  };
  const pickButtonTitle = () => {
    const randomIndex = Math.floor(Math.random() * buttonTitles.length);
    setButtonTitle(buttonTitles[randomIndex]);
  };

  const clearQuestionField = () => {
    setTimeout(() => {
      setQuestion("");
    }, CLEAR_DELAY);
  }

  const onSubmit = () => {
    if (question) {
      setProblem(question);
      clearQuestionField();
    } else {
      setProblem("Что бы это ни было, оно");
    }
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <TextInput
        autoCapitalize="sentences"
        autoCompleteType="off"
        autoFocus={false}
        style={styles.input}
        onChangeText={setQuestion}
        value={question}
        placeholder={placeholder}
        selectionColor={COLORS.dark}
        onSubmitEditing={onSubmit}
      />
      <Button
        onPress={onSubmit}
        title={buttonTitle}
        color={COLORS.grey}
        accessibilityLabel="Выбрать победителя"
      />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  input: {
    fontSize: 16,
    color: COLORS.dark,

    textAlign: "center",

    marginBottom: 10,
    padding: 10,

    borderRadius: 5,
    borderWidth: 3,
    borderBottomColor: COLORS.her,
    borderRightColor: COLORS.her,
    borderLeftColor: COLORS.his,
    borderTopColor: COLORS.his,
  },
});
