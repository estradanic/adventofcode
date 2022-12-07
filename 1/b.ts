import {readFile} from "fs";

const elves: number[] = [];

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split(/\n\s*\n/);
  for (const record of records) {
    const items = record.split("\n");
    let calories = 0;
    for (const item of items) {
      const number = parseInt(item);
      if (!isNaN(number)) {
        calories += parseInt(item);
      }
    }
    elves.push(calories);
  }
  let topThreeSum = 0;
  let max = Math.max(...elves);
  topThreeSum += max;
  elves.splice(elves.findIndex((num) => num === max), 1);
  max = Math.max(...elves);
  topThreeSum += max;
  elves.splice(elves.findIndex((num) => num === max), 1);
  max = Math.max(...elves);
  topThreeSum += max;

  console.log(topThreeSum);
});
