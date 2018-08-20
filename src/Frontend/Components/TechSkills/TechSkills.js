import React from 'react';
import './TechSkills.less';
import '../Icons/Icons.less';

export default function TechSkills() {
    return (
        <div id="skills-container">
        <div className="skills-title">Technical Skills</div>
            <ul className="skills-list">
                <li className="skills"><div className="javascripticon"></div>Javascript</li>
                <li className="skills"><div className="reacticon"></div>ReactJS</li>
                <li className="skills"><div className="css3icon"></div>CSS3</li>
                <li className="skills"><div className="html5icon"></div>HTML5</li>
                <li className="skills"><div className="nodeicon"></div>NodeJS</li>
                <li className="skills"><div className="expressicon"></div>ExpressJS</li>
                <li className="skills"><div  className="mongodbicon"></div>MongoDB</li>
            </ul>
        </div>
            )
} 