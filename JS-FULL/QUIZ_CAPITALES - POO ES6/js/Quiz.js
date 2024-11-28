import Dom from "./Dom.js";

class Quiz {

    constructor(listQuestions, responseMessage, responseTable, scoreContainer, answersContainer, questionText, finalScore, questions) {
        this.listQuestions = listQuestions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.responseMessage = responseMessage;
        this.responseTable = responseTable;
        this.scoreContainer = scoreContainer;
        this.answersContainer = answersContainer;
        this.questionText = questionText;
        this.finalScore = finalScore;
        this.questions = questions;
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        Dom.modifyText(this.responseMessage,'');
        Dom.modifyHtml(this.responseTable,'');
        Dom.toggleClass(this.scoreContainer,'hidden', 'add');
        showQuestion();
    }

    endQuiz() {

        Dom.modifyText(this.questionText,'');
        Dom.modifyHtml(this.answersContainer,'');
        Dom.toggleClass(this.scoreContainer,'hidden', 'remove');
        Dom.modifyText(this.finalScore,`Votre score final est : ${this.score}/${this.questions.length}`);

    }

}