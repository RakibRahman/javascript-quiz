/*jshint esversion: 6 */
import DOM from "./dom.js";
import Question from "./questions.js";
import Quiz from "./quiz.js";

DOM();

const App = (() => {
  const question = container.querySelector("#question");
  const answers = container.querySelector("#answerSheet");
  const tracker = container.querySelector("#currentQuestionNum");
  const progressBar = container.querySelector("#progress");
  const quizStatus = container.querySelector("#quizStatus");
  const nextButton = container.querySelector("#next");
  const restartButton = container.querySelector("#restart");

  const quiz = new Quiz(Question); //store questions in Quiz

  //render the quiz dynamically
  const changeContent = (tag, value) => {
    tag.innerHTML = value;
  };

  // render the question
  const renderQuestion = (_) => {
    // "_" Its nothing but a notion to name a parameter which isn't going to be used in the function.
    const title = quiz.currentQuestion().question;
    changeContent(question, title);
  };

  // render the choices
  const renderChoices = (_) => {
    let markup = "";
    const mcq = quiz.currentQuestion().choices;
    mcq.forEach((choice, index) => {
      markup += `
      <li class='answer'>
            
      <input type="radio" name="choice" class="answer__input" data-key="${index}" id="choice${index}"> 
      <label for="choice${index}" class="choiceLabel">
      <p class="icon"></p>
      <p>${choice}</p></label>
      </li>
          
        `;
      changeContent(answers, markup);
    });
  };

  // render the tracker
  const renderTracker = (_) => {
    const index = `${quiz.currentIndex + 1}  Of  ${quiz.questions.length}`;
    changeContent(tracker, index);
  };

  //render the progress bar

  const getPercentage = (n1, n2) => {
    return Math.round((n1 / n2) * 100);
  };
  const progressIndicator = (width, maxPercentage) => {
    let loadingBar = setInterval(() => {
      if (width > maxPercentage) {
        clearInterval(loadingBar);
      } else {
        width++;
        progressBar.style.width = `${width}%`;
      }
    }, 3);
  };

  const renderProgress = (_) => {
    const currentWidth = getPercentage(
      quiz.currentIndex,
      quiz.questions.length
    );
    progressIndicator(0, currentWidth);
  };
  //renderResult
  const renderResult = (_) => {
    changeContent(question, `Greet Job`);
    changeContent(tracker, "Completed");
    changeContent(
      quizStatus,
      `Your Score: ${getPercentage(quiz.score, quiz.questions.length)}%`
    );
    next.style.opacity = 0;
    renderProgress();
  };
  //Event listener

  const eventListeners = (_) => {
    restart.style.opacity = 0;
    next.style.marginLeft = "100px";
    next.addEventListener("click", () => {
      const selectedChoice = container.querySelector(
        "input[name=choice]:checked"
      );
      if (selectedChoice) {
        const key = Number(selectedChoice.getAttribute("data-key"));
        quiz.guess(key);
        renderQuiz();
      }

      restart.style.opacity = 1;
      next.style.marginLeft = "0px";

      next.innerHTML = `<div class="loading"></div>`;
      setTimeout(() => {
        next.innerText = "Next";
      }, 200);
    });
    restart.addEventListener("click", () => {
      quiz.reset();
      renderQuiz();
      next.style.opacity = 1;
    });
  };
  const renderQuiz = (_) => {
    if (quiz.isCompleted()) {
      renderResult();
    } else {
      renderQuestion();
      renderChoices();
      renderTracker();
      renderProgress();
    }
  };
  return {
    renderQuiz: renderQuiz,
    listener: eventListeners,
  };
})();

App.renderQuiz();
App.listener();
