let value = document.querySelector("#range-value");
const range = document.querySelector("#range");

range.addEventListener("input", () => {
   value.innerHTML = (range.value + '%');
})