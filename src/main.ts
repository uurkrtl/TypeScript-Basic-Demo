//Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(num => num * 2);

//Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
let words = ['hello', 'world', 'goodbye', 'moon'];
let longerThanFiveLetters = words.filter(word => word.length > 5);

//Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
let numbers2 = [1, 2, 3, 4, 5];
let sum = numbers2.reduce((acc, num) => acc + num, 0);

//Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
let numbers3 = [1, 2, 3, 4, 5];
let atLeastOneGreaterThanTen = numbers3.some(num => num > 10);