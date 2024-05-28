// задание 1
// alert('Я JavaScript!.')


// задание 2
        // let name = "Иван";
        // alert(name);
        // let admin = "Иван";
        // alert(admin);

// задание 3 (ответ  hello Ilya)
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// задание 4
// let a;
// a = prompt('Введите ваше имя', 'Вика');
// alert(a);

// задание 5 (ответ 2;2;2)
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// alert(a)
// alert(b)
// alert(c)

// задание 6 (ответ4;5)
// let a = 2;
// let x = 1 + (a *= 2);
// alert(a)
// alert(x)

// задание 7
// let a = Number(prompt("Первое число?", 1));
// let b = Number(prompt("Второе число?", 2));
// alert(a + b); 

// задание 8
// a = 7 > 5
// b = "стол" > "стул"
// c = "4" > "52"
// d = undefined == null
// e = undefined === null
// f = null == "\n0\n"
// g = null === +"\n0\n"
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)
// alert(g)

// задание 9 (да)
// if ("0") {
//     alert( 'Привет' );
//   }
  
// задание 10
// let message;
// let a;
// a = prompt('Какое «официальное» название JavaScript?');
// if (a == 'ECMAScript'){
//     alert(message = 'Верно!');
// } else {
//     alert(message = 'Не знаете? ECMAScript!');
// }

// задание 11
// let a;
// a = prompt('Введите число')
// if (a > 0) {
//     alert('1')
// } else if (a < 0){
//             alert('-1')
// } else {
//             alert('0')
// }
  
// задание 12

// let a;
// a = prompt('Введи первое число')
// a = Number(a)
// let b;
// b = prompt('Введи второе число')
// b = Number(b)
// let result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result)

// задание 13
// let login;
// login = prompt('Введите Логин');
// let message = (login == 'Сотрудник') ? 'Привет' : 
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : '';
// alert(message)

// задание 14
// alert( null || 4 || undefined );

// задание 15
// alert( alert(1) || 2 || alert(3) );

// задание 16
// alert( 1 && null && 2 );


// задание 17
// alert( alert(1) && alert(2) );

// задание 18
// alert( null || 2 && 3 || 4 );


// задание 19
// let value = NaN;
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// alert(value);
        

// задание 20
// let pers;
// let age;
// age = prompt('Введи число')
// if (age >= 14 && age <= 90){
//     pers = 'ДА';
// } else {
//     pers = 'НЕТ';
// }
// alert(pers)


// задание 21
// let pers;
// let age;
// age = prompt('Введи число')
// if (age >=! 17 && age <=! 99){
//     pers = 'ДА';
// } else {
//     pers = 'НЕТ';
// }
// alert(pers)
        

// задание 22
// if (-1 || 0) alert( 'first' );//да
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );//да 


// задание 23
let message;
let message2;
let login;
login = prompt('Введите логин');
if (login == ''){
    location.reload();
}else if (login == 'Админ'){
    let password;
    password = prompt('Пароль');
    if (password == 'Я Главный'){
        message2 = 'Здравствуйте';
        alert(message2);
    } else if (password == 'Отмена'){
        message2 = 'Отменено';
        alert(message2); 
    } else {
        message2 = 'Неверный пароль';
        alert(message2);
    }
} else if (login == 'Отмена'){
    message = 'Отменено';
    alert(message);
} else {
    message = 'Я вас не знаю';
    alert(message);
}














