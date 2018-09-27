import React from 'react';
import './Profile.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePic from '../Images/profpic.jpg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-header">
                
                <div className="profile-picture">
                    <div className="picture-overlay"></div>
                    <img src={ProfilePic} alt="profile" />
                </div>
            </div>
            <div className="contact">
                <div className="name">Justin Liu</div>
                <div className="info">
                    <a href="https://github.com/justinliu6165" className="github-link"><div className="info-sec gitHubIcon"></div></a>
                    <a href="https://www.linkedin.com/in/justin-liu-42618b121/" className="linkedin-link"><div className="info-sec linkedInIcon"></div></a>
                </div>
                <p className="message">Have a chat...</p>
                <div className="contact-sec"><FontAwesomeIcon icon="envelope" /> justin_liu@hotmail.co.uk</div>
                <div className="contact-sec"><FontAwesomeIcon icon="phone" /> +44 77 66 18 6629</div>
            </div>
        </div>
    )
}