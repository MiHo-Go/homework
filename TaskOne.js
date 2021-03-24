/*
// Задание 1.1 - Вариант первый ---------------------------------------------
let a = 6; 
let res = a;

for(;res<10;){
    if(res == 0 ){
        res = "null";
        console.log(a, res);
    }
    if (res == 1 ){
        res = "one";
        console.loga(a, res);
    }
   
    if (res == 2 ){
        res = "two";
        console.log(a, res);
    }
    if(res ==3 ){
        res = "three";
        console.log(a, res);
    }
    if (res ==4 ){
        res = "four";
        console.log(a, res);
    }
   
    if (res == 5 ){
        res = "five";
        console.log(a, res);
    }
    if (res == 6 ){
        res = "six";
        console.log(a, res);
    }
    if(res == 7){
        res = "seven";
        console.log(a, res);
    }
    if (res == 8 ){
        res = "eight";
        console.log(a, res);
    }
   
    if (res == 9 ){
        res = "nine";
        console.log(a, res);
    }
   
}*/





// Задание 1.1 - Вариант второй -----------------------------------------
/*
let a = 3; 

let result =0;
switch(a){
    case 0: result = "zero"; break;
    case 1: result = "one"; break;
    case 2: result = "two"; break;
    case 3: result = "three"; break;
    case 4: result = "four"; break;
    case 5: result = "five"; break;
    case 6: result = "six"; break;
    case 7: result = "seven"; break;
    case 8: result = "eight"; break;
    case 9: result = "nine"; break;
}

console.log(a, result);
*/





/* //Задание 1.2: Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, что число является нулевым либо положительным либо отрицательным.
 
let a = -100;
let zero = "null";
let plus = "positive number";
let minus = "negative number"

if(a>0){

    console.log(plus);
}
else if(a< 0){

    console.log(minus);
}
else{

    console.log(null);
}
*/






//Задание 1.3 - Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число. В зависимости от того какая единица измерения написать скрипт, который выводит количество байт. Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.
/*
let a ="mb";
let b = 2;
let c =1024;
if (a == "byte"){
    let res = b;
    console.log(res);
}
if (a == "kb"){
    let res = b*c;
    console.log(res);
}
if (a == "mb"){
    let res = b*(c**2);
    console.log(res);
}
if (a == "gb"){
    let res = b*(c**3);
    console.log(res);
}
*/





 //Задание 1.4 -Написать скрипт который вычислит:
//Сколько процентов заплатит клиент за все время
//Сколько процентов заплатит клиент за один календарный год
//Какое общее количество денежных средств клиента банка выплатит за все года
/*
let percent = 20; 
let volume = 10000;
let years= 3;

console.log("Количество процентов за все время:");
let allPercent =percent*years;
console.log(allPercent);

console.log("Количество процентов за все время(в денежных единицах):");
let allMoney =(volume * percent * years) /100;
console.log(allMoney);

console.log("Количество процентов за один год:");
console.log(percent);

console.log("Количество процентов за один год(в денежных единицах):");
console.log((percent*volume)/100);

console.log("Количество денег за все время:");
let allYears =volume+ allMoney;
console.log(allYears);
*/