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
  let signalStrengthSum = 0;
  for (const i of [20, 60, 100, 140, 180, 220]) {
    signalStrengthSum += registerValuesForCycles[i - 1] * i;
  }
  console.log(signalStrengthSum);
});
