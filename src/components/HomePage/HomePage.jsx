import React from "react"
import { NavBar } from "./NavBar"
import { Register } from "./Register"
import { CoolPlaces } from "./CoolPlaces"
import { TopCompanies } from "./TopCompanies"
import { InfyAd } from "./Infy_Ad"
import { WhyShine } from "./WhyShine"
import { Premium } from "./Premium"
import { Jobs } from "./Jobs"
import { Resume } from "./Resume"
import { Learning } from "./Learning"
import { Courses } from "./Courses"
export function HomePage() {
    return <React.Fragment>
        <NavBar/>
        <Register/>
        <CoolPlaces />
        <TopCompanies />
        < InfyAd />
        <WhyShine />
        <Premium />
        <Jobs />
        <Resume />
        <Learning />
        <Courses/>
    </React.Fragment>
} 