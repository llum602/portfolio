import React from 'react'
import { Link } from 'react-router-dom'
import mainLogo from'./assets/resumeLogoEdit.png';
import './App.css';

const Header = () => (
    <div>
        <ul align = "middle">
            <Link to='/'><img src={mainLogo} className={"logo"} alt="Logo"/></Link>
            {/* <h3>
                <li><Link to='/Design'>Graphics</Link></li>
                <li><Link to='/Projects'>Projects</Link></li>
                <li><Link to='/Resume'>Resume</Link></li>
            </h3> */}
        </ul>
        <hr></hr>
    </div>
)

export default Header