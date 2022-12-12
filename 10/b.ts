import {readFile} from "fs";

const registerValuesForCycles: number[] = [];
let registerValue = 1;

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split("\r\n");
  for (const record of records) {
    if (record.startsWith("addx")) {
      const [, value] = record.split(" ");
      registerValuesForCycles.push(registerValue, registerValue);
      registerValue += parseInt(value);
    } else {
      registerValuesForCycles.push(registerValue);
    }
  }
  let row = 1;
  while(row <= 6) {
    let imageRow = "";
    for (let column = 1; column <= 40; column++) {
      const registerValueForCycle = registerValuesForCycles[(row - 1) * 40 + column - 1];
      if (Math.abs(registerValueForCycle - (column - 1)) < 2) {
        imageRow += "#";
      } else {
        imageRow += ".";
      }
    }
    console.log(imageRow);
    row++;
  }
});
