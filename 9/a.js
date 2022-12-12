"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function touching(headPosition, tailPosition) {
    if (Math.abs(headPosition.x - tailPosition.x) > 1) {
        return false;
    }
    if (Math.abs(headPosition.y - tailPosition.y) > 1) {
        return false;
    }
    return true;
}
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var positions = {
        "0 0": true
    };
    var headPosition = { x: 0, y: 0 };
    var tailPosition = { x: 0, y: 0 };
    var records = data.split("\r\n");
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var record = records_1[_i];
        var _a = record.split(" "), direction = _a[0], steps = _a[1];
        var stepsNumber = parseInt(steps);
        while (stepsNumber > 0) {
            switch (direction) {
                case "R": {
                    headPosition.x++;
                    if (!touching(headPosition, tailPosition)) {
                        tailPosition = { x: headPosition.x - 1, y: headPosition.y };
                    }
                    break;
                }
                case "L": {
                    headPosition.x--;
                    if (!touching(headPosition, tailPosition)) {
                        tailPosition = { x: headPosition.x + 1, y: headPosition.y };
                    }
                    break;
                }
                case "U": {
                    headPosition.y--;
                    if (!touching(headPosition, tailPosition)) {
                        tailPosition = { x: headPosition.x, y: headPosition.y + 1 };
                    }
                    break;
                }
                case "D": {
                    headPosition.y++;
                    if (!touching(headPosition, tailPosition)) {
                        tailPosition = { x: headPosition.x, y: headPosition.y - 1 };
                    }
                    break;
                }
            }
            console.log({ direction: direction, headPosition: headPosition, tailPosition: tailPosition });
            positions["".concat(tailPosition.x, " ").concat(tailPosition.y)] = true;
            stepsNumber--;
        }
    }
    console.log(Object.keys(positions).length);
});
