import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            {/* <div id="preloader">
                <div className="loader-container">
                    <div className="progress-br float shadow">
                        <div className="progress__item"></div>
                    </div>
                </div>
            </div> */}
            <header className="top-navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src="/assets/images/logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbars-host">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/teachers">Teachers</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                                
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    {user.email ? 
                                     <button onClick={logOut} className="hover-btn-new text-danger"><span>Logout</span></button>
                                        : 
                                     <Link className="hover-btn-new log orange" to="/login"><span>Login</span></Link>
                                }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
	        </header>
        </>
    );
};

export default Header;