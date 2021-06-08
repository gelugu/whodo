import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'expo-linear-gradient';

export const Gradient = ({children}) => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      {children}
    </LinearGradient>
  );
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
