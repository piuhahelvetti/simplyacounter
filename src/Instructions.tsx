export default function Instructions(): JSX.Element {
	const goHome = () => {
		window.location.href = "/";
	};

	return (
		<div className="Instructions">
			<h2>Usage Guide</h2>
			<p>
				- Pressing the buttons will add or substract the displayed amount.{" "}
				<br />
				- The plus and minus step amounts may be customized in the settings
				<br />
				- The steps can also be resetted to their deafult values (1) in the
				settings
				<br />
				- The counter can be reset by pressing the "reset" button in the
				settings, and everything can be reset by the "Reset to default values"
				button in the settings.
				<br />
				- You can set a custom count to start from in the settings
				<br />
			</p>

			<button onClick={goHome} className="customizeButton">
				Back Home
			</button>
		</div>
	);
}
