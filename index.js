let line = '_________________________';
//1_____________________________________________________________________________________________________________________
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
console.log(line + '1.1\n');

// let mainArr = [
//     [0, 1, 2, 3, 4, 'zero', 'one', 'two', 'three', 'four', 0, true, 2, 'three', false]];
// for (let i = 0; i < mainArr.length; i++) {
//     console.log(mainArr[i]);
// }

//_____________________________________________________
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log(line + '1.2\n');

// let arr0 = [];
//
// arr0[0] = 'dflkf';
// arr0[1] = 32;
// arr0[2] = 331;
// arr0[3] = true;
//
// // console.log(arr0);
//
// for (let i = 0; i < arr0.length; i++) {
//     console.log(arr0[i]);
// }


//2_____________________________________________________________________________________________________________________
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(line + '2.1\n');

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> что-то </div>`);
// }

//_____________________________________________________
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(line + '2.2\n');

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> индекс - ${i} </div>`);
// }

//_____________________________________________________
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(line + '2.3\n');

// for (let i = 0; i < 20; i++) {
//     document.write(`<h1> что-то </h1>`);
// }

//_____________________________________________________
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
console.log(line + '2.4\n');

// for (let i = 0; i < 20; i++) {
//     document.write(`<h1> индекс - ${i} </h1>`);
// }


//3_____________________________________________________________________________________________________________________
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log(line + '3.1\n');

// let arrNumber = [];
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
// }

//_____________________________________________________
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log(line + '3.2\n');

// let arrStr = [];
// for (let i = 0; i < 10; i++) {
//     console.log(`бла-бла-бла`);
// }

//_____________________________________________________
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log(line + '3.3\n');

// let arr10 = [1,2,3,4,5,'six','seven',true,'nine',false];
// for (let i = 0; i < 10; i++) {
//     console.log(arr10[i]);
//  }

//_____________________________________________________
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log(line + '3.4\n');

// let arrBoolean = [1,2,3,4,5,'six','seven',true,'nine',false];
// for (let i = 0; i < 10; i++) {
//     if (typeof arrBoolean[i] === "boolean"){
//         console.log(arrBoolean[i]);
//     }
// }

//_____________________________________________________
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log(line + '3.5\n');

// let arr10 = [1,2,3,4,5,'six','seven',true,'nine',false];
// for (let i = 0; i < 10; i++) {
//     if (typeof arr10[i] === "number"){
//         console.log(arr10[i]);
//     }
// }

//_____________________________________________________
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log(line + '3.6\n');

// let arrString = [1,2,3,4,5,'six','seven',true,'nine',false];
// for (let i = 0; i < 10; i++) {
//     if (typeof arrString[i] === "string"){
//         console.log(arrString[i]);
//     }
// }

//4_____________________________________________________________________________________________________________________
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log(line + '4.1\n');

// let mass = [];
// mass[0] = 1;
// mass[1] = 'dva';
// mass[2] = true;
// mass[3] = 4;
// mass[4] = 'five';
// mass[5] = false;
// mass[6] = 7;
// mass[7] = 'vosiem';
// mass[8] = true;
// mass[9] = 10;
//
// console.log(mass)

//_____________________________________________________
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(line + '4.2\n');

// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
//     document.write(`${i}`);
// }

//_____________________________________________________
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(line + '4.3\n');

// for (let i = 0; i < 100; i++) {
//     console.log(`${i}`);
//     document.write(`${i}`);
// }

//_____________________________________________________
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log(line + '4.4\n');

// for (let i = 0; i < 100; i + 2) {
//     console.log(`${i}`);
//     document.write(`${i}`);
// }

//_____________________________________________________
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log(line + '4.5\n');
document.write(line + '4.5\n');

// for (let i = 0; i < 100; i++) {
//     if (i%2 == 0 && i !== 0){
//         console.log(`${i}`);
//         document.write(`<div>${i}</div>`);
// }}

//_____________________________________________________
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(line + '4.6\n');
document.write(line + '4.6\n');

// for (let i = 0; i < 100; i++) {
//     if (i%2 == 1){
//         console.log(`${i}`);
//         document.write(`<div>${i}</div>`);
//     }}

//5_____________________________________________________________________________________________________________________
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//-----------------
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//-----------------
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
console.log(line + '5\n');

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities =[];
//
// for (const userId of usersWithId) {
//     for(const citiId of citiesWithId){
//         if (userId.id===citiId.user_id){
//             usersWithCities.push({...userId,citiId});
//         }
//     }
// }
// console.log(usersWithCities)