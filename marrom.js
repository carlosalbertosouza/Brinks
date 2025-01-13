const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const resultElement = document.getElementById('result');
const weekdayElement = document.getElementById('weekday');
const sumElement = document.getElementById('sum'); // Elemento para o valor somado


const divVerde = document.getElementById('div-marrom');

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
    1: 27, 2: 21, 3: 11, 4: 56, 5: 81, 6: 41,
    7: 55, 8: 71, 9: 51, 10: 61, 11: 68, 12: 15
};

const weekdayValues = {
    0: 23,  // Domingo
    1: 13,  // Segunda-feira
    2: 131,  // Terça-feira
    3: 81,  // Quarta-feira
    4: 141,  // Quinta-feira
    5: 84,  // Sexta-feira
    6: 94   // Sábado
};

const dayValues = {
    1: 70, 2: 50, 3: 30, 4: 18, 5: 189, 6: 121, 7: 21,
    8: 47, 9: 92, 10: 81, 11: 11, 12: 22, 13: 52, 14: 42,
    15: 88, 16: 47, 17: 14, 18: 18, 19: 47, 20: 78,
    21: 45, 22: 47, 23: 10, 24: 105, 25: 22, 26: 25,
    27: 90, 28: 110, 29: 18, 30: 16, 31: 141
};


const yearValues = {
    2022: 0, 2023: 0, 2024: 0, 2025: 0
};

const fixedNumber1 = 45; // Primeiro número fixo
const fixedNumber2 = 45; // Segundo número fixo

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
