document.getElementById('generateBtn').addEventListener('click', generateTask);
document.getElementById('calculateBtn').addEventListener('click', calculateHypotenuse);

function generateTask() {
    const a = Math.floor(Math.random() * 10) + 1; // случайное число от 1 до 10
    const b = Math.floor(Math.random() * 10) + 1; // случайное число от 1 до 10
    document.getElementById('task').innerText = `Найдите гипотенузу треугольника, где катеты равны ${a} и ${b}.`;
    document.getElementById('task').setAttribute('data-a', a);
    document.getElementById('task').setAttribute('data-b', b);
}

function calculateHypotenuse() {
    const a = parseFloat(document.getElementById('catetA').value);
    const b = parseFloat(document.getElementById('catetB').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').innerText = 'Пожалуйста, введите оба катета.';
    } else {
        const hypotenuse = Math.sqrt(a * a + b * b).toFixed(2);
        document.getElementById('result').innerText = `Гипотенуза равна: ${hypotenuse}`;
    }
}