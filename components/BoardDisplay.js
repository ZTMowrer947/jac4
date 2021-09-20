import React from "react";
import Svg, { Defs, Rect, G } from "react-native-svg";

import Chip from "./Chip";

export default function BoardDisplay({ chipStates, onChipPress }) {
  return (
    <Svg
      width="169.81171mm"
      height="142.20169mm"
      viewBox="0 0 169.81171 142.20169"
      version="1.1"
      id="svg5"
    >
      <Defs id="defs2" />
      <G id="layer1" transform="translate(-23.337263,-12.699549)">
        <Rect
          fill="#4d4d4d"
          fillRule="evenodd"
          strokeWidth="0.264583"
          id="rect31"
          width="169.81171"
          height="142.20169"
          x="23.337263"
          y="12.699549"
        />
        <G id="g847" transform="translate(0.9408493,-1.6240883)">
          {chipStates.flatMap((chipRow, rowNum) =>
            chipRow.map((status, colNum) => (
              <Chip
                status={status}
                col={colNum}
                row={rowNum}
                onPress={() => onChipPress(rowNum, colNum)}
                key={`r${rowNum}c${colNum}`}
              />
            ))
          )}
        </G>
      </G>
    </Svg>
  );
}
