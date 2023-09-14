import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { SettingsIcon } from "./Icons/SettingsIcon";

export default function HomePage(): JSX.Element {
	const prevCount: number = parseInt(localStorage.getItem("count"));
	const prevPlusStep: number = parseInt(localStorage.getItem("plusStep"));
	const prevMinusStep: number = parseInt(localStorage.getItem("minusStep"));

	//Checks if local storage value is NaN (Case in new browsers) and sets initial state accordingly
	const [count, setCount] = useState(!isNaN(prevCount) ? prevCount : 0);

	const [plusStep, setPlusStep] = useState(
		!isNaN(prevPlusStep) ? prevPlusStep : 1
	);

	const [minusStep, setMinusStep] = useState(
		!isNaN(prevMinusStep) ? prevMinusStep : 1
	);

	useEffect(() => {
		localStorage.setItem("count", JSON.stringify(count));
	}, [count]);

	useEffect(() => {
		localStorage.setItem("plusStep", JSON.stringify(plusStep));
	}, [plusStep]);

	useEffect(() => {
		localStorage.setItem("minusStep", JSON.stringify(minusStep));
	}, [minusStep]);

	function updateCount(amount: number) {
		setCount((currentCount) => {
			return currentCount + amount;
		});
	}

	function resetCount() {
		if (count !== 0) {
			const confirmReset = window.confirm(
				"Are you sure you want to reset the counter?"
			);
			if (confirmReset === true) {
				setCount(0);
				console.log("Counter has been reset");
			}
		}
	} //resetCount

	function setCustomCount() {
		const customStart = parseInt(prompt("Enter custom starting point"));
		console.log("Custom starting value entered:" + customStart);
		if (isNaN(customStart)) {
			console.log("ERROR: Please enter a number");
			alert("Error: Please enter numeric a value!");
			setCount(count);
		} else {
			setCount(customStart);
			console.log(
				"Custom starting point set. Counter value is now " + customStart
			);
		}
	} //setCustomAmount

	function setPlusStepPrompt() {
		let customPlusStepInput = Number(prompt("Enter desired + step amount"));

		if (isNaN(customPlusStepInput) || customPlusStepInput === 0) {
			setPlusStep(1);
		} else {
			setPlusStep(customPlusStepInput);
			console.log("Plus step set to " + plusStep);
		}
	} //setPlusStepPrompt

	function setMinusStepPrompt() {
		let customMinusStepInput = Number(prompt("Enter desired - step amount"));

		if (isNaN(customMinusStepInput) || customMinusStepInput === 0) {
			setMinusStep(1);
		} else {
			setMinusStep(customMinusStepInput);
			console.log("Minus step set to " + minusStep);
		}
	} //setMinusStepPrompt

	function resetPlusStep() {
		const confirmPlusStepReset = window.confirm(
			"Are you sure you want to reset + step"
		);
		if (confirmPlusStepReset === true) {
			setPlusStep(1);
		}
	}

	function resetMinusStep() {
		const confirmMinusStepReset = window.confirm(
			"Are you sure you want to reset + step"
		);
		if (confirmMinusStepReset === true) {
			setMinusStep(1);
		}
	}

	function resetAll() {
		const confirmResetAll = window.confirm(
			"Are you sure you want to reset everything?"
		);
		if (confirmResetAll === true) {
			setCount(0);
			setPlusStep(1);
		}
	}

	return (
		<div className="Home">
			<h2 id="count">{count}</h2>

			<div className="plusMinus">
				<button
					id="plusone"
					className="counterButton"
					onClick={() => updateCount(plusStep)}
				>
					+
				</button>
				<button
					id="minusone"
					className="counterButton"
					onClick={() => updateCount(-minusStep)}
				>
					-
				</button>
			</div>
			<br />

			{/*<a id="guideLink" href="/Instructions">
				Usage Guide
			</a>*/}

			<br />
			<Popup
				trigger={
					<button id="settingsTrigger">
						<SettingsIcon />
					</button>
				}
				position="bottom center"
				contentStyle={{ width: "400px", backgroundColor:"#505050"}}
			>
				<div className="settingsMenu" >
					<h3 id="settingsTitle" style={{color:"white"}}>
						{" "}
						Settings{" "}
					</h3>
					<button onClick={resetCount}style={{color:"white"}}>Reset counter</button> <br />
					<button onClick={setCustomCount} style={{ marginTop: "30px", color:"white"}}>
						Set custom count
					</button>
					<br />
					<button onClick={setPlusStepPrompt} style={{color:"white"}}>Set plus step</button> <br />
					<button onClick={setMinusStepPrompt} style={{color:"white"}}>Set minus step</button> <br />
					<button onClick={resetAll} style={{color:"white", marginBottom:"20px"}}>Reset to all values to default</button>
					<br />
					<a href="/" style={{ color: "white" }}>
						Back to counter
					</a> <br />
					<footer style={{marginTop:"20px"}}>
						<a href="/instructions" style={{color:"white"}}>About & Instructions</a>
					</footer>
				</div>
			</Popup>
			<footer id="footer">
				<h2>&copy; Leevi Saastamoinen 2022 - {new Date().getFullYear()}</h2>
				<a
					id="sourcecodelink"
					href="https://github.com/piuhahelvetti/simplyacounter"
					target="__blank"
				>
					Source code <br />
					(GitHub)
				</a>
			</footer>
		</div>
	); //return
}
