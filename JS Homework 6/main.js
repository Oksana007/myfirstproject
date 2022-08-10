// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
// let str = 'lorem ipsum';
// console.log(str.length);
// let str = 'javascript is cool';
// console.log(str.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.toUpperCase());
// let str = 'lorem ipsum' ;
// console.log(str.toUpperCase());
// let str =  'javascript is cool';
// console.log(str.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// let str = 'LOREM IPSUM';
// console.log(str.toLowerCase());
// let str =  'JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string  ' . Почистити її від зайвих пробілів.
// let str = ' dirty string  ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let sentense = 'Ревуть воли як ясла повні';
//   let split = sentense.split(' ')
//   console.log(split);

// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let arr = ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let slice = arr.slice(0,5);
// console.log(slice);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let map =  numbers.map(value => value.toString());
// console.log(map);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    const numbers = [11,21,3];
//   number.sort (function (a,b)
//     return (b-a);
//   console.log(numbers);
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// - є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort(function (a,b) {
  if (a.monthDuration > b.monthDuration ) {
    return 1;
  }
  console.log(monthDuration);

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let cards = [
//   {cardSuit: 'clubs', value: 'Ace', color:'black'},
//   {cardSuit: 'clubs', value: 2, color:'black'},
//   {cardSuit: 'clubs', value: 3, color:'black'},
//   {cardSuit: 'clubs', value: 4, color:'black'},
//   {cardSuit: 'clubs', value: 5, color:'black'},
//   {cardSuit: 'clubs', value: 6, color:'black'},
//   {cardSuit: 'clubs', value: 7, color:'black'},
//   {cardSuit: 'clubs', value: 8, color:'black'},
//   {cardSuit: 'clubs', value: 9, color:'black'},
//   {cardSuit: 'clubs', value: 10, color:'black'},
//   {cardSuit: 'clubs', value: 'Jack', color:'black'},
//   {cardSuit: 'clubs', value: 'Queen', color:'black'},
//   {cardSuit: 'clubs', value: 'King', color:'black'},
//
//   {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//   {cardSuit: 'diamonds', value: 2, color:'red'},
//   {cardSuit: 'diamonds', value: 3, color:'red'},
//   {cardSuit: 'diamonds', value: 4, color:'red'},
//   {cardSuit: 'diamonds', value: 5, color:'red'},
//   {cardSuit: 'diamonds', value: 6, color:'red'},
//   {cardSuit: 'diamonds', value: 7, color:'red'},
//   {cardSuit: 'diamonds', value: 8, color:'red'},
//   {cardSuit: 'diamonds', value: 9, color:'red'},
//   {cardSuit: 'diamonds', value: 10, color:'red'},
//   {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//   {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//   {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//   {cardSuit: 'hearts', value: 'Ace', color:'red'},
//   {cardSuit: 'hearts', value: 2, color:'red'},
//   {cardSuit: 'hearts', value: 3, color:'red'},
//   {cardSuit: 'hearts', value: 4, color:'red'},
//   {cardSuit: 'hearts', value: 5, color:'red'},
//   {cardSuit: 'hearts', value: 6, color:'red'},
//   {cardSuit: 'hearts', value: 7, color:'red'},
//   {cardSuit: 'hearts', value: 8, color:'red'},
//   {cardSuit: 'hearts', value: 9, color:'red'},
//   {cardSuit: 'hearts', value: 10, color:'red'},
//   {cardSuit: 'hearts', value: 'Jack', color:'red'},
//   {cardSuit: 'hearts', value: 'Queen', color:'red'},
//   {cardSuit: 'hearts', value: 'King', color:'red'},
//   {value: 'Joker', color:'red'},
//
//   {cardSuit: 'spades', value: 'Ace', color:'black'},
//   {cardSuit: 'spades', value: 2, color:'black'},
//   {cardSuit: 'spades', value: 3, color:'black'},
//   {cardSuit: 'spades', value: 4, color:'black'},
//   {cardSuit: 'spades', value: 5, color:'black'},
//   {cardSuit: 'spades', value: 6, color:'black'},
//   {cardSuit: 'spades', value: 7, color:'black'},
//   {cardSuit: 'spades', value: 8, color:'black'},
//   {cardSuit: 'spades', value: 9, color:'black'},
//   {cardSuit: 'spades', value: 10, color:'black'},
//   {cardSuit: 'spades', value: 'Jack', color:'black'},
//   {cardSuit: 'spades', value: 'Queen', color:'black'},
//   {cardSuit: 'spades', value: 'King', color:'black'},
//   {value: 'Joker', color:'black'},
//
// ];
// Додатково по reduce
// // Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//  let cards = {
//   spades:[],
//   diamonds:[],
//   hearts:[],
//   clubs:[]
// }
//
//  let array =  cards. reduce ((accumulator {...}, card:{...}) = > {
//     if (card.cardSuit === 'spades') {
//      accumulator.clubs.push(card);
//     }
//   if (card.cardSuit === 'diamonds') {
//     accumulator.clubs.push(card);
//   }
//   if (card.cardSuit === 'hearts') {
//     accumulator.clubs.push(card);
//   }
//   if (card.cardSuit === 'clubs') {
//     accumulator.clubs.push(card);
//   }
//      return accumulator;
//  }  { spades:[], diamonds:[], hearts:[], clubs:[]};
//
//     console.log(reduce);
