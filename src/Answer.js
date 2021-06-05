import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { COLORS } from "./styleConfig";

export const Answer = ({ problem, clearProplem, setModalVisible }) => {
  const [winner, setWinner] = useState("");

  const names = ["Роме", "Милене"];

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
    <View style={styles.container}>
      <Text style={styles.text}>{problem}</Text>
      <Text style={styles.text}>достаётся</Text>
      <Text style={styles.text}>{winner}</Text>
      <Button
        onPress={onButtonPress}
        title="Что-то ещё?"
        color={COLORS.grey}
        accessibilityLabel="Выбрать победителя"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 10,
    fontSize: 16,
  },
  button: {},
});
