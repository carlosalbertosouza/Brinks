const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const resultElement = document.getElementById('result');
const weekdayElement = document.getElementById('weekday');
const sumElement = document.getElementById('sum'); // Elemento para o valor somado

const divVerde = document.getElementById('div-verde');

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

const weekdayValues = {
    0: 48,  // Domingo
    1: 80,  // Segunda-feira
    2: 70,  // Terça-feira
    3: 110,  // Quarta-feira
    4: 250,  // Quinta-feira
    5: 65,  // Sexta-feira
    6: 68   // Sábado
};

const dayValues = {
    1: 15, 2: 32, 3: 51, 4: 18, 5: 9, 6: 17, 7: 15,
    8: 41, 9: 145, 10: 40, 11: 80, 12: 65, 13: 85, 14: 28,
    15: 47, 16: 13, 17: 60, 18: 80, 19: 127, 20: 381,
    21: 331, 22: 148, 23: 254, 24: 41, 25: 41, 26: 51,
    27: 58, 28: 47, 29: 14, 30: 20, 31: 54
};

const monthValues = {
    1: 70, 2: 8, 3: 91, 4: 23, 5: 18, 6: 1,
    7: 122, 8: 541, 9: 70, 10: 64, 11: 65, 12: 149
};

const yearValues = {
    2022: 0, 2023: 0, 2024: 0, 2025: 0
};

const fixedNumber1 = 77; // Primeiro número fixo
const fixedNumber2 = 77; // Segundo número fixo

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
