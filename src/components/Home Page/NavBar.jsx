import React from "react"


export function NavBar() {
    return <nav>
            <div>
            <img src={process.env.PUBLIC_URL+ "/NavBar_Logo.png"} alt="Logo"/>
                <p>Search Jobs</p>
                <p>Services</p>
                <p>Resources</p>
                <p>Recruiter</p>
                <p>Walk-ins</p>
                <p>Career Guidance</p>
            </div>
            <div>
                <p>Create job alert</p>
                <p>Post a job</p>
                <div>
                    <p>080-471055555</p>
                    <p>9am-6pm, Mon to Sat</p>
                </div>
            </div>
    </nav>
} 