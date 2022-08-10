import React from 'react';
import '../footer/Footer.css';
import youtube from '../images/footerimages/youtube.svg';
import insta from '../images/footerimages/insta.svg';
import pinterest from '../images/footerimages/pinterest.svg';
import twitter from '../images/footerimages/twitter.svg';
import facebook from '../images/footerimages/facebook.svg';
import au from '../images/flags/au.svg';
import br from '../images/flags/br.svg';
import ca from '../images/flags/ca.svg';
import flag from '../images/flags/flag.svg';
import il from '../images/flags/il.svg';
import jp from '../images/flags/jp.svg';
import ru from '../images/flags/ru.svg';
import us from '../images/flags/us.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div>
            <footer className="w-100 py-4 flex-shrink-0" style={{marginTop:"50px"}}>
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-2 col-md-6">
                            <h5 className="small text text-white mb-3">NEED HELP?</h5>
                            <p className="small text-muted mb-0"><a style={{textDecoration:"none",color:"gray"}} href="#">Help Center</a></p>
                            <p className="small text-muted mb-0"><a style={{textDecoration:"none",color:"gray"}} href="#">Email Support</a></p>
                            <p className="small text-muted mb-0"><a style={{textDecoration:"none",color:"gray"}} href="#">Live Chat</a></p>
                            <p className="small text-muted mb-0"><a style={{textDecoration:"none",color:"gray"}} href="#">Send Us Feedback</a></p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="small text- text-white mb-3">ORDERS & SHIPPING</h5>
                            <ul className="list-unstyled text-muted">
                                <li className="small text-muted mb-0"><a style={{textDecoration:"none",color:"gray"}} href="#">Order Status</a></li>
                                <li className="small text-muted mb-0"><a style={{textDecoration:"none",color:"gray"}} href="#">Returns/Exchange</a></li>
                                <li className="small text-muted mb-0"><a style={{textDecoration:"none",color:"gray"}} href="#">Shipping Support</a></li>
                                <li className="small text-muted mb-0 nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><img src={flag} alt="flag" width="15%" />India</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#"><img src={us} alt="us" width="15%" />United States</a>
                                        <a className="dropdown-item" href="#"><img src={ca} alt="ca" width="15%" /> Canada</a>
                                        <a className="dropdown-item" href="#"><img src={jp} alt="jp" width="15%" />Japan</a>
                                        <a className="dropdown-item" href="#"><img src={au} alt="au" width="15%" />Australia</a>
                                        <a className="dropdown-item" href="#"><img src={flag} alt="flag" width="15%" />India</a>
                                        <a className="dropdown-item" href="#"><img src={ru} alt="ru" width="15%" />Russia</a>
                                        <a className="dropdown-item" href="#"><img src={br} alt="br" width="15%" />Brazil</a>
                                        <a className="dropdown-item" href="#"><img src={il} alt="il" width="15%" />Israel</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="small text text-white mb-3">CONNECT WITH US</h5>
                            <ul className="list-unstyled text-muted">
                                <a href="#" ><img src={facebook} alt="facebook" width="10%" /></a>
                                <a href="#" style={{marginLeft:"5px"}}><img src={youtube} alt="youtube" width="10%" /></a>
                                <a href="#" style={{marginLeft:"5px"}}><img src={twitter} alt="twitter" width="10%" /></a>
                                <a href="#" style={{marginLeft:"5px"}}><img src={pinterest} alt="pinterest" width="10%" /></a>
                                <a href="#" style={{marginLeft:"5px"}}><img src={insta} alt="instagram" width="10%" /></a>

                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="small text text-white mb-3">JOIN OUR NEWSLETTER</h5>
                            <p className="small text-muted">Be the first to receive exciting news,features,and special offers from Bodybuilding.com!</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" id="button-addon2" type="button"><FontAwesomeIcon icon={faPaperPlane}/></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container py-4">
                    <p className="text-muted">Careers | Terms of Use | Privacy Policy | CA Supply Chain Act | Accessibility Statemant | About Us | Site Map | Affiliates | Privacy Setting | Help</p>
                </div>
                <p className="small text-muted" style={{ textAlign: "center" }}>© 2021 Bodybuilding.com. All rights reserved. Bodybuilding.com℠ and BodySpace® are trademarks of Bodybuilding.com.</p>
                <p className="small text-muted" style={{ textAlign: "center" }}>Always consult with a qualified healthcare professional prior to beginning any diet or exercise program or</p>
                <p className="small text-muted" style={{ textAlign: "center" }}>taking any dietary supplement. The content on our website is for informational and educational purposes only</p>
                <p className="small text-muted" style={{ textAlign: "center" }}>and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.</p>
                <p className="small text-muted" style={{ textAlign: "center" }}>Bodybuilding.com5777 N Meeker Ave, Boise, ID 83713-1520 USA  1-866-236-8417</p>
            </footer>
        </div>
    )
}

export default Footer
