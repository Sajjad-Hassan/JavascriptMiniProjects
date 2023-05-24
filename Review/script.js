const reviews = [
    {
        id : 1,
        name : "johannah smith",
        job : "Textile Designer",
        img : "./img/1.jpg",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsa, fugit nulla rerum deleniti ex, omnis nobis similique harum molestias commodi perferendis ad ducimus animi est? Blanditiis, rerum officia? Et!",
    },
    {
        id : 2,
        name : "Jessica",
        job : "UI Designer",
        img : "./img/2.jpg",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsa, fugit nulla rerum deleniti ex, omnis nobis similique harum molestias commodi perferendis ad ducimus animi est? Blanditiis, rerum officia? Et!",
    },
    {
        id : 3,
        name : "Smith Paul",
        job : "UX Designer",
        img : "./img/3.jpg",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsa, fugit nulla rerum deleniti ex, omnis nobis similique harum molestias commodi perferendis ad ducimus animi est? Blanditiis, rerum officia? Et!",
    },
    {
        id : 4,
        name : "Ricky Boje",
        job : "Engineer",
        img : "./img/4.jpg",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsa, fugit nulla rerum deleniti ex, omnis nobis similique harum molestias commodi perferendis ad ducimus animi est? Blanditiis, rerum officia? Et!",
    },
];

const img = document.getElementById("person-image");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const nextBTN = document.querySelector(".next-button");
const prevBTN = document.querySelector(".prev-button");
const randomBTN = document.querySelector(".random-button");

let CurrentItem = 0;

window.addEventListener("DOMContentLoaded", function()
{
   showPerson();
});

function showPerson(){
    const Item = reviews[CurrentItem];
    img.src = Item.img;
    job.textContent = Item.job;
    author.textContent = Item.name;
    info.textContent = Item.text;
}

nextBTN.addEventListener("click", function()
{
    CurrentItem++;
    if(CurrentItem > reviews.length - 1)
    {
        CurrentItem = 0;
    }
    showPerson();
});

prevBTN.addEventListener("click", function()
{
    CurrentItem--;
    if(CurrentItem < 0)
    {
        CurrentItem = reviews.length -1;
    }
    showPerson();
});

randomBTN.addEventListener("click", function()
{
    CurrentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});