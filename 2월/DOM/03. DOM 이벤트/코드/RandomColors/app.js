const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const makeRandomColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    return [`rgb(${R},${G},${B})`, `rgb(${255 - R},${255 - G},${255 - B})`];
};

button.addEventListener('click', () => {
    const [newColor, textColor] = makeRandomColor();
    h1.innerText = newColor;
    h1.style.color = textColor;
    document.body.style.backgroundColor = newColor;
});
