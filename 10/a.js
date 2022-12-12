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
    var signalStrengthSum = 0;
    for (var _b = 0, _c = [20, 60, 100, 140, 180, 220]; _b < _c.length; _b++) {
        var i = _c[_b];
        signalStrengthSum += registerValuesForCycles[i - 1] * i;
    }
    console.log(signalStrengthSum);
});
