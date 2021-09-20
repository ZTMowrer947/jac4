import React from "react";
import { useReducer } from "react";
import { View, StyleSheet } from "react-native";

import BoardDisplay from "../components/BoardDisplay";
import gameReducer, { initialBoardState } from "../state/game";

export default function GameScreen({ navigation }) {
  const [state] = useReducer(gameReducer, initialBoardState);

  return (
    <View style={styles.container}>
      <BoardDisplay
        chipStates={state.board}
        colHeights={state.colHeights}
        movesPlayed={state.movesPlayed}
      />
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
