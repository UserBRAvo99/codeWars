// **************************
//  ЗАдача з код варсу

// /*Після важкої роботи в офісі ви вирішили трохи відпочити у відпустці. Тож ви забронюєте рейс для себе та вашої дівчини та спробуєте залишити весь безлад позаду.

// Вам знадобиться орендований автомобіль, щоб пересуватися під час відпустки. Менеджер автопрокату робить вам вигідні пропозиції.

// Кожен день оренди автомобіля коштує 40 доларів. Якщо ви орендуєте автомобіль на 7 і більше днів, ви отримуєте знижку 50 доларів США. Крім того, якщо ви орендуєте автомобіль на 3 або більше днів, ви отримуєте 20 доларів США від загальної суми.

// Напишіть код, який видає загальну суму за різні дні (d). */

// function rentalCarCost(d) {
//     return  (d >= 3 && d < 7) ? (d * 40) - 20 : (d >= 7) ? (d * 40) - 50 : d * 40
// }
// // const rentalCarCost = d => (d >= 3 && d < 7) ? (d * 40) - 20 : (d >= 7) ? (d * 40) - 50 : d * 40;


// console.log(rentalCarCost(1));
// // Відповідь - 40
// console.log(rentalCarCost(2));
// // Відповідь - 80
// console.log(rentalCarCost(3));
// // Відповідь - 100
// console.log(rentalCarCost(4));
// // Відповідь - 140
// console.log(rentalCarCost(5));
// // Відповідь - 180
// console.log(rentalCarCost(6));
// // Відповідь - 220
// console.log(rentalCarCost(7));
// // Відповідь - 230
// console.log(rentalCarCost(8));
// // Відповідь - 270
// console.log(rentalCarCost(9));
// // Відповідь - 310
// console.log(rentalCarCost(10));
// // Відповідь - 350



// // Відповідь
// function rentalCarCost(d) {
//   return  (d >= 3 && d < 7) ? (d * 40) - 20 : (d >= 7) ? (d * 40) - 50 : d * 40
// }

// **************************

// // Напиши функцію formatString(string) яка приймає рядок і форматує його якщо
// // необхідно.

// // Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому
// // вигляді. Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка
// // символів і додає в кінець рядка три крапки '...', після чого повертає укорочену
// // версію

// const formatString = function (string) {
// }

// // Відповідь

// const formatString = function (string) {
//   // твій код
//     if (string.length > 40) {
//         return string.split('').splice((string.split('')[0]), 40,).join('') + '...';
//     }
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // повернеться оригінальний рядок

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // повернеться форматований рядок

// console.log(formatString('Curabitur ligula sapien.'));
// // повернеться оригінальний рядок


// **************************

/*  Дано список цілих чисел, визначте, парною чи непарною є сума його елементів.

Дайте свою відповідь у вигляді відповідного рядка "odd"або "even".

Якщо вхідний масив порожній, розглядайте його як: [0](масив із нулем).

приклади:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

// function oddOrEven(array) {
// }


// console.log(oddOrEven([0]));
// // , 'even')
// console.log(oddOrEven([1]));
// // , 'odd')
// console.log(oddOrEven([]));
// // , 'even')
// console.log(oddOrEven([0, 1, 5]));
// // , 'even')
// console.log(oddOrEven([0, 1, 3]));
// // , 'even')
// console.log(oddOrEven([1023, 1, 2]));
// // , 'even')
// console.log(oddOrEven([0, -1, -5]));
// // , 'even')
// console.log(oddOrEven([0, -1, -3]));
// //  'even')
// console.log(oddOrEven([-1023, 1, -2]));
// // , 'even')
// console.log(oddOrEven([0, 1, 2]));
// // , 'odd')
// console.log(oddOrEven([0, 1, 4]));
// // , 'odd')
// console.log(oddOrEven([1023, 1, 3]));
// // , 'odd')
// console.log(oddOrEven([0, -1, 2]));
// // , 'odd')
// console.log(oddOrEven([0, 1, -4]));
// // , 'odd')
// console.log(oddOrEven([-1023, -1, 3]));
// // , 'odd')

// // // Відповідь

// function oddOrEven(array) {
//     return (array.reduce((pV, b) => {return pV + b}, 0)) % 2 === 0 ? 'even' : 'odd';
// }

// **************************

/* Реалізуйте функцію unique_in_order, яка приймає як аргумент послідовність і повертає список елементів без будь-яких елементів із однаковим значенням один поруч із збереженням початкового порядку елементів.

Наприклад:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

// var uniqueInOrder=function(iterable){
//   //your code here - remember iterable can be a string or an array
// }


// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// // // Відповідь

// var uniqueInOrder=function(iterable){
//     const newAr = []
//     const newIterable = iterable.split('')
//     for (let i = -1; i < newIterable.length; i += 1) {;
//         if (iterable[i] !== newIterable[i + 1]) {
//             newAr.push(newIterable[i])
//         }
//     }
//     return newAr
// }