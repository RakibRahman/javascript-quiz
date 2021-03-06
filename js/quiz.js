/*jshint esversion: 6 */

export default function Quiz(questions) {
  this.questions = questions; //store questions from questions.js
  this.score = 0;
  this.currentIndex = 0;
}
// Get current index of Question
Quiz.prototype.currentQuestion = function () {
  return this.questions[this.currentIndex];
};
// Increment index of Question (on click)
Quiz.prototype.nextIndex = function () {
  this.currentIndex++;
};
// Check if current index is equal to questions length (to show completion status)
Quiz.prototype.isCompleted = function () {
  return this.currentIndex === this.questions.length;
};

// Check user guess
Quiz.prototype.guess = function (userGuess) {
  const currentQues = this.questions[this.currentIndex]; //get current question
  if (currentQues.isCorrect(userGuess)) {
    this.score++;
  }
  this.nextIndex();
};

//Reset Quiz

Quiz.prototype.reset = function () {
  this.currentIndex = 0;
  this.score = 0;
};
