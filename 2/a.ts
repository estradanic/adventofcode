import {readFile} from "fs";

const key = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const scoreMap = {
  rock: {
    paper: 1,
    rock: 4,
    scissors: 7,
  },
  paper: {
    rock: 8,
    paper: 5,
    scissors: 2,
  },
  scissors: {
    rock: 3,
    paper: 9,
    scissors: 6,
  },
}

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split(/\n/);
  let myScore = 0;
  let elfScore = 0;
  for (const record of records) {
    const [elf, me] = record.split(/\s/);
    if (elf && me) {
      console.log([elf, me]);
      const myChoice = key[me];
      const elfChoice = key[elf];
      myScore += scoreMap[myChoice][elfChoice];
      elfScore += scoreMap[elfChoice][myChoice];
    }
  }
  console.log({myScore, elfScore});
});
