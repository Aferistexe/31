

document.getElementById("labels").addEventListener("submit", function(event){
event.preventDefault()

let fio = document.getElementById("FIO").value
let numbert = document.getElementById("numbert").value
let email = document.getElementById("email").value
let date = document.getElementById("date").value
let number = document.getElementById("number").value

alert("ВСЁ УСПЕШНО ОТПРАВЛЕНО  " + "ФИО: " + fio+";" + " Количество дней: " + number+";" + " Электронная почта: " + email+";" + " Дата начала: " + date+";" +" Номер: " + numbert)


})