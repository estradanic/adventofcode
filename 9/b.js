"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function touching(a, b) {
    if (Math.abs(a.x - b.x) > 1) {
        return false;
    }
    if (Math.abs(a.y - b.y) > 1) {
        return false;
    }
    return true;
}
function resolvePosition(a, b) {
    if (a.x === b.x && a.y < b.y) {
        return { x: a.x, y: b.y - 1 };
    }
    if (a.x === b.x && a.y > b.y) {
        return { x: a.x, y: b.y + 1 };
    }
    if (a.y === b.y && a.x < b.x) {
        return { x: b.x - 1, y: a.y };
    }
    if (a.y === b.y && a.x > b.x) {
        return { x: b.x + 1, y: a.y };
    }
    if (a.y < b.y && a.x < b.x) {
        return { x: b.x - 1, y: b.y - 1 };
    }
    if (a.y < b.y && a.x > b.x) {
        return { x: b.x + 1, y: b.y - 1 };
    }
    if (a.y > b.y && a.x < b.x) {
        return { x: b.x - 1, y: b.y + 1 };
    }
    if (a.y > b.y && a.x > b.x) {
        return { x: b.x + 1, y: b.y + 1 };
    }
}
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var positions = {
        "0 0": true
    };
    var currentPositions = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 }, // 9
    ];
    var records = data.split("\r\n");
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var record = records_1[_i];
        var _a = record.split(" "), direction = _a[0], steps = _a[1];
        var stepsNumber = parseInt(steps);
        while (stepsNumber > 0) {
            for (var i = 0; i < 9; i++) {
                switch (direction) {
                    case "R": {
                        if (i === 0)
                            currentPositions[i].x++;
                        if (!touching(currentPositions[i], currentPositions[i + 1])) {
                            currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
                        }
                        break;
                    }
                    case "L": {
                        if (i === 0)
                            currentPositions[i].x--;
                        if (!touching(currentPositions[i], currentPositions[i + 1])) {
                            currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
                        }
                        break;
                    }
                    case "U": {
                        if (i === 0)
                            currentPositions[i].y--;
                        if (!touching(currentPositions[i], currentPositions[i + 1])) {
                            currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
                        }
                        break;
                    }
                    case "D": {
                        if (i === 0)
                            currentPositions[i].y++;
                        if (!touching(currentPositions[i], currentPositions[i + 1])) {
                            currentPositions[i + 1] = resolvePosition(currentPositions[i], currentPositions[i + 1]);
                        }
                        break;
                    }
                }
                if (i === 8) {
                    console.log({ direction: direction, currentPositions: currentPositions });
                    positions["".concat(currentPositions[i + 1].x, " ").concat(currentPositions[i + 1].y)] = true;
                }
            }
            stepsNumber--;
        }
    }
    console.log(Object.keys(positions).length);
});
