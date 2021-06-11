export default function dom() {
  const container = document.getElementById("container");

  container.innerHTML += `

           <div id="questionSheet">
                <h1 id="question"></h1>
    
                    <h3 id="currentQuestionNum"></h3>
    
            <div id='progressBar'><div id='progress'></div></div>
            <h2 id='quizStatus'>Pick a option</h2>
           </div>

            
            <ul id='answerSheet'>
            
            </ul>


<div id="btn">
    
                <button id='next'>Next</button>
                <button id='restart'>Restart</button>
</div>

`;
  // const scoreBoard = document.createElement("div");
  // scoreBoard.innerHTML = "score";
  // container.prepend(scoreBoard);
}
