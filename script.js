let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    familyMoney: money,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {},
    income: [],
    savings : false
}
let exp1 = prompt("Введите обязательную статью расходов в этом месяце");
let exp2 = +prompt("Во сколько обойдется?");
appData.expenses = {exp1 : exp2};
let forDay = (money - appData.expenses.exp1)/30;
alert(forDay);