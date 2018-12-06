function fchess() {
    var Chess = document.querySelector(".chess");
    var div;
    var temp = true;

    for (i = 0; i < 8; i++) {
        for (a = 0; a < 8; a++) {
            if(a == 0) temp = !temp;
            
            div = document.createElement("div");
            div.className = "blockChess";
            if (temp) {
                div.className += " dark";
            } else div.className += " light";

            Chess.appendChild(div);
            temp = !temp;
        }
    }


}


fchess();