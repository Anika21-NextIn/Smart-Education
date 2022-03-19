import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import useAuth from '../../../hooks/useAuth';

const LoginRegister = () => {
    const [loginData, setLoginData] = useState({});
    const [error, setError] = useState("");
    const { loginUser, authError, signInWithGoogle } = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
   
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(loginData.password.length < 6 ) {
            setError('Password must be atleast 6 characters long');
            return;
        }
        loginUser(loginData.email, loginData.password);
        setError('');
    }

    const handleGoogleLogin =() => {
        signInWithGoogle();
    }

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
                    <div className='text-center'>
                         { authError && <div className='text-danger'> {authError} </div>}
                    </div>
                  <div className='customer-box'>
                        
                        <ul className="nav nav-tabs">
                            <li><a className="active" href="#Login" data-toggle="tab">Login</a></li>
                            <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                        </ul>
                        
                        <div className="tab-content">
                            <div className="tab-pane active" id="Login">
                                <form onSubmit={handleSubmit} role="form" className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input required onBlur={handleOnChange} className="form-control" id="email" placeholder="Email" type="email" name='email'/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <input required onBlur={handleOnChange} className="form-control" id="password" placeholder="Enter Your Password" type="password" name='password'/>
                                            <span>
                                                {error}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-light btn-radius btn-brd grd1">
                                                Submit
                                            </button>
                                            <Link to="/login" className="for-pwd">Forgot your password?</Link>
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
                            <div>
                                <button onClick={handleGoogleLogin} className='btn btn-info btn-sm mt-4 ml-1' type="button">Sign In With Google</button>
                            </div>
                        </div>
                     </div>
                 </div>
             </div>
        <Footer></Footer>
        </>
    );
};

export default LoginRegister;