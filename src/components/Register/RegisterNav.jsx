import React from "react"
import styles from "../../styles/Register.module.css"
export function RegisterNav() {
    return <nav className={styles.reg_navbar}>
            <img src={process.env.PUBLIC_URL + `NavBar_logo.png`} alt="" />
            <button>Login</button>
    </nav>
}