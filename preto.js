const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const resultElement = document.getElementById('result');
const weekdayElement = document.getElementById('weekday');
const sumElement = document.getElementById('sum'); // Elemento para o valor somado


const divVerde = document.getElementById('div-preto');


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
    1: 71, 2: 585, 3: 161, 4: 188, 5: 15, 6: 85,
    7: 257, 8: 504, 9: 54, 10: 21, 11: 90, 12: 80
};

const weekdayValues = {
    0: 88,  // Domingo
    1: 50,  // Segunda-feira
    2: 7,  // Terça-feira
    3: 18,  // Quarta-feira
    4: 14,  // Quinta-feira
    5: 50,  // Sexta-feira
    6: 140   // Sábado
};

const dayValues = {
    1: 147, 2: 370, 3: 225, 4: 157, 5: 88, 6: 81, 7: 40,
    8: 110, 9: 145, 10: 581, 11: 661, 12: 108, 13: 17, 14: 44,
    15: 46, 16: 42, 17: 140, 18: 520, 19: 81, 20: 10,
    21: 11, 22: 34, 23: 81, 24: 90, 25: 188, 26: 41,
    27: 58, 28: 87, 29: 123, 30: 243, 31: 73
};


const yearValues = {
    2022: 0, 2023: 0, 2024: 0, 2025: 0
};

const fixedNumber1 = 122; // Primeiro número fixo
const fixedNumber2 = 122; // Segundo número fixo

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
