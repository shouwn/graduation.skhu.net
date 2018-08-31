import React from 'react';
import '../../assets/css/argon.css';
import '../../assets/css/argon.css?v=1.0.1';
import '../../assets/css/argon.min.css';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/img/brand/favicon.png';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';

class Footer extends React.Component {

    render() {
        return(
            <footer className="footer has-cards">
                <div className="container">
                    <hr />
                    <div className="row align-items-center justify-content-md-between">
                        <div className="col-md-6">
                            <div className="copyright">
                                &copy; 2018
                                <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="nav nav-footer justify-content-end">
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative
                                        Tim</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" className="nav-link"
                                       target="_blank">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://blog.creative-tim.com" className="nav-link"
                                       target="_blank">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                                       className="nav-link" target="_blank">MIT License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;