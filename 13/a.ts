import {readFile} from "fs";

type Packet = number | Packet[];

let sumInOrder = 0;

function packetsInOrder(left: Packet, right: Packet): boolean | undefined {
  console.log(`Compare ${JSON.stringify(left)} vs ${JSON.stringify(right)}`);
  if (typeof left === "number" && typeof right === "number") {
    if (left < right) {
      console.log("Left side is smaller, so inputs are in the right order");
      return true;
    } else if (left > right) {
      console.log("Right side is smaller, so inputs are not in the right order")
      return false;
    }
  } else if (typeof left === "number" && typeof right !== "number") {
    console.log(`Mixed types; convert left to [${left}] and retry comparison`);
    return packetsInOrder([left], right);
  } else if (typeof left !== "number" && typeof right === "number") {
    console.log(`Mixed types; convert right to [${right}] and retry comparison`);
    return packetsInOrder(left, [right]);
  } else if (typeof left !== "number" && typeof right !== "number") {
    for (let i = 0; i <= left.length; i++) {
      if (i >= left.length && left.length != right.length) {
        console.log("Left side ran out of items, so inputs are in the right order");
        return true;
      } else if (i >= right.length && left.length != right.length) {
        console.log("Right side ran out of items, so inputs are not in the right order");
        return false;
      } else if (i < left.length && i < right.length) {
        const innerResult = packetsInOrder(left[i], right[i]);
        if (innerResult !== undefined) {
          return innerResult;
        }
      }
    }
  }
  return undefined;
}

readFile("./input.txt", "utf8", (_, data) => {
  const records = data.split("\r\n\r\n");
  records.forEach((record, i) => {
    const [left, right] = record.split("\r\n").map((packet) => JSON.parse(packet)) as [Packet, Packet];
    if (packetsInOrder(left, right)) {
      sumInOrder += i + 1;
    }
    console.log();
  });
  console.log(sumInOrder);
});
