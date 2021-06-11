<img src="https://img.icons8.com/cute-clipart/64/000000/ok.png"/>
<img src="https://img.icons8.com/cute-clipart/64/000000/cancel.png"/>
<img src="https://img.icons8.com/dusk/64/000000/filled-circle.png"/>

const q1 = new Question("1+1", [0, 2, 3, 4], 1);
const q2 = new Question("2+2", [0, 2, 3, 4], 3);
const q3 = new Question("3+3", [0, 2, 3, 4], 2);
const q4 = new Question();
const q5 = new Question();

console.log(q1.isCorrect(1));
const questionArray = [q1, q2, q3, q4, q5];

const myQuiz = new Quiz(questionArray);
console.log(myQuiz.questions);
console.log(myQuiz.currentQuestion());
console.log("---");
console.log(myQuiz);
