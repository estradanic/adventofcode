"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var sumInOrder = 0;
function packetsInOrder(left, right) {
    console.log("Compare ".concat(JSON.stringify(left), " vs ").concat(JSON.stringify(right)));
    if (typeof left === "number" && typeof right === "number") {
        if (left < right) {
            console.log("Left side is smaller, so inputs are in the right order");
            return true;
        }
        else if (left > right) {
            console.log("Right side is smaller, so inputs are not in the right order");
            return false;
        }
    }
    else if (typeof left === "number" && typeof right !== "number") {
        console.log("Mixed types; convert left to [".concat(left, "] and retry comparison"));
        return packetsInOrder([left], right);
    }
    else if (typeof left !== "number" && typeof right === "number") {
        console.log("Mixed types; convert right to [".concat(right, "] and retry comparison"));
        return packetsInOrder(left, [right]);
    }
    else if (typeof left !== "number" && typeof right !== "number") {
        for (var i = 0; i <= left.length; i++) {
            if (i >= left.length && left.length != right.length) {
                console.log("Left side ran out of items, so inputs are in the right order");
                return true;
            }
            else if (i >= right.length && left.length != right.length) {
                console.log("Right side ran out of items, so inputs are not in the right order");
                return false;
            }
            else if (i < left.length && i < right.length) {
                var innerResult = packetsInOrder(left[i], right[i]);
                if (innerResult !== undefined) {
                    return innerResult;
                }
            }
        }
    }
    return undefined;
}
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var records = data.split("\r\n\r\n");
    records.forEach(function (record, i) {
        var _a = record.split("\r\n").map(function (packet) { return JSON.parse(packet); }), left = _a[0], right = _a[1];
        if (packetsInOrder(left, right)) {
            sumInOrder += i + 1;
        }
        console.log();
    });
    console.log(sumInOrder);
});
