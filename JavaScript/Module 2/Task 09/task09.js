function even(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}
const originalArray = [2, 7, 4, 9, 10, 13, 6,8,19,15,20];
const evenNumbers = even(originalArray);
console.log("Original array:", originalArray);
console.log("Even numbers array:", evenNumbers);