// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
  function calculatethearea (a,b)  {
  let res = a*b;
  return res;
  }
  calculatethearea(10,20)
  console.log(calculatethearea(10,20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
  function areaofcircle (p,r,) {
    let res = p*r*2;
    return res;
}
 areaofcircle(3.14,radius =6,)
 console.log(areaofcircle(3.14,radius =6));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
  function cylinderofarea (p,r,h) {
  let res = 2*p*r(r+h);
  return res;
}
  cylinderofarea(3.14,12,8)
  console.log(cylinderofarea(3.14,12,8));
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];
 function array (array) {
 for (item of array) {
   console.log(item);
 }
 }
array(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let word = 'It was a great book'
function textprint(text) {
  document.write(`<p>${text}</p>`)
}
textprint(word)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let word= 'Hello'
function textprint(text) {
  document.write(`<ul>
           <li>Hello </li>
           <li>Hello</li>
           <li>Hello</li>
  </ul>`)
}
textprint(word)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let element = ['45','hello','true','false','asd', '56']
function arrayprint (element) {
  for( let i = 0; i < element.lenght; i++) {
    let items = element [i]
    document.write(`<ul><li>${element}</li></ul>`)
  }
  arrayprint(element);
//     створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
function objectofarray (items){
  for (let i = 0;  i < items; i++) {
    document.write(`<div>
        <p> id: ${items[i].id},name: ${items[i].name},age:${items[i].age}</p>
</div>`)
  }
}
  const array = [
  {id:56, name:"mukola", age:45},
  {id: 34,name: 'olena',age:23},
  {id: 21, name: 'olena',age:34}
]
 objectofarray(array)
