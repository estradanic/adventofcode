import {readFile} from "fs";

function touching(a, b) {
  if (Math.abs(a.x - b.x) > 1) {
    return false;
  }
  if (Math.abs(a.y - b.y) > 1) {
    return false;
  }
  return true;
}

function resolvePosition(a, b) {
  if (a.x === b.x && a.y < b.y) {
    return {x: a.x, y: b.y - 1};
  }
  if (a.x === b.x && a.y > b.y) {
    return {x: a.x, y: b.y + 1};
  }
  if (a.y === b.y && a.x < b.x) {
    return {x: b.x - 1, y: a.y};
  }
  if (a.y === b.y && a.x > b.x) {
    return {x: b.x + 1, y: a.y};
  }
  if (a.y < b.y && a.x < b.x) {
    return {x: b.x - 1, y: b.y - 1};
  }
  if (a.y < b.y && a.x > b.x) {
    return {x: b.x + 1, y: b.y - 1};
  }
  if (a.y > b.y && a.x < b.x) {
    return {x: b.x - 1, y: b.y + 1};
  }
  if (a.y > b.y && a.x > b.x) {
    return {x: b.x + 1, y: b.y + 1};
  }
}



readFile("./input.txt", "utf8", (_, data) => {
  const positions: Record<string, boolean> = {
    "0 0": true,
  };
  let currentPositions = [
    {x: 0, y: 0}, // 0
    {x: 0, y: 0}, // 1
    {x: 0, y: 0}, // 2
    {x: 0, y: 0}, // 3
    {x: 0, y: 0}, // 4
    {x: 0, y: 0}, // 5
    {x: 0, y: 0}, // 6
    {x: 0, y: 0}, // 7
    {x: 0, y: 0}, // 8
    {x: 0, y: 0}, // 9
  ];
  const records = data.split("\r\n");
  for (const record of records) {
    const [direction, steps] = record.split(" ");
    let stepsNumber = parseInt(steps);
    while(stepsNumber > 0) {
      for (let i = 0; i < 9; i++) {
        switch (direction) {
          case "R": {
            if (i === 0)
              currentPositions[i].x++;
            if (!touching(currentPositions[i], currentPositions[i + 1])) {
              currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
            }
            break;
          }
          case "L": {
            if (i === 0)
              currentPositions[i].x--;
            if (!touching(currentPositions[i], currentPositions[i + 1])) {
              currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
            }
            break;
          }
          case "U": {
            if (i === 0)
              currentPositions[i].y--;
            if (!touching(currentPositions[i], currentPositions[i + 1])) {
              currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
            }
            break;
          }
          case "D": {
            if (i === 0)
              currentPositions[i].y++;
            if (!touching(currentPositions[i], currentPositions[i + 1])) {
              currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
            }
            break;
          }
        }
        if (i === 8) {
          console.log({direction, currentPositions});
          positions[`${currentPositions[i + 1].x} ${currentPositions[i + 1].y}`] = true;
        }
      }
      stepsNumber--;
    }
  }
  console.log(Object.keys(positions).length);
});
