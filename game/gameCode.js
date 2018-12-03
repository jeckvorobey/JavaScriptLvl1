var event, ok;
var answer = [];

do { //Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }
    answer.push(event);
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
            }
            answer.push(event);
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    answer.push(event);
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    answer.push(event);
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
            }
            answer.push(event);
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    answer.push(event);
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    answer.push(event);
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

var ans = +prompt('введите номер вопроса');

if (ans < 1 || ans > 4) {
    alert('вопроса под таким номером небыло')
} else {
    switch (ans) {
        case 1:
            if (answer[0] == 1) {
                alert(works.a00 + works.a1);
            } else {
                alert(works.a00 + works.a2);
            }
            break;
        case 2:
            if (answer[0] == 1 || answer[1] == 1) {
                alert(works.b00 + works.b1);
            }
            else if (answer[0] == 2 ||  answer[1] == 1) {
                alert(works.c00 + works.c1);
            } 
            else if (answer[0] == 2 || answer[1] == 2) {
                alert(works.c00 + works.c2);
            }
            else {
                alert(works.b00 + works.b2);
            }
            break;
        case 3:
            if (answer[2] == 1) {
                alert(works.c00 + works.c1);
            } else {
                alert(works.c00 + works.c2);
            }
            break;
        case 4:
            if (answer[3] == 1) {
                alert(works.d00 + works.d1);
            } else {
                alert(works.d00 + works.d2);
            }
            break;
        default:
            {
                alert('Ошибка');
            }
    }
}
console.log(answer);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}