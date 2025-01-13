const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const resultElement = document.getElementById('result');
const weekdayElement = document.getElementById('weekday');
const sumElement = document.getElementById('sum'); // Elemento para o valor somado


const divVerde = document.getElementById('div-azul');

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
    1: 50, 2: 30, 3: 6, 4: 28, 5: 55, 6: 45,
    7: 28, 8: 53, 9: 51, 10: 12, 11: 16, 12: 10
};

const weekdayValues = {
    0: 17,  // Domingo
    1: 54,  // Segunda-feira
    2: 7,  // Terça-feira
    3: 8,  // Quarta-feira
    4: 81,  // Quinta-feira
    5: 51,  // Sexta-feira
    6: 11   // Sábado
};

const dayValues = {
    1: 14, 2: 137, 3: 221, 4: 151, 5: 81, 6: 77, 7: 14,
    8: 110, 9: 1, 10: 51, 11: 61, 12: 71, 13: 51, 14: 11,
    15: 5, 16: 21, 17: 12, 18: 62, 19: 15, 20: 101,
    21: 122, 22: 31, 23: 81, 24: 91, 25: 182, 26: 41,
    27: 54, 28: 88, 29: 125, 30: 214, 31: 17
};


const yearValues = {
    2022: 0, 2023: 0, 2024: 0, 2025: 0
};

const fixedNumber1 = 78; // Primeiro número fixo
const fixedNumber2 = 78; // Segundo número fixo

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
