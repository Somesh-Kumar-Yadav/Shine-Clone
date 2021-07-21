import React from "react"
import { RegisterContainer } from "./RegisterContainer"
import { RegisterDisclamer } from "./RegisterDisclamer"
import { RegisterNav } from "./RegisterNav"
import { RegisterFooter } from "./RegisterFooter"

export function Register() {
    return <React.Fragment>
        <RegisterNav />
        <RegisterContainer />
        <RegisterDisclamer />
        <RegisterFooter/>
    </React.Fragment>
}