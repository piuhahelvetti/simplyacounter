import './App.css';
import { useState } from "react";

export default function App() {

  const [count, setCount] = useState(0);

  const [plusStep, setPlusStep] = useState(1);

  const [minusStep, setMinusStep] = useState(1);


  window.onbeforeunload = function(event)
{
    return window.confirm("Confirm refresh");
};

  function plus(){
    setCount(count + plusStep);
  } //plusOne

  function minus (){
    setCount (count - minusStep);  
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

function setPlusStepPrompt(){
 let customPlusStepInput = Number(prompt("Enter desired + step amount"));
 if(!isNaN(customPlusStepInput)){
 setPlusStep(customPlusStepInput);
} else{
  setPlusStep(1);
}//setPlusStepPrompt.else
}//setPlusStepPrompt

function setMinusStepPrompt(){
  let customMinusStepInput = Number(prompt("Enter desired - step amount"));
  if(!isNaN(customMinusStepInput)){
  setMinusStep(customMinusStepInput);
 } else{
   setMinusStep(1);
 }//setPlusStepPrompt.else
 }//setPlusStepPrompt

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

      <button id="customstart" onClick={setCustomAmount}>Set Custom Starting Amount</button> <br />

      <a id="sourcecodelink"
      href="https://github.com/sapphirescarlett/simplyacounter"
      target="__blank"
      >
        Source code <br />
        (GitHub)
      </a>

      <button onClick={setPlusStepPrompt}>
      Set custom + step amount
      </button>

      <button onClick={setMinusStepPrompt}>
      Set custom - step amount
      </button>

    </div>
  );// return
}//App