const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const resultElement = document.getElementById('result');
const weekdayElement = document.getElementById('weekday');
const sumElement = document.getElementById('sum'); // Elemento para o valor somado


const divVerde = document.getElementById('div-amarelo');

const fixedNumber1Button = document.getElementById('fixedNumber1');
const fixedNumber2Button = document.getElementById('fixedNumber2');

const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const weekdays = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
];

const monthValues = {
    1: 101, 2: 212, 3: 45, 4: 26, 5: 86, 6: 116,
    7: 223, 8: 40, 9: 51, 10: 29, 11: 68, 12: 12
};

const weekdayValues = {
    0: 205,  // Domingo
    1: 131,  // Segunda-feira
    2: 52,  // Terça-feira
    3: 20,  // Quarta-feira
    4: 51,  // Quinta-feira
    5: 25,  // Sexta-feira
    6: 138   // Sábado
};

const dayValues = {
    1: 24, 2: 7, 3: 52, 4: 21, 5: 75, 6: 42, 7: 12,
    8: 55, 9: 81, 10: 30, 11: 12, 12: 72, 13: 81, 14: 54,
    15: 44, 16: 25, 17: 24, 18: 5, 19: 7, 20: 21,
    21: 77, 22: 2, 23: 3, 24: 49, 25: 13, 26: 23,
    27: 6, 28: 54, 29: 81, 30: 72, 31: 45
};

const yearValues = {
    2022: 0, 2023: 0, 2024: 0, 2025: 0
};

const fixedNumber1 = 81; // Primeiro número fixo
const fixedNumber2 = 81; // Segundo número fixo

document.getElementById('year').style.display = 'none';
document.getElementById('month').style.display = 'none';
document.getElementById('weekday').style.display = 'none';
document.getElementById('result').style.display = 'none';
document.getElementById('fixedNumber1').style.display = 'none';
document.getElementById('fixedNumber2').style.display = 'none';

/*document.getElementById('year').style.display = 'block';
document.getElementById('month').style.display = 'block';
document.getElementById('weekday').style.display = 'block';
document.getElementById('result').style.display = 'block';
document.getElementById('fixedNumber1').style.display = 'inline-block';
document.getElementById('fixedNumber2').style.display = 'inline-block';*/

let selectedFixedNumber = fixedNumber1; // Valor fixo inicial

let date = new Date();
let currentDay = date.getDate(); // Dia atual
let currentMonth = date.getMonth() + 1; // Mês atual (0-indexed, então somamos 1)
let currentYear = date.getFullYear(); // Ano atual
let currentWeekday = date.getDay(); // Dia da semana atual (0 = Domingo, 1 = Segunda, etc.)

function displayCurrentDaySum() {
    const dayValue = dayValues[currentDay] || 0;
    const monthValue = monthValues[currentMonth] || 0;
    const yearValue = yearValues[currentYear] || 0;
    const weekdayValue = weekdayValues[currentWeekday] || 0; // Valor do dia da semana

    const totalSum = dayValue + monthValue + yearValue + selectedFixedNumber + weekdayValue;

    monthElement.textContent = `${months[currentMonth - 1]}`;
    yearElement.textContent = `${currentYear}`;
    weekdayElement.textContent = `${weekdays[currentWeekday]}`;
    resultElement.textContent = `${currentDay}`;
    sumElement.textContent = `${totalSum}`;
}

// Funções para atualizar o número fixo selecionado
function selectFixedNumber1() {
    selectedFixedNumber = fixedNumber1;
    displayCurrentDaySum();
}

function selectFixedNumber2() {
    selectedFixedNumber = fixedNumber2;
    displayCurrentDaySum();
}

// Adiciona eventos aos botões
fixedNumber1Button.addEventListener('click', selectFixedNumber1);
fixedNumber2Button.addEventListener('click', selectFixedNumber2);

// Chama a função para exibir a soma inicial
displayCurrentDaySum();
