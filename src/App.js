import logo from "./logo.svg";
import "./App.styles.scss";

import { Switch, Route, useParams } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<div>
				<h1>Bienvenue dans notre back-office</h1>
			</div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
}

export default App;
