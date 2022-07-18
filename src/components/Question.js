import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  
  
  function handleInterval(){
    const intervalTimer = setInterval( () => {
      setTimeRemaining((timeRemaining) => timeRemaining-1);
    },1000)
    return()=> clearInterval(intervalTimer)
  }


  function handleTimeOut(){

    const timeOutTimer = setTimeout(
      ()=> {setTimeRemaining(10)
        onAnswered(false)
      }
      ,10000)

    return () => clearTimeout(timeOutTimer)

    
  }
  // add useEffect code
  useEffect(handleInterval, [])
  useEffect(handleTimeOut, [])
  

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }


  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
