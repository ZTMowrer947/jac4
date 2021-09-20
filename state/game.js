import produce from "immer";

export const BOARD_WIDTH = 7;
export const BOARD_HEIGHT = 6;

export const ChipState = {
  empty: null,
  player1: true,
  player2: false,
};

export function getStartingBoardState() {
  return {
    board: Array.from({ length: BOARD_HEIGHT }, () =>
      Array.from({ length: BOARD_WIDTH }, () => ChipState.empty)
    ),
    colHeights: Array.from({ length: BOARD_WIDTH }, () => 0),
    movesPlayed: 0,
  };
}

export const initialBoardState = getStartingBoardState();

export function playChipAtCol(col) {
  return {
    type: "playChip",
    payload: {
      col,
    },
  };
}

export function resetGame() {
  return {
    type: "reset",
  };
}

export default function gameReducer(state, action) {
  if (action.type === "playChip") {
    const { col } = action.payload;

    if (state.colHeights[col] === BOARD_HEIGHT) return state;

    const nextFreeRow = BOARD_HEIGHT - state.colHeights[col] - 1;

    const currentPlayer = state.movesPlayed % 2 === 0 ? 1 : 2;
    const newChipState =
      currentPlayer === 1 ? ChipState.player1 : ChipState.player2;

    return produce(state, (draft) => {
      draft.board[nextFreeRow][col] = newChipState;
      draft.colHeights[col]++;
      draft.movesPlayed++;
    });
  } else if (action.type === "reset") {
    return initialBoardState;
  }
}
