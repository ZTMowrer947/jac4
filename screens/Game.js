import React, { useEffect } from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";

import BoardSvg from "../images/board/board.svg";

export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BoardSvg width={400} height={350} style={styles.board} />
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
