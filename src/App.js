import './App.css';
import { useState } from "react";

export default function App() {

  const [count, setCount] = useState(0);

  function plusOne(){
    setCount(count + 1);
  } //plusOne

  function minusOne (){
    setCount (count - 1);  
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
    const confirmReset = window.confirm("Are you sure you want to reset the counter?");
      if(confirmReset === true){
        setCount(0);
      } else {
        setCount(count);
      }
    
  }//reset

  return (
    <div className="App">
      <h1>Counter</h1>

      <h2 id="count">{count}</h2>
    
    <div className='plusMinusOne'>

      <button id="plusone" onClick={plusOne}>+</button>

      <button id="minusone" onClick={minusOne}>-</button> <br/>

    </div>

    <div className='plusMinusFive'>

      <button id="plusfive" onClick={plusFive}>+5</button>  

      <button id="minusfive" onClick={minusFive}>-5</button>    

    </div>

    <div className="plusMinusTen">
      <button id="plusten" onClick={plusTen}>+10</button>
      <button id="minusten" onClick={minusTen}>-10</button>
    </div>

      <button id="reset" onClick={reset}>Reset</button>

    </div>
  );// return
}//App
