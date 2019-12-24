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
    savings: true,
    choseExpenses: function () {
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
    },
    showDailyBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Eжедневный бюджет: " + appData.moneyPerDay);
    },
    showLevelOfProsperity: function () {
        if (appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    choseOptionalExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let expense = prompt("Статья необязательных расходов?", "");
            if (typeof (expense) === 'string' && typeof (expense) != null &&
                typeof (cost) != null &&
                expense != '') {
                appData.optionalExpenses[i] = expense;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход (через запятую)", "");
        while (items == "" || items == null) {
            items = prompt("Что принесет дополнительный доход (через запятую)", "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что то еще?"));
        appData.income.sort();
        appData.income.forEach(function (item, count) {
            console.log(count + 1 + ": " + item)
        });

    }
};
// appData.choseExpenses();
// appData.showDailyBudget();
// appData.showLevelOfProsperity();
// appData.checkSavings();