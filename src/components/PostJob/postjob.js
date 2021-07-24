import '../App.css';

import Pic1 from '../img/tick.png'
import Pic2 from '../img/package.png'
import Pic3 from '../img/avatar2.png'
import Pic4 from '../img/payment.png'
import Pic5 from '../img/phone.png'
function Home(){
    return(
        <div>
           <div class="secnav">
               <div></div>

               <div class="deactive">
                   <img class="img1" src={Pic1} alt="tick"/>
                   <img class="img2" src={Pic2} alt="packaged"/>
                   <strong class="s1">Package details</strong>
               </div>

               <div class="personal">
               <img src={Pic3} alt="avatar2"/>
               <strong class="s1">Personal details</strong>
               </div>

               <div class="payment">
               <img src={Pic4} alt="payment"/>
                   <strong class="s1">Payment mode</strong>
                   </div>
           </div>

           <div class="forms">
              <div></div>

              <div>
                   <div class="box1">
                    <div class="stl"> <strong class="str1">Complete Your details</strong> </div>
                    
                    <div>
                        <h3 class="h41">Name</h3>
                         <h3 class="h42">Mobile</h3>
                    </div>
                    <div class="inp1">
                          <input type="text" name="email_id" class="text1" 
                           placeholder="" required=""  
                           aria-required="true" aria-invalid="true"/>

                                 <span class="c-code"><input id="mobile_placeholder" class="text2" 
                                   type="text" name="mobile"
                                   placeholder="+91" aria-label="mobile_placeholder"/ ></span>
                    </div>

                    <div>
                        <h3 class="h43">Company Name</h3>
                         <h3 class="h44">Name</h3>
                    </div>
                    <div class="inp1">
                    <input type="text" name="email_id" class="text1" 
                           placeholder="" required="" id="id_email_id" 
                           aria-required="true" aria-invalid="true"
                          aria-describedby="id_email_id-error"/>

                         <input type="text" name="email_id" class="text2" 
                           placeholder="" required="" id="id_email_id" 
                           aria-required="true" aria-invalid="true"
                          aria-describedby="id_email_id-error"/>
                    </div>
             
                        <ul >
                            <div class="pol1">
                            <li>
                                <input name="check_box" type="checkbox" value="" class="checkbox" id="id_check_box" aria-label="terms" placeholder=""/>
                                    <span class="term">I agree to the 
                                    <a href="/termsandconditions">Terms &amp; Conditions</a>
                                    <span class="name_exit"></span>
                                    </span>
                            </li>
                            
                            <li>
                                <input name="check_box_kyc" type="checkbox" value="" class="checkbox" id="id_check_box_kyc" aria-label="kyc" placeholder=""/>
                                <span class="term">I agree to share my KYC documents with Shine</span>
                            </li>
                            </div>

                            <li class="mtl">
                                <span class="btn btn-lg btn-round2 btn-yellow cls_btn_checkOut_addToCart" >Continue</span></li>
                        </ul>
                   </div> 
              </div>

              <div class="box2">
                  <div class="blue">
                   <div class="price2 price1">
                       <div class="price-tags">
                           <strong class="plisting">Shine Starter Plan</strong>
                       </div>
                   </div>

                  </div>

                  <div class="jobp">
                     <p>Job Packages</p>
                     <hr></hr>
                  </div>

                  <div>
                  <span class="py"> You pay:  <strong class="cl">Rs.</strong>
                  <strong class="cl">999</strong></span>
                  </div>
              </div>
          </div>

          <div class="footer">
          <p>If you are looking for any information, please feel free to contact us. We will be glad to help.</p>
          <img class="imgf" src={Pic5} alt="phone"/> <a href="tel:080-47105555">080-47105555</a>

          <a class="a1" href="mailto:recruiterservices@shine.com">recruiterservices@shine.com</a>
          </div>

          <div class="footer1">
           <span>Help Center</span>  <span>About US</span>  <span> Contact Us</span>
           <span>Terms&Condition</span>  <span>PrivacyPolicy</span> 
          </div>
        </div>
    )
}

export default Home;