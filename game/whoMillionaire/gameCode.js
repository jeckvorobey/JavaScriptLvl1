var answer, ok;

do {
    ok = false;
    answer = +prompt('Добро пожаловать в игру "Кто хочет стать миллионером" \n' + works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - Выход из игры');
    if (answer == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, answer);
    }
} while (!ok);
switch (answer) {
    case 1:
        do {
            ok = false;
            answer = +prompt('Вы ответили правильно.\n' + works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - Выход из игры');
            if (answer == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, answer);
            }
        } while (!ok);
        switch (answer) {
            case 1:
                alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                break;
            case 2:
                alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                break;
            case 3:
                do {
                    ok = false;
                    answer = +prompt('Вы ответили правильно.\n' + works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - Выход из игры');
                    if (answer == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.b0, answer);
                    }
                } while (!ok);
                switch (answer) {
                    case 1:
                        alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                        break;
                    case 2:
                        alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                        break;
                    case 3:
                        alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                        break;
                    case 4:
                        do {
                            ok = false;
                            answer = +prompt('Вы ответили правильно.\n' + works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - Выход из игры');
                            if (answer == -1) {
                                break;
                            } else {
                                ok = isAnswer(works.b0, answer);
                            }
                        } while (!ok);
                        switch (answer) {
                            case 1:
                                alert('Поздравляем!!!\n Вы победили!!!\n Игра окончена.');
                                break;
                            case 2:
                                alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                                break;
                            case 3:
                                alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                                break;
                            case 4:
                                alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                                break;
                        }
                        break;

                }
                break;
            case 4:
                alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
                break;
        }
        break;
    case 2:
        alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
        break;
    case 3:
        alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
        break;
    case 4:
        alert('Это не верный ответ!!! \n Попробуйте начать с начала!');
        break;
}
alert('Спасибо за игру');

//функция проверки на коректность ввода данных
function isAnswer(q, answer) {
    if (isNaN(answer) || !isFinite(answer)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (answer < 1 || answer > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}