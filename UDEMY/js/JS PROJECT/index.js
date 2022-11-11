const name = document.querySelector(".name");
const eye = document.querySelector(".eye");
const bYear = document.querySelector(".birthYear");


const btnRandomize = document.querySelector(".getRandomChar");
btnRandomize.addEventListener('click', (e) => {
    e.preventDefault();
    const randomNumber = Math.ceil(Math.random() * 83);
    fetch(`https://swapi.dev/api/people/${randomNumber}`)
        .then(response => response.json())
        .then(char => {
        name.innerText = char['name'];
        eye.innerText = char['eye_color'];
        bYear.innerText = char ['birth_year'];
        })
})

