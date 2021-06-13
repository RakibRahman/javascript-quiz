/*jshint esversion: 6 */
import DOM from "./dom.js";
import Question from "./questions.js";
import Quiz from "./quiz.js";
DOM();

const App = (() => {
  const body = document.querySelector("body");
  const container = document.querySelector(".container");
  const questionSheet = document.querySelector(".questionSheet");
  const question = document.querySelector(".question");
  const answers = document.querySelector(".answerSheet");
  const tracker = document.querySelector(".currentQuestionNum");
  const progressBar = document.querySelector(".progress");
  const quizStatus = document.querySelector(".quizStatus");

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

  function renderScore() {
    return getPercentage(quiz.score, quiz.questions.length);
  }

  //renderResult

  const renderResult = (_) => {
    changeContent(question, `Quiz Completed`);
    changeContent(tracker, "All Questions Completed");
    changeContent(quizStatus, `Your Score: ${renderScore()}%`);
    next.style.opacity = 0;

    renderProgress();
    if (renderScore() <= 30) {
      Swal.fire({
        title: "Practice Harder",
        text: `${quizStatus.innerText}`,
        icon: "info",
        confirmButtonText: "Cool",
      });
    } else if (renderScore() > 30 && renderProgress() <= 50) {
      Swal.fire({
        title: "Practice More",
        text: `${quizStatus.innerText}`,
        icon: "info",
        confirmButtonText: "Cool",
      });
    } else if (renderScore() > 50 && renderScore() <= 70) {
      Swal.fire({
        title: "Your are Good",
        text: `${quizStatus.innerText}`,
        icon: "info",
        confirmButtonText: "Cool",
      });
    } else if (renderScore() > 70 && renderScore() <= 80) {
      Swal.fire({
        title: "Your are Awesome",
        text: `${quizStatus.innerText}`,
        icon: "info",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Your Are Great",
        text: `${quizStatus.innerText}`,
        icon: "info",
        confirmButtonText: "Cool",
      });
    }
  };

  //Event listener

  const eventListeners = (_) => {
    restart.style.opacity = 0;
    next.style.marginLeft = "100px";

    //Next button
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

    //restart Button
    restart.addEventListener("click", () => {
      quiz.reset();
      renderQuiz();
      next.style.opacity = 1;
      quizStatus.innerText = "Pick a option";
    });

    //toggle Button
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      container.classList.toggle("dark");
      questionSheet.classList.toggle("dark");
      progressBar.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        toggle.children[0].src = "img/icons8-sun-48.png";
      } else {
        toggle.children[0].src = "img/icons8-crescent-moon-48.png";
      }
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
