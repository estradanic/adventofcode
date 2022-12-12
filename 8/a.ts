import {readFile} from "fs";

const trees: number[][] = [];
let visible = 0;

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split("\r\n");
  for (const record of records) {
    trees.push(record.split("").map((x) => parseInt(x)));
  }
  for (let i = 0; i < trees.length; i++) {
    for (let j = 0; j < trees[i].length; j++) {
      let leftVisible = true;
      let rightVisible = true;
      let topVisible = true;
      let bottomVisible = true;
      for (let left = j - 1; left >= 0; left--) {
        if (left < 0) {
          break;
        }
        if (trees[i][left] >= trees[i][j]) {
          leftVisible = false;
          break;
        }
      }
      for (let right = j + 1; right < trees[i].length; right++) {
        if (right >= trees[i].length) {
          break;
        }
        if (trees[i][right] >= trees[i][j]) {
          rightVisible = false;
          break;
        }
      }
      for (let top = i - 1; top >= 0; top--) {
        if (top < 0) {
          break;
        }
        if (trees[top][j] >= trees[i][j]) {
          topVisible = false;
          break;
        }
      }
      for (let bottom = i + 1; bottom < trees.length; bottom++) {
        if (bottom >= trees.length) {
          break;
        }
        if (trees[bottom][j] >= trees[i][j]) {
          bottomVisible = false;
          break;
        }
      }
      if (leftVisible || rightVisible || topVisible || bottomVisible) {
        visible++;
      }
    }
  }
  console.log(visible);
});
