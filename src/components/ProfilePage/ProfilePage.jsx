import React from "react"
import ShowNavBar from "../showJobs/ShowNavBar"
import { ProfileContainer } from "./ProfileContainer"
import { RegisterFooter } from "../Register/RegisterFooter"
export function ProfilePage({ user}) {
    return <React.Fragment>
        <ShowNavBar />
        <ProfileContainer user={user} />
        <RegisterFooter/>
    </React.Fragment>
}