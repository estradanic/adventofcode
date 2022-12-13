{
    var universalDivisor_1 = 9699690;
    var _a = [0, 0, 0, 0, 0, 0, 0, 0], monkey0Count_1 = _a[0], monkey1Count_1 = _a[1], monkey2Count_1 = _a[2], monkey3Count_1 = _a[3], monkey4Count_1 = _a[4], monkey5Count_1 = _a[5], monkey6Count_1 = _a[6], monkey7Count_1 = _a[7];
    var monkey0Items_1 = [98, 89, 52];
    var monkey1Items_1 = [57, 95, 80, 92, 57, 78];
    var monkey2Items_1 = [82, 74, 97, 75, 51, 92, 83];
    var monkey3Items_1 = [97, 88, 51, 68, 76];
    var monkey4Items_1 = [63];
    var monkey5Items_1 = [94, 91, 51, 63];
    var monkey6Items_1 = [61, 54, 94, 71, 74, 68, 98, 83];
    var monkey7Items_1 = [90, 56];
    var monkey0 = function () {
        while (monkey0Items_1.length > 0) {
            var item = monkey0Items_1.shift();
            monkey0Count_1++;
            var worry = item * 2;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 5 === 0) {
                monkey6Items_1.push(worry);
            }
            else {
                monkey1Items_1.push(worry);
            }
        }
    };
    var monkey1 = function () {
        while (monkey1Items_1.length > 0) {
            var item = monkey1Items_1.shift();
            monkey1Count_1++;
            var worry = item * 13;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 2 === 0) {
                monkey2Items_1.push(worry);
            }
            else {
                monkey6Items_1.push(worry);
            }
        }
    };
    var monkey2 = function () {
        while (monkey2Items_1.length > 0) {
            var item = monkey2Items_1.shift();
            monkey2Count_1++;
            var worry = item + 5;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 19 === 0) {
                monkey7Items_1.push(worry);
            }
            else {
                monkey5Items_1.push(worry);
            }
        }
    };
    var monkey3 = function () {
        while (monkey3Items_1.length > 0) {
            var item = monkey3Items_1.shift();
            monkey3Count_1++;
            var worry = item + 6;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 7 === 0) {
                monkey0Items_1.push(worry);
            }
            else {
                monkey4Items_1.push(worry);
            }
        }
    };
    var monkey4 = function () {
        while (monkey4Items_1.length > 0) {
            var item = monkey4Items_1.shift();
            monkey4Count_1++;
            var worry = item + 1;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 17 === 0) {
                monkey0Items_1.push(worry);
            }
            else {
                monkey1Items_1.push(worry);
            }
        }
    };
    var monkey5 = function () {
        while (monkey5Items_1.length > 0) {
            var item = monkey5Items_1.shift();
            monkey5Count_1++;
            var worry = item + 4;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 13 === 0) {
                monkey4Items_1.push(worry);
            }
            else {
                monkey3Items_1.push(worry);
            }
        }
    };
    var monkey6 = function () {
        while (monkey6Items_1.length > 0) {
            var item = monkey6Items_1.shift();
            monkey6Count_1++;
            var worry = item + 2;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 3 === 0) {
                monkey2Items_1.push(worry);
            }
            else {
                monkey7Items_1.push(worry);
            }
        }
    };
    var monkey7 = function () {
        while (monkey7Items_1.length > 0) {
            var item = monkey7Items_1.shift();
            monkey7Count_1++;
            var worry = item * item;
            if (worry > universalDivisor_1) {
                worry = worry % universalDivisor_1;
            }
            console.log({ worry: worry });
            if (worry % 11 === 0) {
                monkey3Items_1.push(worry);
            }
            else {
                monkey5Items_1.push(worry);
            }
        }
    };
    for (var i = 0; i < 10000; i++) {
        monkey0();
        monkey1();
        monkey2();
        monkey3();
        monkey4();
        monkey5();
        monkey6();
        monkey7();
    }
    var result = [monkey0Count_1, monkey1Count_1, monkey2Count_1, monkey3Count_1, monkey4Count_1, monkey5Count_1, monkey6Count_1, monkey7Count_1];
    var max = Math.max.apply(Math, result);
    result.splice(result.indexOf(max), 1);
    var secondMax = Math.max.apply(Math, result);
    console.log([max, secondMax]);
}
