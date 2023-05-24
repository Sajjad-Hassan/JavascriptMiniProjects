const Increment = document.getElementById('Increment');
const Decrement = document.getElementById('Decrement');
const Counter = document.getElementById('counter');

var value = 0;

Increment.addEventListener('click', function()
{
    value++;
    Counter.textContent = value;
})

Decrement.addEventListener('click', function()
{
    value--;
    Counter.textContent = value;
})