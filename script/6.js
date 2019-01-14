function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}


function changeBigPicture(eventObj) {

    var appDiv = document.getElementById("bigImg");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id;
    var src = "./img/bigPic/" + imageNameParts + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.style.width = "640px";
    imageDomElement.style.height = "480px";
    imageDomElement.onerror = function init() {
        alert("Изображение не доступно")
    };
    appDiv.appendChild(imageDomElement);
}
window.onload = init;
