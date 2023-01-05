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

// var uniqueInOrder = function (iterable) {

// };


// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder(''));
// console.log(uniqueInOrder(NaN));
// console.log(uniqueInOrder('a,,bbbbb,,,,,c,,,'));


// // // Відповідь

// var uniqueInOrder = function (iterable) {
//     const newArr = [];
//     const newIt = iterable.split('');
//     for (let i = 0; i < newIt.length; i += 1) {
//         if (newIt[i] !== newIt[i + 1]) {
//             newArr.push(newIt[i])
//         }

//     }
//     return newArr;
// };


// **************************

/*
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.
* Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
* Якщо до дедлайну 1 день - виведи рядок "Завтра"
* Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
* Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
 */

// const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//     alert("Сьогодні")
// } else if (daysUntilDeadline === 1) {
//     alert("Завтра")
// } else if (daysUntilDeadline === 2) {
//     alert("Післязавтра")
// } else {
//     alert("Дата в майбутньому")
// }

// switch (daysUntilDeadline) {
//     case 0:
//         alert("Сьогодні")
//         break;
//     case 1:
//         alert("Завтра")
//         break;
//     case 2:
//         alert("Завтра")
//         break;
//     default: alert("Дата в майбутньому")
// }

// **************************

//Напишіть функцію removeItem(arr, num), яка видаляє певний елемент із масиву.

// function removeItem(arr, num) {
//     const newArr = [];
//     for (let elem of arr) {
//         if (elem !== num) {
//             newArr.push(elem);
//         }
//     }
//     return newArr;
// }

// console.log(removeItem([3, 5, 7, 8, 5], 5)); // [3,7,8]

// **************************

/*
 * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//     { name: 'Ізумруд', price: 1300, quantity: 4 },
//     { name: 'Бриліант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(array, stoneName) {
//     for (let el of array) {
//         if (el.name === stoneName) {
//             return el.price * el.quantity
//         }
//     }
//     return 'not found'
// }




// console.log(calcTotalPrice(stones, 'Ізумруд'));
// console.log(calcTotalPrice(stones, 'Цегла'));

// **************************

// Цього разу ні історії, ні теорії. Наведені нижче приклади показують, як написати функцію accum:

// приклади:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр accum — це рядок, який містить лише літери з a..zі A..Z.

// function accum(s) {
// }

// console.log(accum("ZpglnRxqenU"));
// // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// console.log(accum("NyffsGeyylB"));
// // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// console.log(accum("MjtkuBovqrU"));
// // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// console.log(accum("EvidjUnokmM"));
// // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// console.log(accum("HbideVbxncC"));
// // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");


// // Відповідь
// function accum(s) {
//     let str = []
//     for (let i = 0; i < s.split('').length; i++) {
//         if (i !== 0) { str.push('-') }
//         for (let j = 0; j <= i; j++) {
//             if (j === 0) {
//                 str.push(s.split('')[i].toUpperCase())
//             } else if (j !== 0) {
//                 str.push(s.split('')[i].toLowerCase())
//             }
//         }
//     }
//     return str.join('')
// }

//*********************