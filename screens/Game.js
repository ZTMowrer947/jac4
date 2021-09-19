import React, { useEffect } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import Svg, { Defs, Rect, G, Circle } from "react-native-svg";

import BoardDisplay from "../components/BoardDisplay";

export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BoardDisplay />
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
