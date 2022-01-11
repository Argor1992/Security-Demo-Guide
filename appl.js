

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answer-ind");
const homeBox= document.querySelector(".custome-box");
const quizBox= document.querySelector(".quiz-box");
const resultBox= document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempts = 0;

function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

function getNewQuestion(){
    questionNumber.innerHTML = "Frage " + (questionCounter + 1) + " von " + quiz.length;
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    //Position von 'question index' aus dem availableQuestions Array
    const index1 = availableQuestions.indexOf(questionIndex);

    //entfernen von "verbrauchten" Fragen
    availableQuestions.splice(index1,1);

    const optionLen = currentQuestion.options.length;

    //push Optionen in availableOptions Array
    for(let i=0;i<optionLen;i++){
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';

    let animationDelay = 0.2;

    //erschaffen von Optionen in innerHTML
    for (let i=0;i<optionLen;i++){
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }
    questionCounter++;
}
//Ergebniss von aktueller Frage
function getResult(element){
    const id = parseInt(element.id);
    if(id === currentQuestion.answer){
        //rüne Farbe falls wahr
       element.classList.add("correct");
       updateAnswerIndicator("correct");
       correctAnswers++;
    }else{
        //rote Farbe falls falsch
        element.classList.add("wrong");
        updateAnswerIndicator("wrong");

        const optionLen = optionContainer.children.length;
        for (let i=0;i<optionLen;i++){
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempts++;
    unclickableOptions();
}

//verhindet weitere angabe
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0;i<optionLen;i++){
        optionContainer.children[i].classList.add("answered");
    }
}

function answerIdicator(){
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion;i++){
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
        }
}

function updateAnswerIndicator(markType){
    answerIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

function next(){
    if(questionCounter === quiz.length){
        console.log("Quiz Beendet");
        quizOver();
    }else{
        getNewQuestion();
    }
}

function  quizOver(){
    //quizBox verstecken
    quizBox.classList.add("hide");
    //anzeigen von Ergebnissen
    resultBox.classList.remove("hide")
    quizResult();
}

function quizResult() {
    resultBox.querySelector(".total-questions").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempts;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempts-correctAnswers;
    const nPercent = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = nPercent.toFixed(1) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + quiz.length;
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempts = 0;
}

function againQuiz(){

    //Ergebnisse wieder verstecken
    resultBox.classList.add("hide");
    //quiz box wieder anzeigen
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome(){
    //Ergebnisse wieder verstecken
    resultBox.classList.add("hide");
    //home-box wird wieder anzeigen
    homeBox.classList.remove("hide");
    resetQuiz();
}

// Anfang des Quizes

function startQuiz(){

    //verstecken der Home-Box
    homeBox.classList.add("hide");
    //quiz-Box wird angezeigt
    quizBox.classList.remove("hide");

    //Alle fragen werden in ein Array gepackt
    setAvailableQuestions();
    //NewQuestion Funktion wird aufgeruffen
    getNewQuestion();
    //Antwortindikator wird erstellt
    answerIdicator();
}
