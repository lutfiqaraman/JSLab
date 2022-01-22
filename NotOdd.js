function makeOddNegative(n) {
    let result = n;

    if (n % 2 !== 0) {
        result = n * -1;
    }

    return result;
}

let result1 = makeOddNegative(3);
let result2 = makeOddNegative(4);

console.log(result1); // -3
console.log(result2); // 4
