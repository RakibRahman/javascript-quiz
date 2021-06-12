/*jshint esversion: 6 */

export default function dom() {
  const container = document.getElementById("container");

  container.innerHTML += `

           <div id="questionSheet">
               <div id="questionPanel">
               
               <div id="question">
              
               
               </div>
               </div>
    
                    <h3 id="currentQuestionNum"></h3>
    
            <div id='progressBar'><div id='progress'></div></div>
            <h2 id='quizStatus'>Pick a option</h2>
           </div>
 
            <ul id='answerSheet'>
            
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
