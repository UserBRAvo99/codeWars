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

// //  Створіть функцію multiplyNumeric(obj), яка збільшує всі числові властивості об'єкта obj на 2.
// // Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об'єкт.
// // P.S. Використовуйте тип, щоб перевірити, чи значення властивості числове.
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// }

// const multiplyNumeric = menu => {
//     for (let key in menu) {
//         if (menu.hasOwnProperty(key) && typeof menu[key] === 'number') {
//             menu[key] *=  2
//     }
//     }
//     return menu
// }

// console.log(multiplyNumeric(menu));

//*********************

//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.
//Очікуваний результат: true якщо це об'єкт, false інакше. ({ a: 1 }) => true, ([1, 2, 3]) => false

// const isPlainObject = data => {
//     return typeof data === 'object' && !Array.isArray(data) && data !== null;
// };

// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject(5))
// console.log(isPlainObject(true))

//*********************

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     const v = Object.keys(object);
//     console.log(v);
//     propCount = v.length;
//     // Change code above this line
//     return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//*********************

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// for (let key of Object.keys(apartment)) {
//     values.push(key);
// }
// const keys = apartment;
// console.log(values);

//*********************

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     console.log(Object.values(salaries));
//     const arr = Object.values(salaries);
//     let total = arr.reduce((pV, s) => {
//         return (pV += s);
//     }, 0);
//     console.log(total);
//     // Change code above this line
//     return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// //  повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// //  повертає 400

//*********************

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//     hexColors.push(Object.values(color)[0]);
//     rgbColors.push(Object.values(color)[1]);
// }
// console.log(hexColors);
// console.log(rgbColors);

//*********************

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     let price = null;
//     products.forEach(el => {
//         if (el.name === productName) {
//             return (price = el.price);
//         }
//     });
//     // Change code above this line
//     return price;
// }

// console.log(getProductPrice('Radar'));
// //  повертає 1300.
// console.log(getProductPrice('Grip'));
// //  повертає 1200.
// console.log(getProductPrice('Scanner'));
// //  повертає 2700.
// console.log(getProductPrice('Droid'));
// //  повертає 400.
// console.log(getProductPrice('Engine'));
// //  повертає null.

//*********************

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const arr = [];
//     products.forEach(el => {
//         Object.keys(el).includes(propName) ? arr.push(el[propName]) : [];
//     });
//     return arr;
//     // Change code above this line
// }

// console.log(getAllPropValues('name'));
// //  повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity'));
// //  повертає [4, 3, 7, 9]
// console.log(getAllPropValues('price'));
// //  повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category'));
// //  повертає []

//*********************

// // Change code below this line
// function findMatches(f, ...args) {
//     const matches = []; // Don't change this line
//     f.forEach(e => {
//         args.forEach(el => {
//             if (e === el) {
//                 matches.push(e);
//             }
//         });
//     });
//     // Change code above this line
//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// //  повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// //  повертає [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// //  повертає [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
// //  повертає []

//*********************

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (let potion of this.potions) {
//             if (potion.name === newPotion.name)
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         for (let potion of this.potions) {
//             if (potion.name === potionName) {
//                 this.potions.splice(this.potions.indexOf(potion), 1);
//             }
//             return `Potion ${potionName} is not in inventory!`;
//         }
//     },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.indexOf(oldName);

//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// // повертає[
// //     ({ name: 'Speed potion', price: 460 },
// //     { name: 'Dragon breath', price: 780 },
// //     { name: 'Stone skin', price: 520 })
// // ];
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 }));
// //  в масиві potions останнім елементом буде цей об'єкт
// console.log(atTheOldToad.getPotions());

//*********************

//Напишіть програму на JavaScript, щоб отримати кількість всіх властивостей об'єктів в масиві
// const library = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true,
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true,
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false,
//     },
// ];
// let totalItem = 0;
// library.forEach(el => {
//     totalItem += Object.keys(el).length;
// });

// console.log(totalItem);

//********************* з лекціїї

// 'use strict';

// const people = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
// ];
// //нарцис  'Jhon'

// const people2 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: [],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
// ];
// //немає нарциса'

// const people3 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Eva'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
// ];
// //немає нарциса

// const people4 = [
//     {
//         name: 'Alex',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: [],
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Eva'],
//     },
// ];
// // //немає нарциса'

// // //Нарциса знають всі, нарцис незнає нікого

// function findNar(peoples) {}

// // console.log(findNar(people));
// // console.log(findNar(people2));
// // console.log(findNar(people3));
// console.log(findNar(people4));

//*********************

//Напишіть програму на JavaScript, щоб знайти найчастіший елемент масиву.
// Приклад масиву: const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Приклад виведення: а (5 разів)

// const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// const newOdj = {};
// arr2.forEach(el => {
//     if (!newOdj[el]) {
//         newOdj[el] = 1;
//     } else {
//         newOdj[el] += 1;
//     }
// });
// console.log(newOdj);
// let mValue = Math.max(...Object.values(newOdj));
// console.log(mValue);
// for (let el in newOdj) {
//     if (newOdj[el] === mValue) {
//         console.log(`${el} зустрічається ${mValue} разів.`);
//         break;
//     }
// }

//*********************

// var summation = function (num) {
//     let t = 0;
//     console.log(num);
//     for (let i = 0; i <= num; i += 1) {
//         t += i;
//     }
//     console.log(t);
// };

// console.log(summation(1));
// // ,  1);
// console.log(summation(2));
// // ,  3);
// console.log(summation(8));
// // , 36);

//*********************

// // 1. Напишіть дві функції
// // letMeSeeYourName(callback) - запитує ім'я користувача
// //через prompt та викликає callback функцію
// //greet(name) - коллбек, що приймає ім'я і логірує в консоль
// //Рядок "Привіт <name>"
// //Реалізуй перевірку, що prompt не порожній
// const letMeSeeYourName = callback => {
//     const yourName = prompt(`Введи своє ім'я:`);
//     // if (yourName !== '') {
//     //     callback(yourName);
//     // }
//     yourName.trim() && callback(yourName);
// };
// const greet = name => {
//     console.log(`Привіт ${name}`);
// };
// letMeSeeYourName(greet);

//********************* Замикання функції!!!!

// 7. Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається

// const savePassword = password => {
//     return userPassword => {
//         return password === userPassword;
//     };
// };
// const userPassword = savePassword('admin');

// console.log(userPassword('admin'));

//*********************

/*Ідентифікатори ISBN-10 складаються з десяти цифр. Перші дев'ять символів є цифрами 0-9. Остання цифра може бути 0-9або X, щоб вказати значення 10.

Номер ISBN-10 є дійсним, якщо сума цифр, помножена на їхню позицію за модулем 11, дорівнює нулю.

Наприклад:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
Це дійсний ISBN, оскільки:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
Приклади
1112223339   -->  true
111222333    -->  false
1112223339X  -->  false
1234554321   -->  true
1234512345   -->  false
048665088X   -->  true
X123456788   -->  false */

// function validISBN10(isbn) {}

// Рішення

// function validISBN10(isbn) {
//     const newArr = [];
//     let t = 0;
//     let isbnBoolean = true;
//     if (isbn.split('').length !== 10) {
//         return (isbnBoolean = false);
//     }
//     isbn.split('').forEach((e, i) => {
//         if (e === 'X' && i === 9) {
//             newArr.push(10);
//         } else if (e == Number(e)) {
//             newArr.push(Number(e));
//         }
//     });
//     if (newArr.length !== 10) {
//         return (isbnBoolean = false);
//     }

//     for (let i = 0; i < newArr.length; i += 1) {
//         t += newArr[i] * (i + 1);
//     }
//     if (t % 11 !== 0) {
//         return (isbnBoolean = false);
//     }
//     return isbnBoolean;
// }

// Виклик з перевіркою

// console.log(validISBN10('1112223339'));
// // ', true],
// console.log(validISBN10('048665088X'));
// // ', true],
// console.log(validISBN10('1293000000'));
// // ', true],
// console.log(validISBN10('1234554321'));
// // ', true],
// console.log(validISBN10('1234512345'));
// // ', false],
// console.log(validISBN10('1293'));
// // ', false],
// console.log(validISBN10('X123456788'));
// // // ', false],
// console.log(validISBN10('ABCDEFGHIJ'));
// // ', false],
// console.log(validISBN10('XXXXXXXXXX'));
// // ', false],
// console.log(validISBN10('048665088XZ'));
// // ', false];

// Рішення яке записав в CW
// function validISBN10(isbn) {
//     const nA = [];
//     let t = 0;
//     let iB = true;
//     if (isbn.split('').length !== 10) {
//         return (ib = false);
//     }
//     isbn.split('').forEach((e, i) => {
//         if (e === 'X' && i === 9) {
//             nA.push(10);
//         } else if (e == Number(e)) {
//             nA.push(Number(e));
//         }
//     });
//     if (nA.length !== 10) {
//         return (iB = false);
//     }
//     for (let i = 0; i < nA.length; i += 1) {
//         t += nA[i] * (i + 1);
//     }
//     if (t % 11 !== 0) {
//         return (iB = false);
//     }
//     return iB;
// }
//********************* filter)))))))))))

// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e));
// }

// function arrayDiff(a, b) {
//     if (a.length === 0) {
//         return a;
//     } else if (b.length === 0) {
//         return a;
//     }
//     for (let i = 0; i < a.length; i++) {
//         b.forEach(eB => {
//             a.forEach((eA, iA) => {
//                 if (eB === eA) {
//                     a.splice(iA, 1);
//                 }
//             });
//         });
//     }
//     return a;
// }

// console.log(arrayDiff([1, 2], [1]));
// // , [2], 'a was [1,2], b was [1]');
// console.log(arrayDiff([1, 2, 2], [1]));
// // , [2, 2], 'a was [1,2,2], b was [1]');
// console.log(arrayDiff([1, 2, 2], [2]));
// // , [1], 'a was [1,2,2], b was [2]');
// console.log(arrayDiff([1, 2, 2], []));
// // , [1, 2, 2], 'a was [1,2,2], b was []');
// console.log(arrayDiff([], [1, 2]));
// // , [], 'a was [], b was [1,2]');
// console.log(arrayDiff([1, 2, 3], [1, 2]));
// // , [3], 'a was [1,2,3], b was [1,2]');

//*********************

// //1 (map()) Потрібно отримати масив імен студентів та записати їх великими літерами.
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'yaga', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ];

// const newArr = studentRecords.map(e => {
//     return e.name.toUpperCase();
// });
// console.log(newArr);

//*********************

//2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
//отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'yaga', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ];

// const nA = studentRecords.filter(e => {
//     return e.marks < 50;
// });
// console.log(nA);

//*********************

//4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
//даних.
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'yaga', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ];
// const nameStudent = studentRecords.filter(({ marks }) => marks > 50).map(({ name }) => name);

// console.log(nameStudent);

//*********************

// function changeEven(numbers, value) {
//     // Change code below this line
//     return numbers.map(e => (e % 2 === 0 ? e + value : e));
//     // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//*********************

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         genres: ['adventure', 'history'],
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         genres: ['fiction', 'mysticism'],
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         genres: ['horror', 'mysticism', 'adventure'],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(({ genres }) => genres);
// const uniqueGenres = allGenres.filter((e, i, a) => {
//     return a.indexOf(e) === i;
// });
// console.log(allGenres);
// console.log(uniqueGenres);

//*********************

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//     },
// ];

// // Change code below this line
// const getFriends = users => [...new Set(users.flatMap(({ friends }) => friends))];
// // Change code above this line

// console.log(getFriends(users));

//*********************

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

//*********************

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//     },
// ];

// const getNamesSortedByFriendCount = users =>
//     [...users].sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);
// console.log(getNamesSortedByFriendCount(users));

//*********************

// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//       console.log(this.price);
//     },
//   };

//   function callAction(action) {
//     action();
//   }

// callAction(product.showPrice);

// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price);
//     },
// };

// function callAction(action) {
//     action();
// }

// console.log(callAction(product.showPrice.bind(product)));

//*********************

// const numbers = [1, 5, 6, 8, 7, 4, 1, 6, 98];
// console.log(Math.max(...numbers));
// console.log(Math.max.apply(null, numbers));

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(5, 10);

// sum.apply(null, [5, 9]);

//*********************
// /* Умова для задачі*/
// /*Крокетний клуб Western Suburbs має дві категорії членства: старше та відкрите. Їм потрібна ваша допомога з аплікаційною формою, у якій потенційним членам буде вказано, до якої категорії вони будуть призначені.

// Щоб бути старшим, член повинен бути не менше 55 років і мати гандикап більше 7. У цьому крокетному клубі гандикап коливається від -2 до +26; чим кращий гравець, тим нижчий гандикап.

// Введення
// Вхідні дані складатимуться зі списку пар. Кожна пара містить інформацію про одного потенційного члена. Інформація складається з цілого числа для віку людини та цілого числа для вади людини.

// Вихід
// Вихідні дані складатимуться зі списку рядкових значень (у Haskell та C: Openабо Senior), які вказуватимуть, чи слід помістити відповідного члена у старшу чи відкриту категорію.

// приклад
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

// /*Вирішення за допомогою forEach*/
// function openOrSenior(data) {
//     const newArr = [];
//     data.forEach(e => (e[0] >= 55 && e[1] >= 7 ? newArr.push('Senior') : newArr.push('Open')));
//     return newArr;
// }
// /*Вирішення за допомогою map*/
// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));
// }
// console.log(
//     openOrSenior([
//         [45, 12],
//         [55, 21],
//         [19, -2],
//         [104, 20],
//     ])
// );
// // ,['Open', 'Senior', 'Open', 'Senior'])
// console.log(
//     openOrSenior([
//         [3, 12],
//         [55, 1],
//         [91, -2],
//         [53, 23],
//     ])
// );
// // ,['Open', 'Open', 'Open', 'Open'])
// console.log(
//     openOrSenior([
//         [59, 12],
//         [55, -1],
//         [12, -2],
//         [12, 12],
//     ])
// );
// // ,['Senior', 'Open', 'Open', 'Open'])

//*********************

// // Створюю функцію конструктор яка має неазву(іменник) та починається з великої літери
// //аргументи які приймає конструктор, деструктуризуємо одразу
// const Car = function ({ brand, model, price }) {
//     //Функція викликається в контексі створеного об'єкту тобто в this записуэться посилання на нього
//     //Після закінчення роботи функції, всі значення вона переносить в новий об'єкт
//     (this.brand = brand), (this.model = model), (this.price = price);
// };
// //Після всих записів ми додаємо новий метод до нашої функції конструктора
// //Тепер в прототипі у кожного обєкта буде функція sayHi
// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :)');
// };

// // Створюю змінну в якій буде посилання на ланку в пам'яті де буде знаходитися копія об'кту
// // при такому створенні копії є необхідний оператор new (який робить всю цю магію)
// //Далі передаємо нові значення які запишуться в новий об'єкт
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q4',
//     price: 36000,
// });
// //Викликаємо змінну в яку записоно посилання на об'єкт
// console.log(myCar);
// //По ланцюжку прототипів ми зможемо звернутися до цієї функції з кожного екземпляра хоча на самому екземплярі цієї функції немає, this функції sayHi буде ссилатися на контекст викликаної функції
// myCar.sayHi();
// // Так ми можемо робити безліч разів з різними автіками, створюючи нові об'єкти в конструкторі
// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'H',
//     price: 25000,
// });
// console.log(myCar2);
// myCar2.sayHi();

// const myCar3 = new Car({
//     brand: 'Ford',
//     model: 'Focus',
//     price: 10000,
// });
// console.log(myCar3);
// myCar3.sayHi();
// //Кожен maCar - це екземпляр

//*********************

//Створивши клас NamedOne, яка приймає ім’я та прізвище як параметри та повертає
//об’єкт із властивостями firstName, lastName і fullName ( = firstName + пробіл +
//lastName ), які мають бути доступними.

// class NamedOne {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// var namedOne = new NamedOne('Naomi', 'Wang');
// console.log(namedOne.firstName); // -> "Naomi"
// console.log(namedOne.lastName); // -> "Wang"
// console.log(namedOne.fullName); // -> "Naomi Wang"

//*********************

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return this.rate * this.days;
//     }
//     get getFullName() {
//         return `${this.name} ${this.surname}`;
//     }
//     set getFullName(value) {
//         this.name = value;
//         console.log(this.name);
//     }
// }

// const worker = new Worker('Іван', 'Іванов', 10, 31);

// console.log(worker.name);
// //Виведе 'Іван'
// console.log(worker.surname);
// //Виведе 'Іванов'
// console.log(worker.getFullName);
// //Виведе 'Іванов Іван'
// console.log(worker.rate);
// //Виведе 10
// console.log(worker.days);
// //Виведе 31
// console.log(worker.getSalary());
// //Виведе 310 - тобто 10 * 31
// worker.getFullName = 'Poly';
// worker.getFullName = 'Mango';

//Напишіть новий клас Boss, цей клас успадковується від класу Worker та минулого
//завдання. З'являється нові властивості: workers - кількість працівників.
//І зарплата вважається інакше: добуток (множення) ставки rate на кількість
//відпрацьованих днів і кількість працівників.

// class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//         super(name, surname, rate, days);
//         this.workers = workers;
//     }
//     getSalary() {
//         return this.rate * this.days * this.workers;
//     }
// }

// const boss = new Boss('Іван', 'Іванов', 10, 31, 10);
// console.log(boss.name); //Виведе 'Іван'
// console.log(boss.surname); //Виведе 'Іванов'
// console.log(boss.getFullName); //Виведе 'Іванов Іван'
// console.log(boss.rate); //Виведе 10
// console.log(boss.days); //Виведе 31
// console.log(boss.workers); //Виведе 10
// console.log(boss.getSalary()); //Виведе 3100 - тобто 10 * 31 * 10

//*********************

/*
  Клієнт
  Напиши клас Client який створює об'єкт із властивостями login та email.
  login має бути суспільною властивістю, а email приватним.
  Доступ до email зроби через геттер та сетер.
  Перед тим як змінити емейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
  Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'
*/

// class Client {
//     #email;
//     constructor(login, email) {
//         this.#email = email;
//         this.login = login;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         if (this.#validator(newEmail)) {
//             this.#email = newEmail;
//         } else {
//             console.log('Email is not valid!');
//         }
//     }
//     #validator(newEmail) {
//         return newEmail.includes('@');
//     }
// }
// const client = new Client('user', 'qwe@gmail.com');
// client.email = 'qweq@Gmail.com';
// console.log(client.email);

//*********************

// class Calculator {
//     constructor() {
//         this.a = 0;
//     }
//     number(a) {
//         this.a = a;
//         return this;
//     }
//     add(num) {
//         this.a += num;
//         return this;
//     }
//     substruct(num) {
//         this.a -= num;
//         return this;
//     }
//     divide(num) {
//         this.a /= num;
//         return this;
//     }
//     multiply(num) {
//         this.a *= num;
//         return this;
//     }
//     get result() {
//         return this.a;
//     }
// }
// const calculator = new Calculator();
// calculator.number(4).add(10).substruct(3).multiply(3).divide(11);
// console.log(calculator.result);
// console.log(calculator);

//*********************

// class Car {
//     // Change code below this line
//     #price;
//     static MAX_PRICE = 50000;
//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         // чому не працює , якщо Car.MAX_PRICE замінити на this.MAX_PRICE
//         if (newPrice < Car.MAX_PRICE) {
//             return (this.#price = newPrice);
//         }
//         return this.#price;
//     }
//     // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

//*********************

// Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

// {/* <div>
//     <button id="alertButton">SHOW ME</button>
//     <input id="alertInput" type="text" />
// </div> */}

// const showMeEl = document.querySelector('#alertButton');
// const inputShowMeEl = document.querySelector('#alertInput');

// showMeEl.addEventListener('click', () => {
//     const value = inputShowMeEl.value.trim();
//     if (!value) return;
//     alert(value);
// });

//*********************
/*
Задача 3

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

    <div>
        <input id="passwordInput" type="text">
        <button id="passwordButton">Приховати</button>
    </div>

*/

// const InputEl = document.querySelector('#passwordInput');
// const btnEl = document.querySelector('#passwordButton');

// btnEl.addEventListener('click', () => {
//     // if (InputEl.type === 'text') {
//     //     InputEl.setAttribute('type', 'password');
//     //     btnEl.textContent = 'Розкрити';
//     // } else {
//     //     InputEl.setAttribute('type', 'text');
//     //     btnEl.textContent = 'Приховати';
//     // }
//     const flag = InputEl.type;
//     InputEl.type = flag === 'text' ? 'password' : 'text';
//     btnEl.textContent = flag === 'text' ? 'Розкрити' : 'Приховати';
// });

//*********************

/*

Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази


    <div>
        <ul class="list">
            <li class="listItem">1</li>
            <li class="listItem">4</li>
            <li class="listItem">8</li>
            <li class="listItem">16</li>
            <li class="listItem">20</li>
            <li class="listItem">30</li>
        </ul>
        <button id="double">Удвоить</button>
    </div>

*/

// const listEl = document.querySelector('.list');
// const dtnEl = document.querySelector('#double');

// const liArr = [...listEl.children];

// dtnEl.addEventListener('click', () => {
//     liArr.forEach(el => {
//         el.textContent *= 2;
//     });
// });

//*********************

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.

//     <div>
//         <div id="box"></div>
//         <button id="decrease">Зменшити</button>
//         <button id="increase">Збільшити</button>
//     </div>

// const btnDecreaseEl = document.querySelector('#decrease');
// const btnincreaseEl = document.querySelector('#increase');
// const boxEl = document.querySelector('#box');
// let boxSize = boxEl.clientWidth;

// const apdateBox = function () {
//     //
//     // boxEl.style.width = boxSize + 'px';
//     // boxEl.style.height = boxSize + 'px';
//     // інлайнові стилі
//     boxEl.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; border: solid red 1px;`;
// };

// btnDecreaseEl.addEventListener('click', () => {
//     boxSize -= 10;
//     apdateBox();
// });
// btnincreaseEl.addEventListener('click', () => {
//     boxSize += 10;
//     apdateBox();
// });

//*********************

/*
Задача 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
    <div>
        <div class="statList">
            <button class="calcButton" data-number=5>Button #1</button>
            <button class="calcButton" data-number=2>Button #2</button>
            <button class="calcButton" data-number=10>Button #3</button>
            <button class="calcButton" data-number=50>Button #4</button>
            <button class="calcButton" data-number=0>Button #5</button>
            <button class="calcButton" data-number=20>Button #6</button>
        </div>
        <button id="resultButton">Вывести результат</button>
        <div id="resultSection"></div>
    </div>
*/
//ДЕлегування - пройом!!!
// const statListEl = document.querySelector('.statList');
// // якщо закоментувати цей код, все працюватиме. Але при id можна записати на пряму(працює тільки з id) , то му що цей айдішнік записується на глобальний об'єкт. Та погіршується читаємість коду(краще не використовувати)
// const resultButton = document.querySelector('#resultButton');
// const resultSectionEl = document.querySelector('#resultSection');

// let counterValue = 0;

// statListEl.addEventListener('click', event => {
//     // Перевіряємо чи працює подія і на яких елементах
//     // console.log(event.target);
//     // Перевірка щоб не попасти між кнопок
//     if (!event.target.classList.contains('calcButton')) return;
//     // Звертажмось до data кнопки через dataset.number (завжди повертає рядок)
//     const dataNumber = Number(event.target.dataset.number);
//     counterValue += dataNumber;
// });

// resultButton.addEventListener('click', () => {
//     resultSectionEl.textContent = counterValue;
// });

//*********************
// * Є функція, яка генерує випадкові числа від 1 до 4.
//  * Написати функцію, яка повертає проміс.
//  * Зробіть так, щоб згенероване число було затримкою функції setTimeout в секундах.
//  * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
//  * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
//  */

// const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;
// function makePromise() {
//     return new Promise((resolve, reject) => {
//         const random = getRandomNumber();
//         setTimeout(() => {
//             if (random < 3) {
//                 resolve(`✅ Resolved after ${random} sec`);
//             } else {
//                 reject(`❌ Rejected after ${random} sec`);
//             }
//         }, random * 1000);
//     });
// }
// makePromise().then(console.log).catch(console.log);
