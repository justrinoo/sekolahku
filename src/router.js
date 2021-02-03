import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyLanding from "./pages/MyLanding";
export default function TheApp() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" render={(props) => <MyLanding {...props} />} />
				</Switch>
			</Router>
		</>
	);
}
