'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    income: []
};

let expense = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = prompt("Во сколько обойдется?", "");

appData.expenses = {
    expense: cost
};

alert((appData.budget-appData.expenses.expense)/30);