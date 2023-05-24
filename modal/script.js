const modalBTN = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBTN = document.querySelector(".close-btn");

modalBTN.addEventListener("click", function()
{
    modal.classList.add("open-modal");
});

closeBTN.addEventListener("click", function()
{
    modal.classList.remove("open-modal");
});