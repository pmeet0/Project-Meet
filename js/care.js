const quizDB=[
{
    question : "Q1: Acne is caused by?",
    a: "chocolates and greasy food",
    b: "dirty skin",
    c: "junk food",
    d: "bacteria that live on the skin",
    ans:"ans4"
},
{
    question : "Q2: The inner most layer of skin is?",
    a: "dermis",
    b: "epidermis",
    c: "hypodermis",
    d: "stratum lucidum",
    ans:"ans3"
},
{
    question : "Q3: The systemic infection will cause?",
    a: "hyperthermia",
    b: "hypertonia",
    c: "hypothermia",
    d: "hypotonia",
    ans:"ans1"
},
{
    question : "Q4: The outermost layer of the skin is called ?",
    a: "corium",
    b: "dermis",
    c: "adipose",
    d: "epidermis",
    ans:"ans4"
},
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText =  questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();
const getCheckAnswer = () => {
    let answer;

answers.forEach((curAnsElem)=> {
   if(curAnsElem.checked) {
       answer = curAnsElem.id;
   }
   
});
return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
  questionCount++;

  deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">play again</button>

        `;
        showScore.classList.remove('scoreArea');
    }
});

