import ReactGA from "react-ga4";

const counteraction = () =>
	ReactGA.event("counterButtonClicked", { method: "counterClick" });
