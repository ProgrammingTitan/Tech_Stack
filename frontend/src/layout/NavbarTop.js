import React from 'react';
import './Layout.css';
 
export default function NavbarTop() {
    return (
        <>
        <div className = "navbar-wrap">
            <header className="navbar-header">
                <h1 className="home-button"><a href="/">Tech Stack</a></h1>
                <input type="checkbox" className="toggler" />
                <div className="hamburger"><div></div></div>
                <ul className="navigation-top-menu">
                    <li className="navigation-sub-toggler" id="tech"><a>Tech</a>
                        <ul className="navigation-sub-menu" id="tech-sub">
                            <li><a>ALL</a></li>
                            <li><a>Amazon</a></li>
                            <li><a>AI</a></li>
                            <li><a>Apple</a></li>
                            <li><a>Cyber Security</a></li>
                            <li><a>Facebook</a></li>
                            <li><a>Google</a></li>
                            <li><a>Microsoft</a></li>
                            <li><a>Samsung</a></li>
                            <li><a>Tesla</a></li>
                        </ul>
                    </li>
                    <li className="navigation-sub-toggler" id="science"><a>Science</a>
                        <ul className="navigation-sub-menu" id="science-sub">
                            <li><a>ALL</a></li>
                            <li><a>Energy</a></li>
                            <li><a>Environment</a></li>
                            <li><a>NASA</a></li>
                            <li><a>Space</a></li>
                            <li><a>SpaceX</a></li>
                        </ul>
                    </li>
                    <li className="navigation-sub-toggler"><a>US</a></li>
                    <li className="navigation-sub-toggler"><a>Global</a></li>
                    <li className="navigation-sub-toggler" id="business"><a>Business</a>
                        <ul className="navigation-sub-menu" id="business-sub">
                            <li><a>Business</a></li>
                            <li><a>Finance</a></li>
                            <li><a>Economy</a></li>
                        </ul>
                    </li>
                    <li className="navigation-sub-toggler" id="more"><a>More</a>
                        <ul  className="navigation-sub-menu" id="more-sub">
                            <li><a>Sport</a></li>
                            <li><a>Entertainment</a></li>
                            <li><a>Politics</a></li>
                        </ul>
                    </li>
                </ul>
            </header>
        </div>
        </>
    )
}
