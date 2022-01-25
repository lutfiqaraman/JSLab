function range(start, end) {
    let numbers = [];

    for (let i = start; i <= end; i++)
        numbers.push(i);

    console.log(sumOfNumbers(numbers));
}

function sumOfNumbers(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++)
        result += numbers[i];

    return result;
}

range(4, 5);
