let input = document.querySelector(".search__input");
let button = document.querySelector(".search__button");
let select = document.querySelector(".search__select");
let params;


function sumbitRequest(){
    let getInputVal = input.value;
    let getSelectVal = select.value;
    let parametr = null;

    if (getSelectVal == "google" || getSelectVal=="bing"){
        parametr = "search?q="
    }

    if (getSelectVal == "yandex"){
        parametr = "search/?text="
    }

    if (getSelectVal == "DuckDuckGo"){
        parametr = "?t="
    }
    
    let finishStr = "https://www." + getSelectVal + ".com/" + parametr + getInputVal;
    window.location.href = finishStr;
}
button.addEventListener("click", sumbitRequest);