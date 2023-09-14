import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Home";
import InstructionsPage from "./Instructions";

export default function App(): JSX.Element {
	return (
		<div className="App">
			<h1>Counter</h1>

			<Router>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="instructions" element={<InstructionsPage />} />
					{/*<Route path="about" element={}*/}
				</Routes>
			</Router>
		</div>
	);
}
