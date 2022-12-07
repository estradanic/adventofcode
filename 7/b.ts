import {readFile} from "fs";

let pwd = "/";

const fileSystem = {"/": {size: 0, files: {}}}

function handleCd(record: string) {
  const [_, path] = record.split(/^\$ cd /);
  if (path === "/") {
    pwd = path;
  } else if (path === "..") {
    pwd = fileSystem[pwd].parent;
  } else {
    const parent = pwd;
    pwd = `${pwd}/${path}`;
    if (!fileSystem[pwd]) {
      fileSystem[pwd] = {parent, size: 0, files: {}};
    }
  }
}


function handleDir(record: string) {
  const [_, dir] = record.split(/^dir /);
  const path = `${pwd}/${dir}`;
  if (!fileSystem[path]) {
    fileSystem[path] = {parent: pwd, size: 0, files: {}};
  }
}

function handleFile(record: string) {
  const [size, file] = record.split(" ");
  if (!fileSystem[pwd].files[file]) {
    fileSystem[pwd].files[file] = parseInt(size);
    fileSystem[pwd].size += parseInt(size);
    let curDir = fileSystem[pwd];
    while (curDir.parent) {
      curDir = fileSystem[curDir.parent];
      curDir.size += parseInt(size);
    }
  }
}

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split("\r\n");
  for (const record of records) {
    if (!record) {
      continue;
    }
    // console.log();
    // console.log(record)
    if (record.startsWith("$ cd")) {
      handleCd(record);
    } else if (record.startsWith("dir")) {
      handleDir(record);
    } else if (!record.startsWith("$ ls")) {
      handleFile(record);
    }
    // console.log();
    // console.log({pwd});
    // console.log(fileSystem);
  }
  const totalSize = fileSystem["/"].size;
  const spaceNeeded = 30000000 - (70000000 - totalSize);
  let min = totalSize;
  for (const dir of Object.keys(fileSystem)) {
    if (fileSystem[dir].size >= spaceNeeded && fileSystem[dir].size < min) {
      min = fileSystem[dir].size;
    }
  }
  console.log(min);
});
