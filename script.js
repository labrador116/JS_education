'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    income: []
};
// let i = 0;
//2. while (i<2)
//3. do
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
    // i++;
}
//3. while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Eжедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий уровень достатка");
} else {
    console.log("произошла ошибка");
}