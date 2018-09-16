import React from 'react';
import './TechSkills.less';
import '../Icons/Icons.less';

export default function TechSkills() {
    return (
        <div id="skills-container">
            <div className="skills-title">Technical Skills</div>
            <ul className="skills-list">
                <li className="skills">
                    <div className="javascripticon"></div>
                    <span>Javascript</span>
                </li>
                <li className="skills">
                    <div className="reacticon"></div>
                    <span>ReactJS</span>
                </li>
                <li className="skills">
                    <div className="css3icon"></div>
                    <span>CSS3</span>
                </li>
                <li className="skills">
                    <div className="html5icon"></div>
                    <span>TML5</span>
                </li>
                <li className="skills">
                    <div className="nodeicon"></div>
                    <span>NodeJS</span>
                </li>
                <li className="skills">
                    <div className="expressicon"></div>
                    <span>ExpressJS</span>
                </li>
                <li className="skills">
                    <div className="mongodbicon"></div>
                    <span>MongoDB</span>
                </li>
            </ul>
        </div>
    )
} 