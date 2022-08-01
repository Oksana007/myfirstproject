
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let variablle = prompt(x = 2);
console.log(variablle)
if (x != 0){
  console.log('true')
  } else (
  console.log('false')
)

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time =  prompt ('What a quarter?');
  if (time >= 0 && time  <= 15){
    console.log('quarter one');
  } else if (time > 15 && time <= 30){
    console.log('quarter two');
  } else if (time > 30 && time <= 45){
    console.log('quarter three');
  } else if (time > 46 && time <=60){
    console.log('quarter four');
  } else
  {console.log ('guarter');
  }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt ('What day is it today?');
if (day >=1 && day <=10) {
  console.log( 'first decada');
} else if (day > 10 && day <=20){
  console.log('second decada');
} else if (day > 20 && day <=31) {
  console.log('third decade');
} else {
  console.log('In which decade of the month will you rest?');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let day = prompt('day a week');
switch ('day'){
  case 'Monday':
    console.log('Go to work');
    break;
  case 'Tuesday':
    console.log('Grocery shopping');
    break;
  case 'Wednesday':
    console.log('Writing an article');
    break;
  case 'Thursday':
    console.log('Мisiting trip');
    break;
  case 'Friday':
    console.log('read a book');
    break;
  case 'Saturday':
    console.log('dancing');
    break;
  case 'Sunday':
    console.log('sleep');
    break;
}

// Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   // Також потрібно врахувати коли введені рівні числа.

 let a = (42);
 let b = (37);
if (a > b){
  console.log(a)
}else if (b > a) {
  console.log(b)
}else if (a===b){
  console.log(a)
}

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = ('' || 'default');
console.log('x');
if (x = "default")
  console.log(x);
else (x = "default")
  console.log(x);


