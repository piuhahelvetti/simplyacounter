import "./App.css";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
export default function App():JSX.Element {
	const [plusStep, setPlusStep] = useState(1);

	const [minusStep, setMinusStep] = useState(1);

	const prevCount:number = parseInt(localStorage.getItem("count"));


	const [count, setCount] = useState(!isNaN(prevCount)? prevCount:0); //Checks if local storage value is NaN (Case in new browsers,  and sets initial state accordingly)

	window.onbeforeunload = function (event) {
		if(count !== 0){
		return window.confirm("Confirm refresh");
	}
};

	function updateLocalStorage (newCount:number) {
		localStorage.setItem("count", JSON.stringify(newCount));
	}

	function plus() {
		setCount(count + plusStep);
		console.log("Added" + plusStep);
		updateLocalStorage(count+plusStep);
	} //plusOne

	function minus() {
		setCount(count - minusStep);
		console.log("Substracted" + minusStep);

		updateLocalStorage(count-minusStep);
	} //plusOne

	function plusFive() {
		setCount(count + 5);
		console.log("Added 5");
		updateLocalStorage(count+5);

	} //plusFive

	function minusFive() {
		setCount(count - 5);
		console.log("Substracted 5");
    
		updateLocalStorage(count-5);

	} //plusFive

	function plusTen() {
		setCount(count + 10);
		console.log("Added 10");
		updateLocalStorage(count+10);
	} //plusFiTen

	function minusTen() {
		setCount(count - 10);
		console.log("Added 10");
		updateLocalStorage(count-10);
	} //minusTen

	function reset() {
		if (count !== 0) {
			const confirmReset = window.confirm(
				"Are you sure you want to reset the counter?"
			);
			if (confirmReset === true) {
				setCount(0);
				console.log("Counter has been reset");
				updateLocalStorage(0);
			} else {
				setCount(count);
			} //setcount else
		}
	} //reset

	function setCustomAmount() {
		const customStart = parseInt(prompt("Enter custom starting point"));
		console.log("Custom starting value entered:" + customStart);
		if (isNaN(customStart)) {
			console.log("ERROR: Please enter a number");
			alert("Error: Please enter numeric a value!")
			setCount(count)
		} else {
			setCount(customStart);
			updateLocalStorage(customStart);
			console.log(
				"Custom starting point set. Counter value is now " + customStart
			);
		}
	} //setCustomAmount

	function setPlusStepPrompt() {
		let customPlusStepInput = Number(prompt("Enter desired + step amount"));
		if (!isNaN(customPlusStepInput)) {
			setPlusStep(customPlusStepInput);
			console.log("Plus step set to " + plusStep);
		} else {
			setPlusStep(1);
		} //setPlusStepPrompt.else
	} //setPlusStepPrompt

	function setMinusStepPrompt() {
		let customMinusStepInput = Number(prompt("Enter desired - step amount"));
		if (!isNaN(customMinusStepInput)) {
			setMinusStep(customMinusStepInput);
			console.log("Minus step set to " + minusStep);
		} else {
			setMinusStep(1);
		} //setPlusStepPrompt.else
	} //setPlusStepPrompt

	return (
		<div className="App">
			<h1>Counter</h1>
			<h2 id="count">{count}</h2>
			<div className="plusMinusOne">
				<button id="plusone" className="counterButton" onClick={plus}>
					+
				</button>
				<button id="minusone" className="counterButton" onClick={minus}>
					-
				</button>
				<br />
			</div>
			<div className="plusMinusFive">
				<button id="plusfive" className="counterButton" onClick={plusFive}>
					+5
				</button>

				<button id="minusfive" className="counterButton" onClick={minusFive}>
					-5
				</button>
			</div>
			<div className="plusMinusTen">
				<button id="plusten" className="counterButton" onClick={plusTen}>
					+10
				</button>
				<button id="minusten" className="counterButton" onClick={minusTen}>
					-10
				</button>
			</div>
			<button id="reset" onClick={reset}>
				Reset
			</button>
			<br />
			<button id="customstart" onClick={setCustomAmount}>
				Set Custom Starting Amount
			</button>
			<br />
			<button onClick={setPlusStepPrompt}>Set custom + step amount</button>
			<button onClick={setMinusStepPrompt}>
				Set custom - step amount
			</button>
			<br />
			<footer>
				<h2>&copy; Leevi Saastamoinen 2022-{new Date().getFullYear()}</h2>
				<a
				id="sourcecodelink"
				href="https://github.com/sapphirescarlett/simplyacounter"
				target="__blank"
			>
				Source code <br />
				(GitHub)
			</a>
			</footer>

		</div>
	); // return
} //App
