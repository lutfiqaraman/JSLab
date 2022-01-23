function minimumNumber(num1, num2) {
    if (num1 <= num2) {
        return num1;
    }

    return num2;
}

const firstNumber = 132;
const secondNumber = 62;

console.log(minimumNumber(firstNumber, secondNumber));
