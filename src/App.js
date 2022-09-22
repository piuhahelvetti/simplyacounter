import './App.css';
import { useState } from "react";

export default function App() {

  const [count, setCount] = useState(0);

  const [step, setStep] = useState(1);


  window.onbeforeunload = function(event)
{
    return window.confirm("Confirm refresh");
};

  function plus(){
    setCount(count + step);
  } //plusOne

  function minus (){
    setCount (count - step);  
  } //plusOne

  function plusFive (){
    setCount(count + 5);
  } //plusFive

  function minusFive (){
    setCount(count -5);
  } //plusFive

  function plusTen(){
    setCount(count +10);
  } //plusFiTen

  function minusTen(){
    setCount(count -10);
  }//minusTen

  
  function reset(){
    
    if (count !== 0){
    const confirmReset = window.confirm("Are you sure you want to reset the counter?");
      if(confirmReset === true){
        setCount(0);
      } else {
        setCount(count);
      }//setcount else
    }
}//reset

function setCustomAmount (){
 const rawCustomStart = prompt("Set a starting point");
 const customStart = parseInt(rawCustomStart);

 if(isNaN(customStart)) {
  setCount(0);
 } else {
  setCount(customStart);
 }
}//setCustomAmount

function setStepPrompt(){
 let customStepInput = Number(prompt("Enter desired step amount"));
if(isNaN(customStepInput)){
   setStep(customStepInput);
  } else {
    setStep(1);
  }
}

  return (
    <div className="App">
      <h1>Counter</h1>

     <h2 id="count">{count}</h2>
        
    <div className='plusMinusOne'>

      <button id="plusone" onClick={plus}>+</button>

      <button id="minusone" onClick={minus}>-</button> <br/>

    </div>

    <div className='plusMinusFive'>

      <button id="plusfive" onClick={plusFive}>+5</button>  

      <button id="minusfive" onClick={minusFive}>-5</button>    

    </div>

    <div className="plusMinusTen">
      <button id="plusten" onClick={plusTen}>+10</button>
      <button id="minusten" onClick={minusTen}>-10</button>
    </div>

      <button id="reset" onClick={reset}>Reset</button> <br/> 

      <button id="customstart" onClick={setCustomAmount}>Set Custom Starting Amount</button> <br/>

      <button onClick={setStepPrompt}>
      Set custom step amount
      </button>

    </div>
  );// return

}//App
