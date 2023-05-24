const Hexcolors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function()
{
    let Hex = '#';

    for(let i = 0; i<6; i++)
    {
        Hex += Hexcolors[getRandomNumber()];
    }

    document.body.style.backgroundColor = Hex;
    color.textContent = Hex;
});

function getRandomNumber()
{
    return Math.floor(Math.random() * Hexcolors.length);
}