//quiz
function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}


Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}


Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}
Quiz.prototype.checkOptionWithAnswer= function(answer){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }

    this.questionIndex++;
}

//question prototype
function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer === choice;
}

//quiz display and score display
function loadQuestions() {
    if(Quiz.isEnded()) {
        showScores();
    }
    else{
    // show Question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionByIndex().text;
    // show options
    var choices = quiz.getQuestionByIndex().choices;
    for(var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        handleOptionButton("btn" + i, choices[i];)
    }
    showProgress();
    }
};

//handle event and load next question
function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
};


//show progress bar
function showProgress() {
    var crrentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//show result
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores:" + quiz.score + ".And mark percentage is: "+(quiz.score/questions.lenth*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create question here
var question = [
    new Question("Javascript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which among the following is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Python Script"),
    new Question("Which among the following is used to connect to Database?", ["PHP", "HTML", "JS", "ALL"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
loadQuestions();




    


