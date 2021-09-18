import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Linking } from "react-native";

export default function HomeScreen({ navigation }) {
  const [isMusicActive, setMusicActive] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>JAC4</Text>
        <Button
          title="Play"
          onPress={() => {
            navigation.navigate("GameSetup");
          }}
        />
      </View>

      <View style={styles.bottomBtns}>
        <Button
          title={`Music: ${isMusicActive ? "On" : "Off"}`}
          onPress={() => {
            setMusicActive((prevValue) => !prevValue);
          }}
        />
        <Button
          title="Coding Club!"
          onPress={() => {
            Linking.openURL("https://wvcoding.org");
          }}
        />
        <Button
          title="GitHub"
          onPress={() => {
            Linking.openURL("https://github.com/ZTMowrer947/jac4");
          }}
        />
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
  title: {
    fontSize: 48,
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "80%",
    marginTop: "-10%",
    paddingBottom: "10%",
  },
});
