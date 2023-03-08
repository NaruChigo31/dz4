let selectColor = document.querySelector("#selectColor")
// let colorValue = selectColor.getAttribute("value")

let selectTextstyle = document.querySelector(".textPosition")
let h1Elem = document.querySelector(".privet")

// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    // document.body.style.backgroundColor = colorValue; 
    document.body.style.backgroundColor = event.target.options[event.target.options.selectedIndex].value;
}

function changeText(event){
    selectTextstyle.style.fontFamily = event.target.options[event.target.options.selectedIndex].value;
    h1Elem.style.fontFamily = event.target.options[event.target.options.selectedIndex].value;
}
// Сюда пишите название события, которое должно произойти после смены option
const selectEvent = 'change';
// Создаем события на тег select.
selectColor.addEventListener(selectEvent, changeColor);
selectTextstyle.addEventListener(selectEvent, changeText)
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
