const QuizData = [
    {
        Question: "What is the age of Lionel Messi.?",
        a: "30",
        b: "34",
        c: "29",
        d: "36",
        correct: "b",
    },

    {
        Question : "How many Ballon D'or Has Messi won.?",
        a: "3",
        b: "4",
        c: "2",
        d: "6",
        correct: "d",
    },

    {
        Question : "How many goals does he have against Real Madrid.?",
        a: "23",
        b: "34",
        c: "26",
        d: "16",
        correct: "c",
    },

    {
        Question: "How many European Golden Boot does Messi have.?",
        a: "3",
        b: "4",
        c: "6",
        d: "2",
        correct: "c",
    },

    {
        Question: "In what year Messi won his first international trophy.?",
        a: "2020",
        b: "2016",
        c: "2014",
        d: "2021",
        correct: "d",
    }
];

const answerELs = document.querySelectorAll('.answer');
const QuestionEl = document.getElementById('Question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const Submitbtn = document.getElementById('submit');

let CurrentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    DeSelectAns();

    const CurrentQuizData = QuizData[CurrentQuiz];

    QuestionEl.innerText = CurrentQuizData.Question;
    a_text.innerText = CurrentQuizData.a;
    b_text.innerText = CurrentQuizData.b;
    c_text.innerText = CurrentQuizData.c;
    d_text.innerText = CurrentQuizData.d;
};

function getSelected()
{
    let answer = undefined;

    answerELs.forEach((answerEL) => {
        if(answerEL.checked)
        {
            answer = answerEL.id;
        }
    });

    return answer;
}

function DeSelectAns()
{
    answerELs.forEach((answerEL) => {
        if(answerEL.checked)
        {
            answerEL.checked = false;
        }
     });
};

Submitbtn.addEventListener('click', function()
{
    const answer = getSelected();

    if(answer)
    {
        if(answer === QuizData[CurrentQuiz].correct)
        {
            score++;
        }

        CurrentQuiz++;

        if(CurrentQuiz < QuizData.length)
    {
        loadQuiz();
    }
    else{
        quiz.innerHTML = `<h2> you answered correctly ${score}/${QuizData.length} question.</h2>
        <button onclick="location.reload()">Reload</button>`
    }
    }
});