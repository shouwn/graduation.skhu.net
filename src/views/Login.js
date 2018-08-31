import React from 'react';
import '../assets/css/argon.css';
import '../assets/css/argon.css?v=1.0.1';
import '../assets/css/argon.min.css';
import '../assets/vendor/nucleo/css/nucleo.css';
import '../assets/img/brand/favicon.png';
import '../assets/vendor/font-awesome/css/font-awesome.min.css';
import promo1 from "../assets/img/theme/promo-1.png";
import img1 from "../assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "../assets/img/ill/ill-2.svg";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Link} from "react-router-dom";

class Login extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <main>
                    <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="container pt-lg-md">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card bg-secondary shadow border-0">
                                        <div className="card-header bg-white pb-5">
                                            <div className="text-muted text-center">
                                                <h1>Login</h1>
                                            </div>
                                        </div>
                                        <div className="card-body px-lg-5 py-lg-5">
                                            <form role="form">
                                                <div className="form-group mb-3">
                                                    <div className="input-group input-group-alternative">
                                                        <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="ni ni-email-83" /></span>
                                                        </div>
                                                        <input className="form-control" placeholder="Email" type="email" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative">
                                                        <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="ni ni-lock-circle-open" /></span>
                                                        </div>
                                                        <input className="form-control" placeholder="Password" type="password" />
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input className="custom-control-input" id=" customCheckLogin"
                                                           type="checkbox" />
                                                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                        <span>Remember me</span>
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <Link to="/profile">
                                                        <button type="submit" className="btn btn-primary my-4">로그인</button>
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <a href="#" className="text-light">
                                                <small>비밀번호 찾기</small>
                                            </a>
                                        </div>
                                        <div className="col-6 text-right">
                                            <a href="#" className="text-light">
                                                <small>새 계정 만들기</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Login;
