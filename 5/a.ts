import {readFile} from "fs";

const stacks: string[][] = [
  ["D", "B", "J", "V"],
  ["P", "V", "B", "W", "R", "D", "F"],
  ["R", "G", "F", "L", "D", "C", "W", "Q"],
  ["W", "J", "P", "M", "L", "N", "D", "B"],
  ["H", "N", "B", "P", "C", "S", "Q"],
  ["R", "D", "B", "S", "N", "G"],
  ["Z", "B", "P", "M", "Q", "F", "S", "H"],
  ["W", "L", "F"],
  ["S", "V", "F", "M", "R"],
];

readFile("./input.txt", "utf8", (_, data) => {
  const movements = data.split("\n");
  for (const movement of movements) {
    const stripped = movement.replace(/(move)|(from)|(to)/g, "").trim();
    if (stripped === "") continue;
    console.log({stripped});
    let [num, from, to] = stripped.split(/\s+/).map((s) => parseInt(s));
    console.log({num, from, to});
    while (num > 0) {
      const item = stacks[from - 1].pop();
      stacks[to - 1].push(item);
      num--;
    }
  }
  let returnString = "";
  for (const stack of stacks) {
    returnString += stack.pop();
  }
  console.log(returnString);
});
