//1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var primeNumber = []; //создал массив куда буду собирать простые числа
prime:  //создал метку 
for( var u = 2; u <=100; u++ ) { // т.к простые числа начинаются от 2 то счетчик запускаю от 2 до 100
   
    /*цикл проверяющий делится ли число u с чилсом меньшем него без остатка,
     если да то выходим из обоих циклов и пропускаем итерацию, если ни одно число до не делется без 
     остатка, то это число простое и мы его записываем в массив*/
    for( var n = 2; n < u; n++){ 
        if( u % n == 0) continue prime;
    } 

    primeNumber.push(n);
}
document.write("<h1>Список простых чисел: " +primeNumber+ "</h1>");


    /*2) С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

var b = -1;
do {
    b++;
    if(b == 0){
        document.write("<h3>" +b+ " - это ноль </h3>");
    }
    else if(b % 2 == 0){
        document.write("<h3>" +b+ " - это четное число </h3>");
    }
    else {
        document.write("<h3>" +b+ " - это нечетное число </h3>");
    }
}while (b < 10);

/*3) * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так: for(…){// здесь пусто}*/

var q;
for(q = 0; q < 10; q++){
    document.write("<h2>" +q+ "</h2>");
}
 
/*4) * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx*/

var mas = [];
y = 0
while(y < 20) {
    y++;
    mas.push("x");
    console.log(mas);
}
