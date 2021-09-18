import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text></Text>
        <Button title="Play" />
      </View>

      <View style={styles.bottomBtns}>
        <Button title="Music" />
        <Button title="Coding Club!" />
        <Button title="GitHub" />
      </View>
      <StatusBar style="auto" />
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
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    width: "100%",
    marginTop: "-10%",
    paddingBottom: "10%",
  },
});
