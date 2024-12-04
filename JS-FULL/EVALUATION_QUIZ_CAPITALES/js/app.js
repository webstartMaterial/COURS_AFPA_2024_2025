const questions = [

    {
        country : "France",
        correct : "Paris",
        options : ["Lyon", "Marseille", "Lille"]
    },
    {
        country : "Espagne",
        correct : "Madrid",
        options : ["Segovia", "Barcelona", "Sevilla"]
    },
    {
        country : "Italie",
        correct : "Rome",
        options : ["Venis", "Florence", "Milan"]
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answer_container = document.getElementById("answers-container");
const responseMessage = document.getElementById("response-message");
const responseTable = document.querySelector("#response-table tbody");
const scoreContainer = document.getElementById("score-container");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    responseMessage.textContent = '';
    responseTable.innerHTML = '';
    scoreContainer.classList.add('hidden');
    showQuestion();

}

function showQuestion() {

    const question = questions[currentQuestionIndex];
    questionText.textContent = `Quelle est la capitale de ${question.country}?`;

    const answers = [question.correct, ...question.options];
    answers.sort(() => Math.random() - 0.5);

    answer_container.innerHTML = '';
    responseMessage.textContent = '';

    answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        // je capte l'événement sur tous les boutons que j'ai créé qui me permettent de de choisir une réponse
        // et si je click sur l'un d'entre eux, j'apppel checkAnswer qui vérifie si la réponse sur laquelle j'ai cliqué
        // c'est la bonne réponse
        button.addEventListener("click", () => checkAnswer(button, answer, question.correct));
        answer_container.appendChild(button);
    });

    
}

function checkAnswer(button, selected, correct) {

    const buttons = answer_container.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true); // je désactive tous les boutons

    if(selected === correct) {
        button.classList.add("correct");
        responseMessage.textContent = 'Bonne réponse';
        responseMessage.style.color = "green";
        score++;
    } else {
        button.classList.add("wrong");
        responseMessage.textContent = 'Mauvaise réponse';
        responseMessage.style.color = "red";

        buttons.forEach(btn => btn.textContent === correct && btn.classList.add("correct")); // je désactive tous les boutons

    }

    addResponseTable(questions[currentQuestionIndex].country, selected, selected === correct ? 'Oui' : 'Non');

    setTimeout(() => {
        
        if(currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            endQuiz();
        }

    }, 2000)

}

function addResponseTable(country, answer, isCorrect) {

    const row = document.createElement("tr");
    row.innerHTML =
        `
            <td>${country}</td>
            <td>${answer}</td>
            <td>${isCorrect}</td>
        `
    ;
    responseTable.appendChild(row);
    
}

function endQuiz() {
    questionText.textContent = '';
    answer_container.innerHTML = '';
    scoreContainer.classList.remove('hidden');
    finalScore.textContent = `Votre score final est : ${score}/${questions.length}`;
}

restartBtn.addEventListener("click", startQuiz);
startQuiz();