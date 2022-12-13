var _a = [0, 0, 0, 0, 0, 0, 0, 0], monkey0Count = _a[0], monkey1Count = _a[1], monkey2Count = _a[2], monkey3Count = _a[3], monkey4Count = _a[4], monkey5Count = _a[5], monkey6Count = _a[6], monkey7Count = _a[7];
var monkey0Items = [98, 89, 52];
var monkey1Items = [57, 95, 80, 92, 57, 78];
var monkey2Items = [82, 74, 97, 75, 51, 92, 83];
var monkey3Items = [97, 88, 51, 68, 76];
var monkey4Items = [63];
var monkey5Items = [94, 91, 51, 63];
var monkey6Items = [61, 54, 94, 71, 74, 68, 98, 83];
var monkey7Items = [90, 56];
function monkey0() {
    while (monkey0Items.length > 0) {
        var item = monkey0Items.shift();
        monkey0Count++;
        var worry = item * 2;
        worry = Math.floor(worry / 3);
        if (worry % 5 === 0) {
            monkey6Items.push(worry);
        }
        else {
            monkey1Items.push(worry);
        }
    }
}
function monkey1() {
    while (monkey1Items.length > 0) {
        var item = monkey1Items.shift();
        monkey1Count++;
        var worry = item * 13;
        worry = Math.floor(worry / 3);
        if (worry % 2 === 0) {
            monkey2Items.push(worry);
        }
        else {
            monkey6Items.push(worry);
        }
    }
}
function monkey2() {
    while (monkey2Items.length > 0) {
        var item = monkey2Items.shift();
        monkey2Count++;
        var worry = item + 5;
        worry = Math.floor(worry / 3);
        if (worry % 19 === 0) {
            monkey7Items.push(worry);
        }
        else {
            monkey5Items.push(worry);
        }
    }
}
function monkey3() {
    while (monkey3Items.length > 0) {
        var item = monkey3Items.shift();
        monkey3Count++;
        var worry = item + 6;
        worry = Math.floor(worry / 3);
        if (worry % 7 === 0) {
            monkey0Items.push(worry);
        }
        else {
            monkey4Items.push(worry);
        }
    }
}
function monkey4() {
    while (monkey4Items.length > 0) {
        var item = monkey4Items.shift();
        monkey4Count++;
        var worry = item + 1;
        worry = Math.floor(worry / 3);
        if (worry % 17 === 0) {
            monkey0Items.push(worry);
        }
        else {
            monkey1Items.push(worry);
        }
    }
}
function monkey5() {
    while (monkey5Items.length > 0) {
        var item = monkey5Items.shift();
        monkey5Count++;
        var worry = item + 4;
        worry = Math.floor(worry / 3);
        if (worry % 13 === 0) {
            monkey4Items.push(worry);
        }
        else {
            monkey3Items.push(worry);
        }
    }
}
function monkey6() {
    while (monkey6Items.length > 0) {
        var item = monkey6Items.shift();
        monkey6Count++;
        var worry = item + 2;
        worry = Math.floor(worry / 3);
        if (worry % 3 === 0) {
            monkey2Items.push(worry);
        }
        else {
            monkey7Items.push(worry);
        }
    }
}
function monkey7() {
    while (monkey7Items.length > 0) {
        var item = monkey7Items.shift();
        monkey7Count++;
        var worry = item * item;
        worry = Math.floor(worry / 3);
        if (worry % 11 === 0) {
            monkey3Items.push(worry);
        }
        else {
            monkey5Items.push(worry);
        }
    }
}
for (var i = 0; i < 20; i++) {
    console.log("Monkey 0:", { monkey0Count: monkey0Count, monkey0Items: monkey0Items });
    monkey0();
    console.log("Monkey 1:", { monkey1Count: monkey1Count, monkey1Items: monkey1Items });
    monkey1();
    console.log("Monkey 2:", { monkey2Count: monkey2Count, monkey2Items: monkey2Items });
    monkey2();
    console.log("Monkey 3:", { monkey3Count: monkey3Count, monkey3Items: monkey3Items });
    monkey3();
    console.log("Monkey 4:", { monkey4Count: monkey4Count, monkey4Items: monkey4Items });
    monkey4();
    console.log("Monkey 5:", { monkey5Count: monkey5Count, monkey5Items: monkey5Items });
    monkey5();
    console.log("Monkey 6:", { monkey6Count: monkey6Count, monkey6Items: monkey6Items });
    monkey6();
    console.log("Monkey 7:", { monkey7Count: monkey7Count, monkey7Items: monkey7Items });
    monkey7();
}
console.log({ monkey0Count: monkey0Count, monkey1Count: monkey1Count, monkey2Count: monkey2Count, monkey3Count: monkey3Count, monkey4Count: monkey4Count, monkey5Count: monkey5Count, monkey6Count: monkey6Count, monkey7Count: monkey7Count });
