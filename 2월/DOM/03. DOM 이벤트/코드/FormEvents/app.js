const form = document.querySelector('#shelterForm');
const input = document.querySelector('#username');

form.addEventListener('submit', (e) => {
    // preventDefault는 특정 이벤트의 기본 동작이 수행되지 않도록 막아준다
    e.preventDefault();

    const newLI = document.createElement('li');
    newLI.innerText = input.value;

    const ul = document.querySelector('ul') || document.createElement('ul');
    ul.appendChild(newLI);
    document.body.appendChild(ul);
    input.value = '';
});
