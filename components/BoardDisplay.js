import React from "react";
import Svg, { Defs, Rect, G, Circle } from "react-native-svg";

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

export default function BoardDisplay() {
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
          {yCoords.flatMap((y, rowIndex) => {
            return Array.from({ length: xCoords.length }, (_, colIndex) => (
              <Circle
                fill="#ccc"
                fillRule={circleFillRule}
                strokeWidth={strokeWidth}
                r={circleRadius}
                cx={xCoords[colIndex]}
                cy={y}
                key={`row${rowIndex}-col${colIndex}`}
              />
            ));
          })}
        </G>
      </G>
    </Svg>
  );
}
