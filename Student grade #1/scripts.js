const calculation = function()
{
    let programming = document.getElementById('programming').value;
    let phychology = document.getElementById('phychology').value;
    let Maths = document.getElementById('Maths').value;
    let Science = document.getElementById('Science').value;
    let grade= "";

    let totalGrades = parseFloat(programming) + parseFloat(phychology) + parseFloat(Maths) 
    + parseFloat(Science);
    alert(totalGrades);

    let percentage = (totalGrades/400) * 100;

    alert(percentage);

    if(percentage <=100 && percentage >=81)
    { grade = 'A'; }
    else if(percentage <=80 && percentage >=61)
    { grade = 'B'; }
    else if(percentage <=60 && percentage >= 51)
    { grade = 'C';}
    else
    {grade = 'F';}


    if(percentage >=51)
    {
        document.getElementById('display_data').innerHTML = `your total score is ${totalGrades} and 
    percentage is ${percentage}%. Your Grade is "${grade}". You Pass.!`
    }
    else
    {
        document.getElementById('display_data').innerHTML = `your total score is ${totalGrades} and 
    percentage is ${percentage}%. Your Grade is "${grade}". You Fail.!`
    }
}