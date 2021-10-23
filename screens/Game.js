import React from "react";
import { useReducer, useMemo } from "react";
import { Button, View, StyleSheet, Text } from "react-native";

import BoardDisplay from "../components/BoardDisplay";
import gameReducer, {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  ChipState,
  initialBoardState,
  playChipAtCol,
  resetGame,
} from "../state/game";

const GameState = {
  Ongoing: "ongoing",
  Draw: "draw",
  Player1Win: "p1win",
  Player2Win: "p2win",
};

/**
 * Determines, using the given board state and column, whether either player has won by having just played a chip in that column.
 *
 * This code is based upon code by Pascal Pons and their Connect 4 AI in C++:
 * https://github.com/PascalPons/connect4/
 * @param {*} state
 * @param {number} col
 * @returns {boolean}
 */
function playerHasWonInCol(state, col) {
  // If column is empty, no player has won in the column yet
  if (state.colHeights[col] === 0) return false;

  // Otherwise, get state of chip at top of column
  const firstFilledRow = BOARD_HEIGHT - state.colHeights[col];
  const topChipState = state.board[firstFilledRow][col];

  // If column is filled to a height of at least 4,
  if (state.colHeights[col] >= 4) {
    // Get chip states of the three chips below the top one
    const otherChipStates = [
      state.board[firstFilledRow + 1][col],
      state.board[firstFilledRow + 2][col],
      state.board[firstFilledRow + 3][col],
    ];

    // If all four chips have the same state, a player has won
    if (otherChipStates.every((chipState) => chipState === topChipState))
      return true;
  }

  // If no player has won in the column, let's check rows and diagonals.

  // X and Y deltas
  const xDeltas = [-1, 1];
  const yDeltas = [-1, 0, 1];

  // Check each diagonal and row for matches
  const playerDidWinOnRowsOrDiags = yDeltas.some((dy) => {
    // Track number of matching chips
    let numberOfMatches = 0;

    // Look at chips to the left, then the right of each column
    xDeltas.forEach((dx) => {
      for (
        let x = col + dx, y = firstFilledRow + dx * dy;
        x >= 0 &&
        x < BOARD_WIDTH &&
        y >= 0 &&
        y < BOARD_HEIGHT &&
        state.board[y][x] === topChipState;
        numberOfMatches++
      ) {
        x += dx;
        y += dx * dy;
      }
    });

    // If at least three chips matched, a player has won.
    return numberOfMatches >= 3;
  });

  return playerDidWinOnRowsOrDiags;
}

function getGameState(state) {
  const lastPlayerToMove = (state.movesPlayed - 1) % 2 === 0 ? 1 : 2;
  const playerHasWon = Array.from(
    { length: BOARD_WIDTH },
    (_, index) => index
  ).some((col) => playerHasWonInCol(state, col));

  if (playerHasWon) {
    return lastPlayerToMove === 1 ? GameState.Player1Win : GameState.Player2Win;
  }

  const isTie = state.board.every((row) =>
    row.every((chipState) => chipState !== ChipState.empty)
  );

  return isTie ? GameState.Draw : GameState.Ongoing;
}

export default function GameScreen({ navigation }) {
  const [state, dispatch] = useReducer(gameReducer, initialBoardState);

  const gameState = getGameState(state);

  const handleChipPress = (row, col) => {
    if (gameState === GameState.Ongoing) {
      dispatch(playChipAtCol(col));
    }
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BoardDisplay
          chipStates={state.board}
          colHeights={state.colHeights}
          movesPlayed={state.movesPlayed}
          onChipPress={handleChipPress}
        />
        <View style={styles.spacer} />
        <View style={styles.sadControls}>
          {gameState === GameState.Ongoing && (
            <Text>Player {state.movesPlayed % 2 === 0 ? "1" : "2"}'s Turn</Text>
          )}
          {gameState === GameState.Draw && <Text>Draw!</Text>}
          {[GameState.Player1Win, GameState.Player2Win].includes(gameState) && (
            <Text>
              Player {gameState === GameState.Player1Win ? "1" : "2"} Wins!
            </Text>
          )}
          {gameState !== GameState.Ongoing && (
            <View style={styles.btnGroup}>
              <Button title="Play again" onPress={handleReset} />
              <Button
                title="Main Menu"
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          )}
          {/* Existence is suffering */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  content: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "30%",
    height: "70%",
  },
  spacer: {
    flexGrow: 1,
    flexShrink: 0,
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "80%",
  },
  sadControls: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
