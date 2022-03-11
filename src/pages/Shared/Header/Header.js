import React from 'react';

const Header = () => {
    return (
        <>
            <div id="preloader">
                <div className="loader-container">
                    <div className="progress-br float shadow">
                        <div className="progress__item"></div>
                    </div>
                </div>
            </div>
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
                                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Course </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                        <a className="dropdown-item" href="course-grid-2.html">Course Grid 2 </a>
                                        <a className="dropdown-item" href="course-grid-3.html">Course Grid 3 </a>
                                        <a className="dropdown-item" href="course-grid-4.html">Course Grid 4 </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                        <a className="dropdown-item" href="blog.html">Blog </a>
                                        <a className="dropdown-item" href="blog-single.html">Blog single </a>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="teachers.html">Teachers</a></li>
                                <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a className="hover-btn-new log orange" href="#" data-toggle="modal" data-target="#login"><span>Book Now</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
	        </header>
        </>
    );
};

export default Header;