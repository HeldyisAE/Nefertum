import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

import './Footer.css'

function Footer() {

    return (
    <div className="footer">

        <div className="left">
            <div className="footer-links">
            <span>Contact</span>
            <span>Backers</span>
            <span>Roadmap</span>
            <span>Terms</span>
            <span>Privacy</span>
    </div>
        </div>

        <div className="center">
            <div className="social-media">
                <FaXTwitter fontSize={20}/>
                <FaInstagram fontSize={20}/>
                <FaFacebook fontSize={20}/>
                <FaLinkedinIn fontSize={20}/>
            </div>
        </div>

        <div className="right">
            <div className="footer-meta">
                <span>@nefertum</span>
                <span>v0.1.0</span>
            </div>
        </div>
    </div>
  );
}

export default Footer;