// JavaScript Document
alert("Списать все денежные средства с вашей карты?")
// number string boolean null undefined

/* Задание 2.1
 Написать скрипт, который будет сравнивать разные типы данных и выводить 
итог их сравнения с пояснением. Данные для ввода объявлять в программе.*/

typeof NaN // не число ,это число
console.log("NaN(not a number) это не число, но Js выводит его числом")

var foo;
var bar;
if("foo" + + "bar")  // true
console.log("Оценивается как «foo» + (+ «bar»), который преобразует «bar» в не число.")

var a = 012;
a; //10
console.log( "ответ 10 ,принуждение с числовым типом" );

var x = 3;
if(x > 2 > 1 );
console.log("3>2 вычисляется значение true, в результате чего вторая часть выражения оценивается как true> 1, что ложно.");

/* Задание 2.2
 Написать скрипт, который будет принимать на ввод 2 однозначных числа и выводить наибольшее.
 Данные на вход брать из prompt. */

/* Задание 2.3
Написать программу сравнения букв и выводить букву, которая в алфавите стоит раньше. */
var massage = prompt("Что нужно сравнить : числа или буквы ? ");
if (massage == "числа") {

    var number1 = prompt("Введите число для сравнения - ");
    var number2 = prompt("Введите число для сравнения - ");
    var z;
    if (number1 > number2) {
        console.log(number1)
    }
    else if (number1 < number2) {
        console.log(number2)
    } else { }
}
else if (massage == "буквы") {
    var letter1;
    var letter2;
    var z = prompt("Введите 1-ю букву ");
    letter1 = z;
    var x = promt("Введите 2-ю букву ");
    letter2 = x;

    if (letter1 > letter2) {
        console.log(letter1)
    } else if (letter1 < letter2) {
        console.log(letter2)
    }
}
//Задание 1

// var string = "Hello", 
// number = 0,
// boolean = true,
// nul = null,
// info = " - is it ";
// var undefd;

// console.log(string + info + typeof string);
// console.log(number + info + typeof number)
// console.log(boolean + info + typeof boolean);
// console.log(nul + info + typeof nul)
// console.log(undefd + info + typeof undefd);

// var n = prompt("Число");
//     effect = n * n;
//     alert(n + " * 2 = " + effect);