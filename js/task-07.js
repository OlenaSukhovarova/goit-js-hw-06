// Напиши скрипт, який реагує на зміну значення input#font - size - control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір
// тексту.

const textEl = document.querySelector("span");

const inputEl = document.querySelector("input");

inputEl.addEventListener("input", (event) => {
  const size = inputEl.value;
  // console.log(size);
  textEl.style.fontSize = size + "px";
});
