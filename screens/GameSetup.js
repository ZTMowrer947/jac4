import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function GameSetupScreen({ navigation }) {
  const [gameType, setGameType] = useState("multiplayer");

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.h1}>Game Setup</Text>
      </View>

      <View>{gameType === "singleplayer" && <Text>Coming Soon!</Text>}</View>
      <View styles={styles.spacer} />
      <View style={styles.btnGroup}>
        <Button
          title="Singleplayer"
          disabled={gameType === "singleplayer"}
          onPress={() => {
            setGameType("singleplayer");
          }}
        />
        <Button
          title="Multiplayer"
          disabled={gameType === "multiplayer"}
          onPress={() => {
            setGameType("multiplayer");
          }}
        />
      </View>
      <View style={styles.btnGroup}>
        <Button title="Back" onPress={() => navigation.navigate("Home")} />
        <Button
          title="Start!"
          disabled={gameType === "singleplayer"}
          onPress={() => navigation.navigate("Game")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "80%",
    marginTop: "-10%",
    paddingBottom: "10%",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  heading: {
    marginTop: "20%",
  },
  spacer: {
    flexGrow: 1,
    flexShrink: 0,
  },
});
