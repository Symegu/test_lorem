const form = document.querySelector("#form");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const range = formData.get('range');

    console.log(name, email, range);
})