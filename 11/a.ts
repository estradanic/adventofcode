{
let [monkey0Count, monkey1Count, monkey2Count, monkey3Count, monkey4Count, monkey5Count, monkey6Count, monkey7Count] = [0, 0, 0, 0, 0, 0, 0, 0];

const monkey0Items = [98, 89, 52];
const monkey1Items = [57, 95, 80, 92, 57, 78];
const monkey2Items = [82, 74, 97, 75, 51, 92, 83];
const monkey3Items = [97, 88, 51, 68, 76];
const monkey4Items = [63];
const monkey5Items = [94, 91, 51, 63];
const monkey6Items = [61, 54, 94, 71, 74, 68, 98, 83];
const monkey7Items = [90, 56];

const monkey0 = (): void => {
  while (monkey0Items.length > 0) {
    const item = monkey0Items.shift();
    monkey0Count++;
    let worry = item * 2;
    worry = Math.floor(worry / 3)
    if (worry % 5 === 0) {
      monkey6Items.push(worry);
    } else {
      monkey1Items.push(worry);
    }
  }
}

const monkey1 = (): void => {
  while (monkey1Items.length > 0) {
    const item = monkey1Items.shift();
    monkey1Count++;
    let worry = item * 13;
    worry = Math.floor(worry / 3)
    if (worry % 2 === 0) {
      monkey2Items.push(worry);
    } else {
      monkey6Items.push(worry);
    }
  }
}

const monkey2 = (): void => {
  while (monkey2Items.length > 0) {
    const item = monkey2Items.shift();
    monkey2Count++;
    let worry = item + 5;
    worry = Math.floor(worry / 3)
    if (worry % 19 === 0) {
      monkey7Items.push(worry);
    } else {
      monkey5Items.push(worry);
    }
  }
}

const monkey3 = (): void => {
  while (monkey3Items.length > 0) {
    const item = monkey3Items.shift();
    monkey3Count++;
    let worry = item + 6;
    worry = Math.floor(worry / 3)
    if (worry % 7 === 0) {
      monkey0Items.push(worry);
    } else {
      monkey4Items.push(worry);
    }
  }
}

const monkey4 = (): void => {
  while (monkey4Items.length > 0) {
    const item = monkey4Items.shift();
    monkey4Count++;
    let worry = item + 1;
    worry = Math.floor(worry / 3)
    if (worry % 17 === 0) {
      monkey0Items.push(worry);
    } else {
      monkey1Items.push(worry);
    }
  }
}

const monkey5 = (): void => {
  while (monkey5Items.length > 0) {
    const item = monkey5Items.shift();
    monkey5Count++;
    let worry = item + 4;
    worry = Math.floor(worry / 3)
    if (worry % 13 === 0) {
      monkey4Items.push(worry);
    } else {
      monkey3Items.push(worry);
    }
  }
}

const monkey6 = (): void => {
  while (monkey6Items.length > 0) {
    const item = monkey6Items.shift();
    monkey6Count++;
    let worry = item + 2;
    worry = Math.floor(worry / 3)
    if (worry % 3 === 0) {
      monkey2Items.push(worry);
    } else {
      monkey7Items.push(worry);
    }
  }
}

const monkey7 = (): void => {
  while (monkey7Items.length > 0) {
    const item = monkey7Items.shift();
    monkey7Count++;
    let worry = item * item;
    worry = Math.floor(worry / 3)
    if (worry % 11 === 0) {
      monkey3Items.push(worry);
    } else {
      monkey5Items.push(worry);
    }
  }
}

for (let i = 0; i < 20; i++) {
  console.log("Monkey 0:", {monkey0Count, monkey0Items});
  monkey0();
  console.log("Monkey 1:", {monkey1Count, monkey1Items});
  monkey1();
  console.log("Monkey 2:", {monkey2Count, monkey2Items});
  monkey2();
  console.log("Monkey 3:", {monkey3Count, monkey3Items});
  monkey3();
  console.log("Monkey 4:", {monkey4Count, monkey4Items});
  monkey4();
  console.log("Monkey 5:", {monkey5Count, monkey5Items});
  monkey5();
  console.log("Monkey 6:", {monkey6Count, monkey6Items});
  monkey6();
  console.log("Monkey 7:", {monkey7Count, monkey7Items});
  monkey7();
}

console.log({monkey0Count, monkey1Count, monkey2Count, monkey3Count, monkey4Count, monkey5Count, monkey6Count, monkey7Count});

}