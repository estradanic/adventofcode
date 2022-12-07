"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var stacks = [
    ["D", "B", "J", "V"],
    ["P", "V", "B", "W", "R", "D", "F"],
    ["R", "G", "F", "L", "D", "C", "W", "Q"],
    ["W", "J", "P", "M", "L", "N", "D", "B"],
    ["H", "N", "B", "P", "C", "S", "Q"],
    ["R", "D", "B", "S", "N", "G"],
    ["Z", "B", "P", "M", "Q", "F", "S", "H"],
    ["W", "L", "F"],
    ["S", "V", "F", "M", "R"],
];
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var _a;
    var movements = data.split("\n");
    for (var _i = 0, movements_1 = movements; _i < movements_1.length; _i++) {
        var movement = movements_1[_i];
        var stripped = movement.replace(/(move)|(from)|(to)/g, "").trim();
        if (stripped === "")
            continue;
        console.log({ stripped: stripped });
        var _b = stripped.split(/\s+/).map(function (s) { return parseInt(s); }), num = _b[0], from = _b[1], to = _b[2];
        console.log({ num: num, from: from, to: to });
        var moved = [];
        while (num > 0) {
            var item = stacks[from - 1].pop();
            moved.unshift(item);
            num--;
        }
        (_a = stacks[to - 1]).push.apply(_a, moved);
    }
    var returnString = "";
    for (var _c = 0, stacks_1 = stacks; _c < stacks_1.length; _c++) {
        var stack = stacks_1[_c];
        returnString += stack.pop();
    }
    console.log(returnString);
});
