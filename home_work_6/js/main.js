'use strict';

let calc = document.getElementById("start"),
budget = document.getElementsByClassName("budget-value")[0],
daybudget = document.getElementsByClassName("daybudget-value")[0],
level = document.getElementsByClassName("level-value")[0],
expenses = document.getElementsByClassName("expenses-value")[0],
optionalexpenses = document.getElementsByClassName("optionalexpenses-value")[0],
incomeValue = document.getElementsByClassName("income-value")[0],
monthsavings = document.getElementsByClassName("monthsavings-value")[0],
yearsavings = document.getElementsByClassName("yearsavings-value")[0],
items = document.getElementsByClassName("expenses-item"),
expensesButton = document.getElementsByTagName("button")[0],
optionalExpensesButton = document.getElementsByTagName("button")[1],
countBudgetButton = document.getElementsByTagName("button")[3],
optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item"),
income = document.querySelector(".choose-income"),
savings = document.querySelector("#savings"),
sum = document.querySelector(".choose-sum"),
percent = document.querySelector(".choose-percent"),
day = document.querySelector(".day-value"),
month = document.querySelector(".month-value"),
year = document.querySelector(".year-value");