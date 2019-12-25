'use strict';

let buttons = document.getElementsByClassName("menu-item"),
menu = document.getElementsByClassName("menu"),
title = document.getElementById("title"),
adv = document.getElementsByClassName("adv"),
promptBlock = document.getElementById("prompt");


menu[0].insertBefore(buttons[2], buttons[1]);
let newButton = document.createElement("li");
newButton.classList.add("menu-item");
newButton.textContent = "Пятый пункт";
menu[0].appendChild(newButton);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.textContent = "Мы продаем только подлинную технику Apple";
adv[0].remove();
let answer = prompt("Какое у вас отношение к технике Apple?", "");
promptBlock.textContent = answer;
