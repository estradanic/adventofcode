"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var registerValuesForCycles = [];
var registerValue = 1;
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var records = data.split("\r\n");
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var record = records_1[_i];
        if (record.startsWith("addx")) {
            var _a = record.split(" "), value = _a[1];
            registerValuesForCycles.push(registerValue, registerValue);
            registerValue += parseInt(value);
        }
        else {
            registerValuesForCycles.push(registerValue);
        }
    }
    var row = 1;
    while (row <= 6) {
        var imageRow = "";
        for (var column = 1; column <= 40; column++) {
            var registerValueForCycle = registerValuesForCycles[(row - 1) * 40 + column - 1];
            if (Math.abs(registerValueForCycle - (column - 1)) < 2) {
                imageRow += "#";
            }
            else {
                imageRow += ".";
            }
        }
        console.log(imageRow);
        row++;
    }
});
