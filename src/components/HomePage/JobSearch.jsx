import React from "react"
import styles from "../../styles/HomePage.module.css"
import styled from "styled-components"

export function JobSearch() {
    const [tab, setTabs] = React.useState(3);
    return <section className={styles.job_search}>
        <div className={styles.job_search_title}>
        <h2>Browse Jobs</h2>
        </div>
            <div className={styles.job_search_tabs}>
            {/* <Tabs> */}
            {/* </Tabs> */}
            </div>
            {   
            (tab===1)?<div className={styles.job_search_container}>

            <div>
                <p>IT-Software Jobs <span>(41629)</span></p>
                <p>Education / Training Jobs <span>(8380)</span></p>
                <p>Manufacturing Jobs <span>(6005)</span></p>
                <p>Media /  Entertainment Jobs <span>(2825)</span></p>
                <p>Cement / Building Materials Jobs <span>(1610)</span></p>
                <p>Engineering / Construction Jobs <span>(1278)</span></p>
                <p>Oil & Gas / Petroleum Jobs <span>(1194)</span></p>
                <p>Automobile / Auto Ancillaries Jobs <span>(863)</span></p>
                <p>Hotel / Restaurant Jobs <span>(614)</span></p>
                <p>Aviation / Airline Jobs <span>(554)</span></p>
            </div>
            <div>
                <p>Recruitment Services Jobs <span>(28505)</span></p>
                <p>Banking / Financial Services Jobs <span>(8185)</span></p>
                <p>Telecom / ISP Jobs <span>(3734)</span></p>
                <p>Pharma / Biotech Jobs <span>(2088)</span></p>
                <p>Internet / E-Commerce Jobs <span>(1552)</span></p>
                <p>Insurance Jobs <span>(1270)</span></p>
                <p>Consumers Durables Jobs <span>(1122)</span></p>
                <p>Real Estate Jobs<span>(799)</span></p>
                <p>FMCG / F&B Jobs<span>(603)</span></p>
                <p>Textile / Garments Jobs<span>(406)</span></p>
            </div>
            <div>
                <p>BPO / Call Center Jobs <span>(8623)</span></p>
                <p>Management Consulting Jobs <span>(6650)</span></p>
                <p>Medical / Heathcare Jobs<span>(3103)</span></p>
                <p>NBFC Jobs<span>(1786)</span></p>
                <p>IT-Hardware Jobs<span>(1426)</span></p>
                <p>Advertising Jobs <span>(1198)</span></p>
                <p>Logistics Jobs<span>(1113)</span></p>
                <p>Retail Jobs<span>(749)</span></p>
                <p>KPO / Analytics Jobs<span>(578)</span></p>
                <p>Chemical / Plastic Jobs<span>(399)</span></p>
            </div>
            </div> :
                (tab === 2) ? 
                <div className={styles.job_search_container}>
                <div>
                <p>IT-Software Jobs <span>(68787)</span></p>
                <p>Finance / Accounts Jobs <span>(6331)</span></p>
                <p>Education / Training <span>(3784)</span></p>
                <p>HR /  Recruitment Jobs <span>(2751)</span></p>
                <p>Engineering Design Jobs <span>(2006)</span></p>
                <p>Hotel / Restaurant Materials Jobs <span>(1610)</span></p>
                <p>Journalism / Content Jobs <span>(1194)</span></p>
                <p>Architecture / Interior Jobs <span>(401)</span></p>
            </div>
            <div>
                <p>IT-Software Jobs <span>(68787)</span></p>
                <p>Finance / Accounts Jobs <span>(6331)</span></p>
                <p>Education / Training <span>(3784)</span></p>
                <p>HR /  Recruitment Jobs <span>(2751)</span></p>
                <p>Engineering Design Jobs <span>(2006)</span></p>
                <p>Hotel / Restaurant Materials Jobs <span>(1610)</span></p>
                <p>Journalism / Content Jobs <span>(1194)</span></p>
                <p>Architecture / Interior Jobs <span>(401)</span></p>
            </div>
            <div>
                <p>IT-Software Jobs <span>(68787)</span></p>
                <p>Finance / Accounts Jobs <span>(6331)</span></p>
                <p>Education / Training <span>(3784)</span></p>
                <p>HR /  Recruitment Jobs <span>(2751)</span></p>
                <p>Engineering Design Jobs <span>(2006)</span></p>
                <p>Hotel / Restaurant Materials Jobs <span>(1610)</span></p>
                <p>Journalism / Content Jobs <span>(1194)</span></p>
                <p>Architecture / Interior Jobs <span>(401)</span></p>
            </div>
            </div>
                : (tab===3)?<div className={styles.job_search_container}>

            <div>
                <p>Bangalore Jobs <span>(33411)</span></p>
                <p>Gurgoan Jobs <span>(25420)</span></p>
                <p>Chennai Jobs <span>(12490)</span></p>
                <p>Ahmedabad Jobs <span>(5244)</span></p>
            </div>
            <div>
               <p>Delhi Jobs <span>(25411)</span></p>
                <p>Mumbai Jobs <span>(18420)</span></p>
                <p>Pune Jobs <span>(12063)</span></p>
            </div>
            <div>
               <p>Noida Jobs <span>(33411)</span></p>
                <p>Hyderabad Jobs <span>(25420)</span></p>
                <p>Kolkata Jobs <span>(12490)</span></p>
            </div>
            </div>:<h1>ji</h1>
        }
        <div className={styles.job_search_button}>
            <button>Job by industries</button>
        </div>
    </section>
}