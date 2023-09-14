import Instructions from "../Instructions";

export default function AboutPage(): JSX.Element {
	return (
		<div className="aboutPage">
			<h1>About Simply A Counter</h1>
			<p className="about">
				SimplyACounter is exactly what it sounds like; simply a counter. Nothing
				extra, just a simple counter app that works anywhere on any browser that
				supports JavaScript
			</p>
			<Instructions />
		</div>
	);
}
