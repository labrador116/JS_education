'use strict';

let calc = document.getElementById("start"),
    budget = document.getElementsByClassName("budget-value")[0],
    daybudget = document.getElementsByClassName("daybudget-value")[0],
    level = document.getElementsByClassName("level-value")[0],
    expenses = document.getElementsByClassName("expenses-value")[0],
    optionalexpenses = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavings = document.getElementsByClassName("monthsavings-value")[0],
    yearSavings = document.getElementsByClassName("yearsavings-value")[0],
    items = document.getElementsByClassName("expenses-item"),
    expensesButton = document.getElementsByTagName("button")[0],
    optionalExpensesButton = document.getElementsByTagName("button")[1],
    countBudgetButton = document.getElementsByTagName("button")[2],
    optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item"),
    income = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sum = document.querySelector(".choose-sum"),
    percent = document.querySelector(".choose-percent"),
    day = document.querySelector(".day-value"),
    month = document.querySelector(".month-value"),
    year = document.querySelector(".year-value");

let money, date;

calc.addEventListener("click", function () {
    date = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = date;
    budget.textContent = money.toFixed();
    let dateObj = new Date(Date.parse(date));
    year.value = dateObj.getFullYear();
    month.value = dateObj.getMonth() + 1;
    day.value = dateObj.getDay();
});

expensesButton.addEventListener('click', function () {
    for (let i = 0; i < items.length; i++) {
        let expense = items[i].value,
            cost = items[++i].value;

        if (typeof (expense) === 'string' && typeof (expense) != null &&
            typeof (cost) != null &&
            expense != '' && cost != '' && expense.length < 50) {
            console.log("done");
            appData.expenses[expense] = cost;
            appData.expenseSum += +cost;
        } else {
            i--;
        }
    }
    expenses.textContent = appData.expenseSum;
});

optionalExpensesButton.addEventListener("click", function () {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let expense = optionalExpensesItems[i].value;
        if (typeof (expense) === 'string' && typeof (expense) != null &&
            typeof (cost) != null &&
            expense != '') {
            appData.optionalExpenses[i] = expense;
            optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});

countBudgetButton.addEventListener("click", function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget-appData.expenseSum) / 30).toFixed();
        daybudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            level.textContent = "минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "высокий уровень достатка";
        } else {
            level.textContent = "произошла ошибка";
        }
    } else {
        budget.textContent = "произошла ошибка";
    }
});

income.addEventListener("input", function () {
    let items = income.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
    if (appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sum.addEventListener("input", function () {
    if (appData.savings) {
        let sumVal = +sum.value,
            percentVal = +percent.value;
            appData.monthIncome = sumVal / 100 / 12 * percentVal;
            appData.yearIncome = sumVal / 100  * percentVal;
            monthSavings.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener("input", function () {
    if (appData.savings) {
        let sumVal = +sum.value,
        percentVal = +percent.value;
        appData.monthIncome = sumVal / 100 / 12 * percentVal;
        appData.yearIncome = sumVal / 100  * percentVal;
        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    expenseSum: 0
};