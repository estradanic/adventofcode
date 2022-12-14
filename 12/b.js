"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var E = 69;
var a = 97;
var z = 122;
var minSteps = Infinity;
var heightMap = [];
var queuedPositions = [];
var visitedPositions = {};
function move(curHeight, nextRow, nextColumn, steps) {
    if (steps > minSteps || steps > heightMap.length * heightMap[0].length) {
        console.log("Too many steps. Ending run.");
        return;
    }
    if (nextRow < 0 || nextRow >= heightMap.length || nextColumn < 0 || nextColumn >= heightMap[nextRow].length) {
        console.log("{".concat(nextRow, ", ").concat(nextColumn, "} Out of Bounds. Ending run."));
        return;
    }
    console.log("Trying ".concat(String.fromCharCode(curHeight), " at ").concat(nextRow, ", ").concat(nextColumn, ". Steps: ").concat(steps));
    var nextPosition = "".concat(nextRow, ",").concat(nextColumn);
    if (heightMap[nextRow][nextColumn] === E && curHeight === z) {
        console.log("Found the end! Steps: ".concat(steps));
        if (steps < minSteps) {
            minSteps = steps;
        }
        return;
    }
    else if (heightMap[nextRow][nextColumn] === E) {
        console.log("Found the end but can't reach it. Ending run.");
        return;
    }
    if (visitedPositions[nextPosition]) {
        console.log("Visited already. Ending run.");
        return;
    }
    if (heightMap[nextRow][nextColumn] > curHeight + 1) {
        console.log("Can't go this high. Ending run.");
        return;
    }
    visitedPositions[nextPosition] = true;
    queuedPositions.push({
        curHeight: heightMap[nextRow][nextColumn],
        nextRow: nextRow,
        nextColumn: nextColumn + 1,
        steps: steps + 1
    });
    queuedPositions.push({
        curHeight: heightMap[nextRow][nextColumn],
        nextRow: nextRow + 1,
        nextColumn: nextColumn,
        steps: steps + 1
    });
    queuedPositions.push({
        curHeight: heightMap[nextRow][nextColumn],
        nextRow: nextRow - 1,
        nextColumn: nextColumn,
        steps: steps + 1
    });
    queuedPositions.push({
        curHeight: heightMap[nextRow][nextColumn],
        nextRow: nextRow,
        nextColumn: nextColumn - 1,
        steps: steps + 1
    });
}
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var records = data.split("\r\n");
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var record = records_1[_i];
        heightMap.push(record.split("").map(function (str) {
            if (str === "S") {
                return a;
            }
            return str.charCodeAt(0);
        }));
    }
    var aPositions = [];
    heightMap.forEach(function (row, i) {
        row.forEach(function (col, j) {
            if (col === a) {
                aPositions.push({ row: i, column: j });
            }
        });
    });
    aPositions.forEach(function (_a) {
        var row = _a.row, column = _a.column;
        visitedPositions = {};
        queuedPositions.push({
            curHeight: a,
            nextRow: row,
            nextColumn: column,
            steps: 0
        });
        while (queuedPositions.length > 0) {
            var _b = queuedPositions.shift(), curHeight = _b.curHeight, nextRow = _b.nextRow, nextColumn = _b.nextColumn, steps = _b.steps;
            move(curHeight, nextRow, nextColumn, steps);
        }
    });
    console.log("MIN STEPS: ", minSteps);
});
