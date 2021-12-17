const listOfNumbers = [1, 2, 3, 4, 5];
const multipliedNumbers = listOfNumbers.map(n => n * 10);

function PrintArray(array) {
    console.log('Your new array: ');
    console.log(array);
}

PrintArray(multipliedNumbers);
