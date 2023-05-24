const TodoButton = document.querySelector('.Todo_button');
const TodoInput = document.querySelector('.Todo_input');
const TodoList = document.querySelector('.Todo_list');

const Filter = document.querySelector('.filter-todo');

TodoButton.addEventListener('click', addTodo);
TodoList.addEventListener('click', deleteCheck);
Filter.addEventListener('click', TodoFilter);

function addTodo(event)
{
    //prevent form from submitting
    event.preventDefault();

    //Creating a DIV inside <ul>
    const TodoDIV = document.createElement("div");
    TodoDIV.classList.add("DIV");

    //Creating <li>
    const Todoli = document.createElement("li");
    //assigning text inside li
    Todoli.innerText = TodoInput.value;
 
    //assigning class to <li>
    Todoli.classList.add("Todo_items");
    //assigning <li> to <div>
    TodoDIV.appendChild(Todoli);


    //CHECK MARK BUTTON
    const CheckButton = document.createElement("button");
    CheckButton.innerHTML = '<i class= "fas fa-check"></i>';
    CheckButton.classList.add("complete_button");
    TodoDIV.appendChild(CheckButton);

    //CHECK TRASH BUTTON
    const TrashButton = document.createElement("button");
    TrashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    TrashButton.classList.add("trash_button");
    TodoDIV.appendChild(TrashButton);

    //Append To List
    TodoList.appendChild(TodoDIV);

    //Clear input value
    TodoInput.value = "";
}


function deleteCheck(event)
{
    //console.log(event.target);  ***to check by clicking on the <ul> items and buttons.

    const item = event.target;

    if(item.classList[0] === "trash_button")
    {
        const Todo = item.parentElement;
        //Animation
        Todo.classList.add('fall');
        Todo.addEventListener('transitionend', function(){
            Todo.remove();
        })
    }

    if(item.classList[0] === "complete_button")
    {
        const Todo = item.parentElement;
        Todo.classList.toggle('completed');
    }
}

function TodoFilter(event)
{
    const todo = TodoList.childNodes;
    todo.forEach(function(todo)
    {
        switch (event.target.value)
        {
            case "all" :
                todo.style.display = "flex";
                break;
            
            case "completed" :
                if(todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                }
                else
                {
                    todo.style.display = "none";
                }    
                break;

            case "Incomplete" :
                if(!todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                }    
                else
                {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function BackgroundImg()
{
    const images = [
        'url("1.jpg")',
        'url("2.jpg")',
        'url("3.jpg")',
        'url("4.jpg")',
    ]

    const body = document.querySelector('body');
    const BG = images[Math.floor(Math.random() * images.length)];
    body.style.backgroundImage = BG;
}

setInterval(BackgroundImg,1000);