import React, { Component } from 'react';
import './App.less';
import HomPage from './Components/Homepage/HomePage';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faEnvelope, faLink, faGlobe } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt, faEnvelope, faLink, faGlobe);

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomPage />
          <About />
          <Projects />
      </div>
    );
  }
}

export default App;
