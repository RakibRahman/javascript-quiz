/*jshint esversion: 6 */

export default function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}
//Check selected answer is valid or not

Question.prototype.isCorrect = function (guessKey) {
  return guessKey === this.answer;
};
