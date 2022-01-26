function reverseArray(array) {
    let reverseArray = [];

    for (let i = array.length-1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }

    return reverseArray;
}

let testArray = [1, 2, 3, 4, 5];
console.log(reverseArray(testArray));
