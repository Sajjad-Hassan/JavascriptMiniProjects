const toggleBTN = document.querySelector(".sidebar-toggle");
const closeBTN = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBTN.addEventListener("click", function()
{
    /*if(sidebar.classList.contains('show-sidebar'))
    {
        sidebar.classList.remove('show-sidebar');
    }
    else
    {
        sidebar.classList.add('show-sidebar');
    }*/

    sidebar.classList.toggle("show-sidebar");
});

closeBTN.addEventListener('click', function()
{
    sidebar.classList.remove('show-sidebar');
});