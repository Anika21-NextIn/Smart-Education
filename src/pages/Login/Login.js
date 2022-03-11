import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Login = () => {
    return (
        <>
        <Header></Header>
            <div className="all-title-box">
                <div className="container text-center">
                    <h1>Login<span className="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1>
                </div>
	        </div>
            <div id="overviews" className="section lb">
                <div className="container">
                  <div className='customer-box'>
                        
                        <ul className="nav nav-tabs">
                            <li><a className="active" href="#Login" data-toggle="tab">Login</a></li>
                            <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                        </ul>
                        
                        <div className="tab-content">
                            <div className="tab-pane active" id="Login">
                                <form role="form" className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" id="email1" placeholder="Name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" id="exampleInputPassword1" placeholder="Email" type="email"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-light btn-radius btn-brd grd1">
                                                Submit
                                            </button>
                                            <a className="for-pwd" href="javascript:;">Forgot your password?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane" id="Registration">
                                <form role="form" className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="Name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" id="email" placeholder="Email" type="email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" id="mobile" placeholder="Mobile" type="email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input className="form-control" id="password" placeholder="Password" type="password"/>
                                        </div>
                                    </div>
                                    <div className="row">							
                                        <div className="col-sm-10">
                                            <button type="button" className="btn btn-light btn-radius btn-brd grd1">
                                                Save &amp; Continue
                                            </button>
                                            <button type="button" className="btn btn-light btn-radius btn-brd grd1">
                                                Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                     </div>
                 </div>
             </div>
        <Footer></Footer>
        </>
    );
};

export default Login;