fchess();
createTopLetters(letters);
createBottomLetters(letters);
createLeftNumbers();
createRightNumbers();

//Создаем шахматную доску
function fchess() {
    var Chess = document.querySelector(".chess");
    var div;
    var temp = true;
    for (i = 0; i < 8; i++) {
        for (a = 0; a < 8; a++) {
            if (a == 0) temp = !temp;

            div = document.createElement("div");
            div.className = "blockChess";
            if (temp) {
                div.className += " dark";
            } else div.className += " light";

                //расставляем фигуры
            for (pos of figures) {
                if(pos.x == i && pos.y == a)
                div.innerHTML = pos.figure;
                div.className += " position";
            }
            
            Chess.appendChild(div);
            temp = !temp;
        }
    }


}
//Создание верхних букв
function createTopLetters(letters) {
    letters.reverse();
    for (letter of letters) {
        let letterSpan = document.createElement('span');
        letterSpan.innerText = letter;
        letterSpan.className = 'letter rotate';
        document.getElementsByClassName('letters')[0].appendChild(letterSpan);
    }
}

//Создание нижнего ряда букв
function createBottomLetters(letters) {
    letters.reverse();
    for (letter of letters) {
        let letterSpan = document.createElement('span');
        letterSpan.innerText = letter;
        letterSpan.className = 'letter';
        document.getElementsByClassName('letters')[1].appendChild(letterSpan);
    }
}

//создаем левый блок цифр
function createLeftNumbers() {
    for (i = 8; i > 0; i--) {
        let numberSpan = document.createElement('span');
        numberSpan.innerText = i;
        numberSpan.className = 'number';
        document.getElementsByClassName('columnNumbers')[0].appendChild(numberSpan);

    }
}
//создаем правый блок цифр
function createRightNumbers() {
    for (i = 1; i < 9; i++) {
        let numberSpan = document.createElement('span');
        numberSpan.innerText = i;
        numberSpan.className = 'number rotate';
        document.getElementsByClassName('columnNumbers')[1].appendChild(numberSpan);
    }
}