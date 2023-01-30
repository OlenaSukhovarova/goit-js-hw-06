// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і
// зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let decrEl = document.querySelector("#counter").firstElementChild;
let incrEl = document.querySelector("#counter").lastElementChild;
let counterValue = document.querySelector("#value");
let valueEl = Number(document.querySelector("#value").textContent);

incrEl.addEventListener("click", (event) => {
  valueEl += 1;
  counterValue.innerText = valueEl;
});

decrEl.addEventListener("click", (event) => {
  valueEl -= 1;
  counterValue.innerText = valueEl;
});
