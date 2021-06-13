/*jshint esversion: 6 */

export default function dom() {
  const container = document.querySelector(".container");

  container.innerHTML += `
  <button id="toggle">
  <img src="img/icons8-crescent-moon-48.png" alt="sun" />
</button>
           <div class="questionSheet">
               <div class="questionPanel">
               
               <div class="question">
              
               
               </div>
               </div>
    
                    <h3 class="currentQuestionNum"></h3>
    
            <div class='progressBar'><div class='progress'></div></div>
            <h2 class='quizStatus'>Pick a option</h2>
           </div>
 
            <ul class='answerSheet'>
            
            </ul>

<div id="btn">
    
                <button id='next' class='center'>Next</button>
                <button id='restart' class='spin thick'>Restart</button>
</div>

`;
  // const scoreBoard = document.createElement("div");
  // scoreBoard.innerHTML = "score";
  // container.prepend(scoreBoard);
}
