import "./App.css";
import React from "react";
import { HomePage } from "./components/HomePage/HomePage";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
function App() {
	const [user, setUser] = React.useState({});
	const [isAuth, setIsAuth] = React.useState(false);
	const [homePage, setHomePage] = React.useState(true);
	const [registerPage, setRegisterPage] = React.useState(false);
	const [loginPage, setLoginPage] = React.useState(false);
	const home = () => {
		setLoginPage(false);
		setRegisterPage(false);
		setHomePage(true);
	};
	const login = () => {
		setLoginPage(true);
		setRegisterPage(false);
		setHomePage(false);
	};
	const register = () => {
		setLoginPage(false);
		setRegisterPage(true);
		setHomePage(false);
	};

	if (homePage) {
		return (
			<div className="App">
				<HomePage home={home} login={login} register={register} />
			</div>
		);
	}
	if (registerPage) {
		return (
			<div className="App">
				<Register home={home} login={login} register={register} />
			</div>
		);
	}
	if (loginPage) {
		return (
			<div className="App">
				<Login
					home={home}
					login={login}
					register={register}
					user={user}
					setUser={setUser}
					setIsAuth={setIsAuth}
				/>
			</div>
		);
	}
}

export default App;
