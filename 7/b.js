"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var pwd = "/";
var fileSystem = { "/": { size: 0, files: {} } };
function handleCd(record) {
    var _a = record.split(/^\$ cd /), _ = _a[0], path = _a[1];
    if (path === "/") {
        pwd = path;
    }
    else if (path === "..") {
        pwd = fileSystem[pwd].parent;
    }
    else {
        var parent_1 = pwd;
        pwd = "".concat(pwd, "/").concat(path);
        if (!fileSystem[pwd]) {
            fileSystem[pwd] = { parent: parent_1, size: 0, files: {} };
        }
    }
}
function handleDir(record) {
    var _a = record.split(/^dir /), _ = _a[0], dir = _a[1];
    var path = "".concat(pwd, "/").concat(dir);
    if (!fileSystem[path]) {
        fileSystem[path] = { parent: pwd, size: 0, files: {} };
    }
}
function handleFile(record) {
    var _a = record.split(" "), size = _a[0], file = _a[1];
    if (!fileSystem[pwd].files[file]) {
        fileSystem[pwd].files[file] = parseInt(size);
        fileSystem[pwd].size += parseInt(size);
        var curDir = fileSystem[pwd];
        while (curDir.parent) {
            curDir = fileSystem[curDir.parent];
            curDir.size += parseInt(size);
        }
    }
}
(0, fs_1.readFile)("./input.txt", "utf8", function (_, data) {
    var records = data.split("\r\n");
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var record = records_1[_i];
        if (!record) {
            continue;
        }
        // console.log();
        // console.log(record)
        if (record.startsWith("$ cd")) {
            handleCd(record);
        }
        else if (record.startsWith("dir")) {
            handleDir(record);
        }
        else if (!record.startsWith("$ ls")) {
            handleFile(record);
        }
        // console.log();
        // console.log({pwd});
        // console.log(fileSystem);
    }
    var totalSize = fileSystem["/"].size;
    var spaceNeeded = 30000000 - (70000000 - totalSize);
    var min = totalSize;
    for (var _a = 0, _b = Object.keys(fileSystem); _a < _b.length; _a++) {
        var dir = _b[_a];
        if (fileSystem[dir].size >= spaceNeeded && fileSystem[dir].size < min) {
            min = fileSystem[dir].size;
        }
    }
    console.log(min);
});
