import React from 'react'
import './App.css';

const Projects = () => (
  <div>
      <div className="title"><b>Projects</b></div>
      <div className="bio">
        A collection of Lauren's outside projects
        <br></br>You can find her github <a href="https://github.com/llum602">here</a>
      </div>
      <a href="http://diligent-caption.surge.sh/">
        <div className="block">
          <h2>Chord</h2>
          <p>A simple website created with React that allows users to create multilayer audio tracks<br></br>Note: recording does not function on web version</p>
        </div>
      </a>
  </div>
)

export default Projects;
