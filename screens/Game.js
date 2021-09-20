import React from "react";
import { useReducer } from "react";
import { Button, View, StyleSheet } from "react-native";

import BoardDisplay from "../components/BoardDisplay";
import gameReducer, {
  initialBoardState,
  playChipAtCol,
  resetGame,
} from "../state/game";

export default function GameScreen({ navigation }) {
  const [state, dispatch] = useReducer(gameReducer, initialBoardState);

  const handleChipPress = (row, col) => {
    dispatch(playChipAtCol(col));
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <View style={styles.container}>
      <BoardDisplay
        chipStates={state.board}
        colHeights={state.colHeights}
        movesPlayed={state.movesPlayed}
        onChipPress={handleChipPress}
      />
      <Button title="Reset" onPress={handleReset} />
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
