import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function GameSetupScreen({ navigation }) {
  const [gameType, setGameType] = useState("singleplayer");

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text>Game Setup</Text>
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
      </View>
      {gameType === "singleplayer" && (
        <View style={styles.mainContent}>
          <View style={styles.btnGroup}>
            <Button title="Easy" />
            <Button title="Medium" />
            <Button title="Hard" />
            <Button title="Extreme" />
          </View>
        </View>
      )}
      <View style={styles.btnGroup}>
        <Button title="Back" onPress={() => navigation.navigate("Home")} />
        <Button title="Start!" onPress={() => navigation.navigate("Game")} />
      </View>
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
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "80%",
    marginTop: "-10%",
    paddingBottom: "10%",
  },
});
