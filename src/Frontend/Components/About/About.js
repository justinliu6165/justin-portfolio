import React from 'react';
import './About.less';
import TechSkills from '../TechSkills/TechSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    return (
        <div id="aboutpage">
            <div className="about-title">About Me</div>
            <div className="description">
                I am a junior web developer building on the experiences of working with a full-stack development through the Kodiri bootcamp. I am excited at the opportunity to exercise my knowledge and passion and am eager to develop my current skill base further. Experienced in pair programming whilst working in an agile environment.  I am looking to continuously develop my skills in a collaborative environment.
            </div>
            <div className="info">
                <div className="info-sec"><FontAwesomeIcon icon="map-marker-alt" /> London</div>
                <div className="info-sec"><FontAwesomeIcon icon="envelope" /> justin_liu@hotmail.co.uk</div>
                <div className="info-sec"><a href="https://github.com/justinliu6165"><FontAwesomeIcon icon="globe" /> GitHub</a></div>
                <div className="info-sec"><a href="https://www.linkedin.com/in/justin-liu-42618b121/"><FontAwesomeIcon icon="link" /> LinkedIn</a></div>
            </div>
            <TechSkills />
        </div>
    )
}