export default function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}
//Check given answer is valid or not

Question.prototype.isCorrect = function (guessKey) {
  return guessKey === this.answer;
};
