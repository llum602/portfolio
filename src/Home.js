import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import designLogo from './assets/designLogo.png'
import projectsLogo from './assets/projectsLogo.png'
import resumeLogo from './assets/chatLogo.png'

const Home = () => (
    <div>
        <Link to='/Design'>
            <div id="left">
                <img src={designLogo} className={"buttonIcon"} alt="design"/>
                <div className="buttons">Graphic Design</div>
            </div>
        </Link>

        <Link to='/Projects'>
            <div id="left">
                <img src={projectsLogo} className={"buttonIcon"} alt="projects"/>
                <div className="buttons">Projects</div>
            </div>
        </Link>
        
        <Link to='/Resume'>
            <div id="left">
                <img src={resumeLogo} className={"buttonIcon"} alt="resume"/>
                <div className="buttons">Resume</div>
            </div>
        </Link>

        <div id="clear"></div>
    </div>
)

export default Home