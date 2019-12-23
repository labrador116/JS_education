'use strict';

let money, date;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    date = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function choseExpenses() {
    for (let i = 0; i < 2; i++) {
        let expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
            cost = prompt("Во сколько обойдется?", "");

        if (typeof (expense) === 'string' && typeof (expense) != null &&
            typeof (cost) != null &&
            expense != '' && cost != '' && expense.length < 50) {
            console.log("done");
            appData.expenses[expense] = cost;
        } else {
            i--;
        }
    }
}
choseExpenses();

function choseOptionalExpenses() {
    for (let i = 0; i < 3; i++) {
        let expense = prompt("Статья необязательных расходов?", "");
        if (typeof (expense) === 'string' && typeof (expense) != null &&
            typeof (cost) != null &&
            expense != '') {
                appData.optionalExpenses[i] = expense;
        }
    }
}

function showDailyBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Eжедневный бюджет: " + appData.moneyPerDay);
}
showDailyBudget();

function showLevelOfProsperity() {
    if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("произошла ошибка");
    }
}
showLevelOfProsperity();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();