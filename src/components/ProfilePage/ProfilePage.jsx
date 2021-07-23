import React from "react"
import ShowNavBar from "../showJobs/ShowNavBar"
import { ProfileContainer } from "./ProfileContainer"
import { LoginFooter } from "../Login/LoginFooter"
export function ProfilePage({home, jobList,user,profile,showJob}) {
    return <React.Fragment>
        <ShowNavBar home={home} jobList={jobList} user={user} showJob={showJob} profile={ profile}/>
        <ProfileContainer user={user} />
        <LoginFooter/>
    </React.Fragment>
}