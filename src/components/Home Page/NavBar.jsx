import React from "react"
import styles from "../../styles/NavBar.module.css"

export function NavBar() {
    return <nav className={styles.nav}>
            <div className={styles.nav_left}>
            <img src={process.env.PUBLIC_URL + "/NavBar_Logo.png"} alt="Logo" className={styles.logo}/>
                <li className={styles.nav_tab}>Search Jobs</li>
                <li className={styles.nav_tab}>Services</li>
                <li className={styles.nav_tab}>Resources</li>
                <li className={styles.nav_tab}>Recruiter</li>
                <li className={styles.nav_tab}>Walk-ins</li>
            <li className={styles.career_guidance}><img src={process.env.PUBLIC_URL + "/Career_bulb.png"  } alt="career"/>Career Guidance</li>
            </div>
            <div className={styles.nav_right}>
                <li>Create job alert</li>
                <li>Post a job</li>
                <div className={styles.nav_right_contact}>
                    <li>080-471055555</li>
                    <li>9am-6pm, Mon to Sat</li>
                </div>
            </div>
    </nav>
} 