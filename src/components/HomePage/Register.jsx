import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Register() {
    return <section className={styles.register}>
        <div className={styles.register_container}>
            <div className={styles.register_container_left}>
                <h3>Growth on your mind?</h3>
                <p>Explore 300,000+ jobs</p>
                <div>
                    <input type="text" placeholder="Job title, skills"></input>
                </div>
            </div>
            <div className={styles.register_container_right}>
                <div>
                    <button>Register</button></div>
                <button><img src={ process.env.PUBLIC_URL+`signin.png`} alt=""/>Sign in</button>
            </div>
        </div>
    </section>
}