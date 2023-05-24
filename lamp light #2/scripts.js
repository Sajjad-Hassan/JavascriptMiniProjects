const button = document.querySelector("#btn");
const span = document.querySelector("#span");
const light = document.querySelector("#light");


button.addEventListener('click', function()
{
    if(button.classList.contains("light_on"))
    {
        button.style.backgroundColor = "#80b918";
        span.style.marginLeft = "2.4rem";
        light.style["opacity"]= 1;
        button.classList.remove('light_on');
        button.classList.add('light_off');
    }

    else{
        button.style.backgroundColor = "#efefef";
        span.style.margin = "1px";
        light.style["opacity"]= 0;
        button.classList.remove('light_off');
        button.classList.add('light_on');
    }
})