import {readFile} from "fs";

function touching(headPosition, tailPosition) {
  if (Math.abs(headPosition.x - tailPosition.x) > 1) {
    return false;
  }
  if (Math.abs(headPosition.y - tailPosition.y) > 1) {
    return false;
  }
  return true;
}

readFile("./input.txt", "utf8", (_, data) => {
  const positions: Record<string, boolean> = {
    "0 0": true,
  };
  let headPosition = {x: 0, y: 0};
  let tailPosition = {x: 0, y: 0};
  const records = data.split("\r\n");
  for (const record of records) {
    const [direction, steps] = record.split(" ");
    let stepsNumber = parseInt(steps);
    while(stepsNumber > 0) {
      switch (direction) {
        case "R": {
          headPosition.x++;
          if (!touching(headPosition, tailPosition)) {
            tailPosition = {x: headPosition.x - 1, y: headPosition.y};
          }
          break;
        }
        case "L": {
          headPosition.x--;
          if (!touching(headPosition, tailPosition)) {
            tailPosition = {x: headPosition.x + 1, y: headPosition.y};
          }
          break;
        }
        case "U": {
          headPosition.y--;
          if (!touching(headPosition, tailPosition)) {
            tailPosition = {x: headPosition.x, y: headPosition.y + 1};
          }
          break;
        }
        case "D": {
          headPosition.y++;
          if (!touching(headPosition, tailPosition)) {
            tailPosition = {x: headPosition.x, y: headPosition.y - 1};
          }
          break;
        }
      }
      console.log({direction, headPosition, tailPosition});
      positions[`${tailPosition.x} ${tailPosition.y}`] = true;
      stepsNumber--;
    }
  }
  console.log(Object.keys(positions).length);
});
