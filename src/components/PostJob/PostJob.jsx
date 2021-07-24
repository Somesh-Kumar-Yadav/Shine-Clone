import React from "react"
import styles from "../../styles/PostJob.module.css"

export function PostJob(){
    return(
        <div className={styles.body}>
           <div className={styles.secnav}>

               <div className={styles.deactive}>
                   <img className={styles.img1} src={process.env.PUBLIC_URL+`tick.png`} alt="tick"/>
                    <img className={styles.img2} src={process.env.PUBLIC_URL+`package.png`} alt="packaged"/>
                    <strong className={styles.s1}>Package details</strong>
               </div>

                <div className={styles.personal}>
               <img src={process.env.PUBLIC_URL+`avatar2.png`} alt="avatar2"/>
                    <strong className={styles.s1}>Personal details</strong>
               </div>

               <div className={styles.payment}>
               <img src={process.env.PUBLIC_URL+`payment.png`} alt="payment"/>
                   <strong className={styles.s1}>Payment mode</strong>
                   </div>
           </div>

           <div className={styles.forms}>
              <div></div>

              <div>
                    <div className={styles.box1}>
                        <div className={styles.stl}> <strong className={styles.str1}>Complete Your details</strong> </div>
                    
                    <div>
                            <h3 className={ styles.h41}>Name</h3>
                         <h3 className={styles.h42}>Mobile</h3>
                    </div>
                    <div className={styles.inp1}>
                            <input type="text" name="email_id" className={styles.text1}
                           placeholder="" required=""  
                           aria-required="true" aria-invalid="true"/>

                            <span className={styles.c_code}><input id="mobile_placeholder" className={styles.text2}
                                   type="text" name="mobile"
                                   placeholder="+91" aria-label="mobile_placeholder"/ ></span>
                    </div>

                    <div>
                            <h3 className={styles.h43}>Company Name</h3>
                         <h3 className={styles.h44}>Name</h3>
                    </div>
                        <div className={styles.inp1}>
                            <input type="text" name="email_id" className={styles.text1}
                           placeholder="" required="" id="id_email_id" 
                           aria-required="true" aria-invalid="true"
                          aria-describedby="id_email_id-error"/>

                         <input type="text" name="email_id" className={styles.text2} 
                           placeholder="" required="" id="id_email_id" 
                           aria-required="true" aria-invalid="true"
                          aria-describedby="id_email_id-error"/>
                    </div>
             
                        <ul >
                            <div className={styles.pol1}>
                            <li>
                                    <input name="check_box" type="checkbox" value="" className={styles.checkbox} id="id_check_box" aria-label="terms" placeholder=""/>
                                    <span class="term">I agree to the 
                                    <a href="/termsandconditions">Terms &amp; Conditions</a>
                                        <span className={styles.name_exit}></span>
                                    </span>
                            </li>
                            
                            <li>
                                    <input name="check_box_kyc" type="checkbox" value="" className={styles.checkbox} id="id_check_box_kyc" aria-label="kyc" placeholder=""/>
                                    <span className={styles.term}>I agree to share my KYC documents with Shine</span>
                            </li>
                            </div>

                            <li className={styles.mtl}>
                                <span class="btn btn-lg btn-round2 btn-yellow cls_btn_checkOut_addToCart" >Continue</span></li>
                        </ul>
                   </div> 
              </div>

                <div className={styles.box2}>
                  <div className={styles.blue}>
                   <div className={styles.price2}>
                       <div className={styles.price_tags}>
                           <strong className={styles.plisting}>Shine Starter Plan</strong>
                       </div>
                   </div>

                  </div>

                  <div className={styles.jobp}>
                     <p>Job Packages</p>
                     <hr></hr>
                  </div>

                  <div>
                        <span className={styles.py}> You pay:  <strong className={styles.cl}>Rs.</strong>
                  <strong className={styles.cl}>999</strong></span>
                  </div>
              </div>
          </div>

          <div className={styles.footer}>
          <p>If you are looking for any information, please feel free to contact us. We will be glad to help.</p>
          <img className={styles.imgf} src={process.env.PUBLIC_URL+`phone.png`} alt="phone"/> <a href="tel:080-47105555">080-47105555</a>

          <a className={styles.a1} href="mailto:recruiterservices@shine.com">recruiterservices@shine.com</a>
          </div>

          <div className={styles.footer1}>
           <span>Help Center</span>  <span>About US</span>  <span> Contact Us</span>
           <span>Terms&Condition</span>  <span>PrivacyPolicy</span> 
          </div>
        </div>
    )
}

