import React from "react";
import { Circle } from "react-native-svg";

import { ChipState } from "../state/game";

const circleFillRule = "evenodd";
const strokeWidth = "0.264583";
const circleRadius = "8.9230661";
const xCoords = [
  "41.857616",
  "63.672501",
  "85.487381",
  "107.30227",
  "129.11716",
  "150.93202",
  "172.74692",
];
const yCoords = [
  "30.88728",
  "52.702164",
  "74.517044",
  "96.331924",
  "118.1468",
  "139.96169",
];

export default function Chip({ status, row, col, onPress }) {
  let fillColor = "#ccc";

  if (status === ChipState.player1) {
    fillColor = "#f00";
  } else if (status === ChipState.player2) {
    fillColor = "#ff0";
  }

  return (
    <Circle
      fill={fillColor}
      fillRule={circleFillRule}
      strokeWidth={strokeWidth}
      r={circleRadius}
      cx={xCoords[col]}
      cy={yCoords[row]}
      onPress={onPress}
    />
  );
}
