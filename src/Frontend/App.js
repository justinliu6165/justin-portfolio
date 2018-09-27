import React, { Component } from 'react';
import './App.less';
import HomPage from './Components/Homepage/HomePage';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import TechSkills from '../Frontend/Components/TechSkills/TechSkills';
import Projects from './Components/Projects/Projects';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

library.add(faEnvelope, faAngleDown, faPhone);

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomPage />
        <div className="App-wrapper">
          <Profile />
          <div className="main-content">
            <About />
            <TechSkills/>
            <Projects />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
