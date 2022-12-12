"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var trees = [];
var visible = 0;
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var records = data.split("\r\n");
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var record = records_1[_i];
        trees.push(record.split("").map(function (x) { return parseInt(x); }));
    }
    for (var i = 0; i < trees.length; i++) {
        for (var j = 0; j < trees[i].length; j++) {
            var leftVisible = true;
            var rightVisible = true;
            var topVisible = true;
            var bottomVisible = true;
            for (var left = j - 1; left >= 0; left--) {
                if (left < 0) {
                    break;
                }
                if (trees[i][left] >= trees[i][j]) {
                    leftVisible = false;
                    break;
                }
            }
            for (var right = j + 1; right < trees[i].length; right++) {
                if (right >= trees[i].length) {
                    break;
                }
                if (trees[i][right] >= trees[i][j]) {
                    rightVisible = false;
                    break;
                }
            }
            for (var top_1 = i - 1; top_1 >= 0; top_1--) {
                if (top_1 < 0) {
                    break;
                }
                if (trees[top_1][j] >= trees[i][j]) {
                    topVisible = false;
                    break;
                }
            }
            for (var bottom = i + 1; bottom < trees.length; bottom++) {
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
