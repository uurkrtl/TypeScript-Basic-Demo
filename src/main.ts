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

//Bonus task
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

//Sort these numbers in descending order.
let sortedNumbers = list.sort((a, b) => b - a);

//Square these numbers.
let squared = sortedNumbers.map(num => num ** 2);

//Remove the lowest two numbers and the highest 4 numbers from the list.
let removedNumbers = squared.slice(2, -4);

//Remove all numbers that are divisible by 4.
let notDivisibleByFour = removedNumbers.filter(num => num % 4 !== 0);

//Add up all the numbers.
let sumOfNumbers = notDivisibleByFour.reduce((acc, num) => acc + num, 0);

console.log(sumOfNumbers) // 1#294#547