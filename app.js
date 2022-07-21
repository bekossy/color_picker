const colors = ['Red', 'Green', 'Yellow', 'Orange', 'Purple', 'Blue', 'Indigo', 'Violet'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){

    let randomNumber = getRandomColor();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber]
});

function getRandomColor(){

    return Math.floor(Math.random() * colors.length)
}