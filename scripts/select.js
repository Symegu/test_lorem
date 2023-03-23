const selectedOption = document.querySelector(".select__option");
const optionsContainer = document.querySelector(".options__container");

const optionsList = document.querySelectorAll(".option");

selectedOption.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(option => {
    option.addEventListener("click", () => {
    selectedOption.innerHTML = option.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});