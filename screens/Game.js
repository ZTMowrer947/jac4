import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Here be where the game gonna be</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
