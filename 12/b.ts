import {readFile} from "fs";

const E = 69;
const a = 97;
const z = 122;

let minSteps = Infinity;
const heightMap: number[][] = [];
const queuedPositions: {curHeight: number, nextRow: number, nextColumn: number, steps: number}[] = [];
let visitedPositions: Record<string, boolean> = {};

function move(curHeight: number, nextRow: number, nextColumn: number, steps: number) {
  if (steps > minSteps || steps > heightMap.length * heightMap[0].length) {
    console.log("Too many steps. Ending run.");
    return;
  }
  if (nextRow < 0 || nextRow >= heightMap.length || nextColumn < 0 || nextColumn >= heightMap[nextRow].length) {
    console.log(`{${nextRow}, ${nextColumn}} Out of Bounds. Ending run.`)
    return;
  }
  console.log(`Trying ${String.fromCharCode(curHeight)} at ${nextRow}, ${nextColumn}. Steps: ${steps}`);
  const nextPosition = `${nextRow},${nextColumn}`;
  if (heightMap[nextRow][nextColumn] === E && curHeight === z) {
    console.log(`Found the end! Steps: ${steps}`);
    if (steps < minSteps) {
      minSteps = steps;
    }
    return;
  } else if (heightMap[nextRow][nextColumn] === E) {
    console.log("Found the end but can't reach it. Ending run.")
    return;
  }
  if (visitedPositions[nextPosition]) {
    console.log("Visited already. Ending run.")
    return;
  }
  if (heightMap[nextRow][nextColumn] > curHeight + 1) {
    console.log("Can't go this high. Ending run.")
    return;
  }
  visitedPositions[nextPosition] = true;

  queuedPositions.push({
    curHeight: heightMap[nextRow][nextColumn],
    nextRow,
    nextColumn: nextColumn + 1,
    steps: steps + 1,
  });
  queuedPositions.push({
    curHeight: heightMap[nextRow][nextColumn],
    nextRow: nextRow + 1,
    nextColumn,
    steps: steps + 1,
  });
  queuedPositions.push({
    curHeight: heightMap[nextRow][nextColumn],
    nextRow: nextRow - 1,
    nextColumn,
    steps: steps + 1,
  });
  queuedPositions.push({
    curHeight: heightMap[nextRow][nextColumn],
    nextRow,
    nextColumn: nextColumn - 1,
    steps: steps + 1,
  });
}

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split("\r\n");
  for (const record of records) {
    heightMap.push(record.split("").map((str) => {
      if (str === "S") {
        return a;
      }
      return str.charCodeAt(0)
    }));
  }
  const aPositions: {row: number, column: number}[] = [];
  heightMap.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === a) {
        aPositions.push({row: i, column: j});
      }
    });
  });
  aPositions.forEach(({row, column}) => {
    visitedPositions = {};
    queuedPositions.push({
      curHeight: a,
      nextRow: row,
      nextColumn: column,
      steps: 0,
    });
    while(queuedPositions.length > 0) {
      const {curHeight, nextRow, nextColumn, steps} = queuedPositions.shift();
      move(curHeight, nextRow, nextColumn, steps);
    }
  });
  console.log("MIN STEPS: ", minSteps);
});
