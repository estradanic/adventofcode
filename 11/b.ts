{
const universalDivisor = 9699690; // 5 * 2 * 19 * 7 * 13 * 3 * 11

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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
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
    if (worry > universalDivisor) {
      worry = worry % universalDivisor;
    }
    console.log({worry});
    if (worry % 11 === 0) {
      monkey3Items.push(worry);
    } else {
      monkey5Items.push(worry);
    }
  }
}

for (let i = 0; i < 10000; i++) {
  monkey0();
  monkey1();
  monkey2();
  monkey3();
  monkey4();
  monkey5();
  monkey6();
  monkey7();
}

const result = [monkey0Count, monkey1Count, monkey2Count, monkey3Count, monkey4Count, monkey5Count, monkey6Count, monkey7Count];

const max = Math.max(...result);
result.splice(result.indexOf(max), 1);
const secondMax = Math.max(...result);
console.log([max, secondMax]);
}