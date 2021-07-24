import "./App.css";
import React from "react";
import { HomePage } from "./components/HomePage/HomePage";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import ShowJobs from "./components/showJobs/ShowJob";
import Lists from "./components/JobList/jobList";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { PostJob } from "./components/PostJob/PostJob";
function App() {
	let value = localStorage.getItem("isAuth");
	if (value === null) {
		value = false;
		localStorage.setItem("isAuth", value);
	}
	let userObject = JSON.parse(localStorage.getItem("user"));
	if (userObject === null) {
		userObject = [{}];
		localStorage.setItem("user", JSON.stringify(userObject));
	}
	if (value === null) {
		value = false;
		localStorage.setItem("isAuth", value);
	}
	const [user, setUser] = React.useState(userObject[0]);
	const [isAuth, setIsAuth] = React.useState(value);
	const [homePage, setHomePage] = React.useState(true);
	const [registerPage, setRegisterPage] = React.useState(false);
	const [loginPage, setLoginPage] = React.useState(false);
	const [showJobsPage, setShowJobsPage] = React.useState(false);
	const [jobListPage, setJobListPage] = React.useState(false);
	const [profilePage, setProfilePage] = React.useState(false);
	const home = () => {
		setLoginPage(false);
		setRegisterPage(false);
		setHomePage(true);
		setShowJobsPage(false);
		setJobListPage(false);
		setProfilePage(false);
	};
	const login = () => {
		setLoginPage(true);
		setShowJobsPage(false);
		setRegisterPage(false);
		setHomePage(false);
		setJobListPage(false);
		setProfilePage(false);
	};
	const register = () => {
		setShowJobsPage(false);
		setLoginPage(false);
		setRegisterPage(true);
		setHomePage(false);
		setJobListPage(false);
		setProfilePage(false);
	};
	const showJob = () => {
		setShowJobsPage(true);
		setLoginPage(false);
		setRegisterPage(false);
		setHomePage(false);
		setJobListPage(false);
		setProfilePage(false);
	};
	const jobList = () => {
		setShowJobsPage(false);
		setLoginPage(false);
		setRegisterPage(false);
		setHomePage(false);
		setJobListPage(true);
		setProfilePage(false);
	};
	const profile = () => {
		setShowJobsPage(false);
		setLoginPage(false);
		setRegisterPage(false);
		setHomePage(false);
		setJobListPage(false);
		setProfilePage(true);
	};
	if (profilePage) {
		return (
			<ProfilePage
				jobList={jobList}
				home={home}
				login={login}
				register={register}
				profile={profile}
				user={user}
				showJob={showJob}
				setIsAuth={setIsAuth}
			/>
		);
	}
	// console.log(isAuth);
	if (homePage === true) {
		if (isAuth === "true" || isAuth === true) {
			return (
				<div className="App">
					<ShowJobs
						jobList={jobList}
						home={home}
						login={login}
						register={register}
						profile={profile}
						user={user}
						setIsAuth={setIsAuth}
						showJob={showJob}
					/>
				</div>
			);
		} else {
			return (
				<div className="App">
					<HomePage home={home} login={login} register={register} />
				</div>
			);
		}
	}
	if (registerPage) {
		return (
			<div className="App">
				<Register home={home} login={login} register={register} />
			</div>
		);
	}
	if (showJobsPage) {
		return (
			<div className="App">
				<ShowJobs
					jobList={jobList}
					home={home}
					login={login}
					register={register}
					profile={profile}
					user={user}
					showJob={showJob}
					setIsAuth={setIsAuth}
				/>
			</div>
		);
	}
	if (jobListPage) {
		return (
			<div className="App">
				<Lists
					jobList={jobList}
					home={home}
					login={login}
					register={register}
					profile={profile}
					user={user}
					showJob={showJob}
					setIsAuth={setIsAuth}
				/>
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
					showJob={showJob}
				/>
			</div>
		);
	}
}

export default App;
