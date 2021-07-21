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
    const [header, setHeader] = React.useState(false);
    return <React.Fragment>
        <NavBar/>
        <Register header={header} setHeader={ setHeader}/>
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