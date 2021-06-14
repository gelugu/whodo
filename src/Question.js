import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { COLORS } from "./styleConfig";

export const Question = ({ setProblem, setModalVisible }) => {
  const [placeholder, setPlaceholder] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    pickPlaceholder();
  }, []);

  const CLEAR_DELAY = 500;

  const placeholders = ["Кто прав?", "Кто виноват?", "Кто будет мыть посуду?"];
  const buttonTitles = ["Кто это будет?"];

  const pickPlaceholder = () => {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    setPlaceholder(placeholders[randomIndex]);
  };

  const clearQuestionField = () => {
    setTimeout(() => {
      setQuestion("");
    }, CLEAR_DELAY);
  };

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
          placeholderTextColor={COLORS.light + "aa"}
          selectionColor={COLORS.yellow}
          onSubmitEditing={onSubmit}
          maxLength={60}
          multiline
          textAlignVertical="center"
        />
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.label}>УЗНАТЬ</Text>
          <Text style={styles.label}>ИМЯ</Text>
          <Text style={styles.label}>СЧАСТЛИВЧИКА</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    fontSize: 16,
    color: COLORS.light,
    fontFamily: "CourierPrimeRegular",

    textAlign: "center",

    marginBottom: 10,
    padding: 10,

    borderRadius: 5,
    borderWidth: 3,
    borderColor: COLORS.yellow,
    width: Dimensions.get("screen").width * 0.9,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: COLORS.his,
    borderRadius: 100,
  },
  label: {
    fontSize: 16,
    fontFamily: "CourierPrimeBold",
    color: COLORS.light,
  },
});
