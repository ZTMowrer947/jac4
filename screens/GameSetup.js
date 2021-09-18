import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GameSetupScreen() {
  return (
    <View style={styles.container}>
      <Text>GameSetup works</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
