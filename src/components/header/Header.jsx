import { Link } from "react-router-dom";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

import {github_circle,profile_photo,leetcode,gmail,linkedin,profile2} from "../../assets/image";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={profile2} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Sanyam Narang <br /> Full Stack & DevOps Engineer
              </h1>
            </div>
            <p className="header-text text text-white">
            Greetings! I'm SANYAM, a Full-stack developer with strong back-end and front-end skills, leveraging DevOps and cloud to ensure seamless integration, deployment, and security throughout the software development lifecycle.</p>
            </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
            <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={13} />
                </span>
                <p className="info-item-text">
                  <span className="text"><b>Contact Me</b></span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">sanyamnarang40@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">+91 9017794903</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span className="text">Gurugram, Haryana, India</span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
                <li className="social-item">
                    <a href="https://github.com/sanyam40" target="blank">
                      <img src={github_circle} style={{ width: '32px', height: '32px' }} /> 
                      <span className="tooltip text">Github</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://www.linkedin.com/in/sanyam40/" target="blank">
                        <img src={linkedin} style={{ width: '32px', height: '32px' }}/>
                        <span className="tooltip text">Linkedin</span>
                        </a>    
                </li>
                <li className="social-item">
                      <a href="https://leetcode.com/sanyam40/" target="blank">
                        <img src={leetcode} style={{ width: '32px', height: '32px' }}/>
                        <span className="tooltip text">leetcode</span>
                      </a>            
                </li>
                <li className="social-item">
                    <Link to="/">
                        <img src={gmail} style={{ width: '32px', height: '32px' }}/>
                        <span className="tooltip text">Email</span>
                    </Link>
                </li>        
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
