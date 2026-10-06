// Викликає функції з lab1.js і виводить результати в консоль.

console.log('=== Завдання 1: calculateProductTotalPrice ===');
console.log('calculateProductTotalPrice(50, 3):', calculateProductTotalPrice(50, 3));
console.log('calculateProductTotalPrice(19.99, 1):', calculateProductTotalPrice(19.99, 1));
console.log('calculateProductTotalPrice(0, 5):', calculateProductTotalPrice(0, 5));

console.log('=== Завдання 2: convertMsToTimeSpan ===');
console.log('convertMsToTimeSpan(3661023):', convertMsToTimeSpan(3661023));
console.log('convertMsToTimeSpan(0):', convertMsToTimeSpan(0));
console.log('convertMsToTimeSpan(59999):', convertMsToTimeSpan(59999));

console.log('=== Завдання 3: getNumberSignStr ===');
console.log('getNumberSignStr(5):', getNumberSignStr(5));
console.log('getNumberSignStr(-5):', getNumberSignStr(-5));
console.log('getNumberSignStr(0):', getNumberSignStr(0));

console.log('=== Завдання 4: getGradeResult ===');
console.log('getGradeResult(95):', getGradeResult(95));
console.log('getGradeResult(80):', getGradeResult(80));
console.log('getGradeResult(65):', getGradeResult(65));
console.log('getGradeResult(40):', getGradeResult(40));
console.log('getGradeResult(-5):', getGradeResult(-5));
console.log('getGradeResult(150):', getGradeResult(150));

console.log('=== Завдання 5: calculateFactorial ===');
console.log('calculateFactorial(5):', calculateFactorial(5));
console.log('calculateFactorial(1):', calculateFactorial(1));
console.log('calculateFactorial(0):', calculateFactorial(0));
console.log('calculateFactorial(-3):', calculateFactorial(-3));

console.log('=== Завдання 6: calculateCartTotal ===');
console.log('calculateCartTotal([{10,2},{5,4}]):', calculateCartTotal([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 }
]));
console.log('calculateCartTotal([]):', calculateCartTotal([]));
console.log('calculateCartTotal([{price:100, quantity:1}]):', calculateCartTotal([
    { price: 100, quantity: 1 }
]));

console.log('=== Завдання 7: getBeastNumberSum1/2/3 ===');
console.log('getBeastNumberSum1():', getBeastNumberSum1());
console.log('getBeastNumberSum2():', getBeastNumberSum2());
console.log('getBeastNumberSum3():', getBeastNumberSum3());

console.log('=== Завдання 7 (альтернативний підхід): getBeastNumberSum2_AnotherApproach ===');
console.log('getBeastNumberSum2_AnotherApproach():', getBeastNumberSum2_AnotherApproach());

console.log('=== Завдання 8: getDivisibleNumbers ===');
// Увага: getDivisibleNumbers містить навмисний баг (безкінечний цикл),
// що робить його призначеним для налагодження через DevTools. Розкоментуйте, коли він буде виправлений.
// console.log('getDivisibleNumbers(20, 3):', getDivisibleNumbers(20, 3));
// console.log('getDivisibleNumbers(50, 7):', getDivisibleNumbers(50, 7));
// console.log('getDivisibleNumbers(10, 1):', getDivisibleNumbers(10, 1));

console.log('=== Завдання 9: getSameDigitNumbers ===');
console.log('getSameDigitNumbers(700):', getSameDigitNumbers(700));
console.log('getSameDigitNumbers(100):', getSameDigitNumbers(100));
console.log('getSameDigitNumbers(10):', getSameDigitNumbers(10));
