import {readFile} from "fs";

type Packet = number | Packet[];

function packetsInOrder(left: Packet, right: Packet): number {
  // console.log(`Compare ${JSON.stringify(left)} vs ${JSON.stringify(right)}`);
  if (typeof left === "number" && typeof right === "number") {
    if (left < right) {
      // console.log("Left side is smaller, so inputs are in the right order");
      return -1;
    } else if (left > right) {
      // console.log("Right side is smaller, so inputs are not in the right order")
      return 1;
    }
  } else if (typeof left === "number" && typeof right !== "number") {
    // console.log(`Mixed types; convert left to [${left}] and retry comparison`);
    return packetsInOrder([left], right);
  } else if (typeof left !== "number" && typeof right === "number") {
    // console.log(`Mixed types; convert right to [${right}] and retry comparison`);
    return packetsInOrder(left, [right]);
  } else if (typeof left !== "number" && typeof right !== "number") {
    for (let i = 0; i <= left.length; i++) {
      if (i >= left.length && left.length != right.length) {
        // console.log("Left side ran out of items, so inputs are in the right order");
        return -1;
      } else if (i >= right.length && left.length != right.length) {
        // console.log("Right side ran out of items, so inputs are not in the right order");
        return 1;
      } else if (i < left.length && i < right.length) {
        const innerResult = packetsInOrder(left[i], right[i]);
        if (innerResult !== 0) {
          return innerResult;
        }
      }
    }
  }
  return 0;
}

readFile("./inputB.txt", "utf8", (_, data) => {
  const packetDivider1 = [[2]];
  const packetDivider2 = [[6]];
  let records = data.split("\r\n").map((packet) => JSON.parse(packet)) as Packet[];
  records.push(packetDivider1, packetDivider2);
  records = records.sort(packetsInOrder);
  const packetDivider1Index = records.indexOf(packetDivider1);
  const packetDivider2Index = records.indexOf(packetDivider2);
  records.forEach((record) => console.log(JSON.stringify(record)));
  console.log((packetDivider1Index + 1) * (packetDivider2Index + 1));
});
