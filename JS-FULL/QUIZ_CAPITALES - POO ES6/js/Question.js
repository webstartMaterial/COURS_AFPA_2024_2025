class Question {

    constructor(country, correctAnswer, options) {
        this.country = country;
        this.correctAnswer = correctAnswer;
        this.options = options;
    }


    showQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = `Quelle est la capitale de ${question.country}?`;
    
        const answers = [question.correct, ...question.options];
        answers.sort(() => Math.random() - 0.5); // Mélange les réponses
    
        answersContainer.innerHTML = ''; // Réinitialise les réponses
        responseMessage.textContent = '';
        answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => checkAnswer(button, answer, question.correct));
            answersContainer.appendChild(button);
        });
    }
    
}