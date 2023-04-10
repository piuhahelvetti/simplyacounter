import { useEffect, useState } from "react";

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

	window.onbeforeunload = function (event) {
		if (count !== 0) {
			return window.confirm("Confirm refresh");
		}
	};

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
	} //reset

	function setCustomAmount() {
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
			<h2 id="count" onClick={setCustomAmount}>
				{count}
			</h2>

			<button id="reset" onClick={resetCount}>
				Reset
			</button>

			<div className="plusMinusOne">
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
				<br />
				<button className="customizeButton" onClick={setPlusStepPrompt}>
					Customize step
				</button>

				<button className="customizeButton" onClick={setMinusStepPrompt}>
					{" "}
					Customize step
				</button>
				<br />
				<button className="customizeButton" onClick={resetPlusStep}>
					Reset step
				</button>
				<button className="customizeButton" onClick={resetMinusStep}>
					Reset step
				</button>
				<br />
			</div>
			<div className="plusMinusFive">
				<button
					id="plusfive"
					className="counterButton"
					onClick={() => updateCount(5)}
				>
					+5
				</button>

				<button
					id="minusfive"
					className="counterButton"
					onClick={() => updateCount(-5)}
				>
					-5
				</button>
			</div>
			<div className="plusMinusTen">
				<button
					id="plusten"
					className="counterButton"
					onClick={() => updateCount(10)}
				>
					+10
				</button>
				<button
					id="minusten"
					className="counterButton"
					onClick={() => updateCount(-10)}
				>
					-10
				</button>
			</div>

			<br />

			<a id="guideLink" href="/Instructions">
				Usage Guide
			</a>

			<br />
			<button
				className="customizeButton"
				style={{ width: "160px" }}
				onClick={resetAll}
			>
				Reset everything
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
	); //return
}
