import {readFile} from "fs";

const trees: number[][] = [];
let maxVisibilityScore = 0;

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split("\r\n");
  for (const record of records) {
    trees.push(record.split("").map((x) => parseInt(x)));
  }
  for (let i = 0; i < trees.length; i++) {
    for (let j = 0; j < trees[i].length; j++) {
      let leftScore = 0;
      let rightScore = 0;
      let topScore = 0;
      let bottomScore = 0;
      for (let left = j - 1; left >= 0; left--) {
        if (left < 0) {
          break;
        }
        leftScore++;
        if (trees[i][left] >= trees[i][j]) {
          break;
        }
      }
      for (let right = j + 1; right < trees[i].length; right++) {
        if (right >= trees[i].length) {
          break;
        }
        rightScore++;
        if (trees[i][right] >= trees[i][j]) {
          break;
        }
      }
      for (let top = i - 1; top >= 0; top--) {
        if (top < 0) {
          break;
        }
        topScore++;
        if (trees[top][j] >= trees[i][j]) {
          break;
        }
      }
      for (let bottom = i + 1; bottom < trees.length; bottom++) {
        if (bottom >= trees.length) {
          break;
        }
        bottomScore++;
        if (trees[bottom][j] >= trees[i][j]) {
          break;
        }
      }
      if (leftScore * topScore * rightScore * bottomScore > maxVisibilityScore) {
        maxVisibilityScore = leftScore * topScore * rightScore * bottomScore;
        console.log({leftScore, rightScore, topScore, bottomScore, height: trees[i][j], i, j});
      }
    }
  }
  console.log(maxVisibilityScore);
});
