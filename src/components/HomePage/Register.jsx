import React from "react"
import styles from "../../styles/HomePage.module.css"
export function Register({ header, setHeader }) {
    if (header) {
        return <section className={styles.register_2}>
            <div className={ styles.register_title}>
                <h3>Growth on your mind?</h3>
                <img onClick={()=>setHeader(false)} src="https://image.flaticon.com/icons/png/128/5073/5073941.png"  alt=""/>
            </div>
            <div className={styles.register_inputs}>
                <input type="text" placeholder="Job title, skills"></input>
                <input type="text" placeholder="Location"></input>
                <select placeholder="Experience (Years)">
                    <option>Experience (Years)</option>
                    <option>0 Yrs</option>
                    <option>1 Yrs</option>
                    <option>2 Yrs</option>
                    <option>3 Yrs</option>
                    <option>4 Yrs</option>
                    <option>5 Yrs</option>
                    <option>6 Yrs</option>
                    <option>7 Yrs</option>
                    <option>8 Yrs</option>
                    <option>9 Yrs</option>
                    <option>10 Yrs</option>
                    <option>11 Yrs</option>
                    <option>12 Yrs</option>
                    <option>13 Yrs</option>
                    <option>14 Yrs</option>
                    <option>15 Yrs</option>
                    <option>16 Yrs</option>
                    <option>17 Yrs</option>
                    <option>18 Yrs</option>
                    <option>19 Yrs</option>
                    <option>20 Yrs</option>
                    <option>21 Yrs</option>
                    <option>22 Yrs</option>
                    <option>23 Yrs</option>
                    <option>24 Yrs</option>
                    <option>25 Yrs</option>
                    <option>25+ Yrs</option>
                </select>
                <button>Submit</button>
               </div>
    </section>
    }
    return <section className={styles.register}>
        <div className={styles.register_container}>
            <div className={styles.register_container_left}>
                <h3>Growth on your mind?</h3>
                <p>Explore 300,000+ jobs</p>
                <div>
                    <input type="text" placeholder="Job title, skills" onClick={() => setHeader(true)}></input>
                </div>
            </div>
            <div className={styles.register_container_right}>
                
                <button>Register for free</button>
                <button>Sign in</button>
            </div>
            
        </div>
    </section>
}