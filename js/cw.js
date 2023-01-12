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
