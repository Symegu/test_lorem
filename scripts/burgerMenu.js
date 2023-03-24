const burger = document.querySelector("#burger");
const breadcrumbs = document.querySelector("#breadcrumbs");
const body = document.body;

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();
  breadcrumbs.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
}

Array.from(breadcrumbs.children).forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  breadcrumbs.classList.remove("open");
  burger.classList.remove("active");
  body.classList.remove("noscroll");
}