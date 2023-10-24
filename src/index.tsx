import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import ReactGA from "react-ga4";

ReactGA.initialize("G-0VZ4HNNHZP");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
serviceWorkerRegistration.register();
