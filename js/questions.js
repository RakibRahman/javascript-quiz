/*jshint esversion: 6 */

export default (function question() {
  function Question(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
  //Check selected answer is valid or not

  Question.prototype.isCorrect = function (guessKey) {
    return guessKey === this.answer;
  };

  //Questions

  const q1 = new Question(
    "Which of the following is not JavaScript Data Types?",
    ["Undefined", "Number", "String", "Float"],
    3
  );
  const q2 = new Question(
    "Which company developed JavaScript?",
    ["Netscape", "Bell Labs", "IBM", "Oracle"],
    0
  );
  const q3 = new Question(
    "What is the original name of JavaScript?",
    ["LiveScript", "EScript", "Mocha", "Panda"],
    2
  );

  const q4 = new Question(
    "Which type of JavaScript language is ___",
    ["Object-Oriented", "Object-Based", "Assembly-Languages", "High-Level"],
    3
  );
  const q5 = new Question(
    "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
    ["if(a!==null)", "if (a!)", "if(a!null)", "if(a!=null)"],
    0
  );

  const q6 = new Question(
    `<p>See the given code of JavaScript and choose the correct output from the following:</p>  <img src="img/q6.png" alt="q6">`,
    [4090, 90, 4050, "Exception"],
    2
  );
  const q7 = new Question(
    `<p>Which one of the following statement is most suitable to check if the pattern matches with the sting "text":</p> <img src="img/q7.png" alt="q7">`,
    ["test(text)", "equals(pattern)", "test(pattern)", "text==pattern"],
    3
  );

  const q8 = new Question(
    `<p>Which one of the following is correct output for the following given JavaScript code:</p> <img src="img/q8.png" alt="q8">`,
    [123.56, "Taller", 190, "Little Short"],
    1
  );
  const q9 = new Question(
    `<p>Which one of the following is correct output for the following given JavaScript code:</p> <img src="img/q9.png" alt="q9">`,
    ["Letsfindout 40", 40, "Letsfindout40", "Exception"],
    2
  );

  const q10 = new Question(
    `<p>Which one of the following is the correct output for the given JavaScript code?</p> <img src="img/q10.png" alt="q10">`,
    [12, "error", "true", "false"],
    3
  );
  //q6, q2, q3, q4, q5, q10, q1, q9
  const quizArray = [q8, q7].sort((a, b) => 0.5 - Math.random());
  return quizArray;
})();
