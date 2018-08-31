import React from 'react';
import '../../assets/css/argon.css';
import '../../assets/css/argon.css?v=1.0.1';
import '../../assets/css/argon.min.css';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/img/brand/favicon.png';
import '../../assets/vendor/font-awesome/css/font-awesome.min.css';
import white from "../../assets/img/brand/white.png";
import blue from "../../assets/img/brand/blue.png";

class Header extends React.Component {

    render() {

        return(
            <header className="header-global">
                <nav id="navbar-main"
                     className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
                    <div className="container">
                        <a className="navbar-brand mr-lg-5" href="../index.html">
                            <img src={white} alt="logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbar_global">
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="../index.html">
                                            <img src={blue} alt="blue"/>
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse"
                                                data-target="#navbar_global" aria-controls="navbar_global"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown" href="#" role="button">
                                        <i className="ni ni-ui-04 d-lg-none"></i>
                                        <span className="nav-link-inner--text">졸업 플랜 관리</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-xl">
                                        <div className="dropdown-menu-inner">
                                            <a href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html"
                                               className="media d-flex align-items-center">
                                                <div
                                                    className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                    <i className="ni ni-spaceship"></i>
                                                </div>
                                                <div className="media-body ml-3">
                                                    <h6 className="heading text-primary mb-md-1">플랜 만들기</h6>
                                                    <p className="description d-none d-md-inline-block mb-0">어떤 졸업
                                                        요건으로 졸업할 건지 선택 후 플랜 제작</p>
                                                </div>
                                            </a>
                                            <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html"
                                               className="media d-flex align-items-center">
                                                <div
                                                    className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                    <i className="ni ni-palette"></i>
                                                </div>
                                                <div className="media-body ml-3">
                                                    <h6 className="heading text-primary mb-md-1">저장한 플랜 확인하기</h6>
                                                    <p className="description d-none d-md-inline-block mb-0"> 플랜
                                                        만들기로 만든 플랜들을 확인하세요.</p>
                                                </div>
                                            </a>
                                            <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                               className="media d-flex align-items-center">
                                                <div
                                                    className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                    <i className="ni ni-ui-04"></i>
                                                </div>
                                                <div className="media-body ml-3">
                                                    <h5 className="heading text-warning mb-md-1">친구들의 플랜 확인하기</h5>
                                                    <p className="description d-none d-md-inline-block mb-0">친구들의
                                                        플랜을 확인하세요.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-toggle="dropdown" href="#" role="button">
                                        <i className="ni ni-collection d-lg-none"></i>
                                        <span className="nav-link-inner--text">졸업 관리</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="../examples/landing.html" className="dropdown-item">이수 과목들 확인하기</a>
                                        <a href="../examples/profile.html" className="dropdown-item">졸업 요건 확인하기</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="https://ecareer.skhu.ac.kr/icons/app/cms/front.php"
                                       className="nav-link" role="button">
                                        <i className="ni ni-collection d-lg-none"></i>
                                        <span className="nav-link-inner--text">e 커리어 센터</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon"
                                       href="https://www.facebook.com/creativetim" target="_blank"
                                       data-toggle="tooltip" title="Like us on Facebook">
                                        <i className="fa fa-facebook-square"></i>
                                        <span className="nav-link-inner--text d-lg-none">Facebook</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon"
                                       href="https://www.instagram.com/creativetimofficial" target="_blank"
                                       data-toggle="tooltip" title="Follow us on Instagram">
                                        <i className="fa fa-instagram"></i>
                                        <span className="nav-link-inner--text d-lg-none">Instagram</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="https://twitter.com/creativetim"
                                       target="_blank" data-toggle="tooltip" title="Follow us on Twitter">
                                        <i className="fa fa-twitter-square"></i>
                                        <span className="nav-link-inner--text d-lg-none">Twitter</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon"
                                       href="https://github.com/creativetimofficial/argon-design-system"
                                       target="_blank" data-toggle="tooltip" title="Star us on Github">
                                        <i className="fa fa-github"></i>
                                        <span className="nav-link-inner--text d-lg-none">Github</span>
                                    </a>
                                </li>
                                <li className="nav-item d-none d-lg-block ml-lg-4">
                                    <a href="https://www.creative-tim.com/product/argon-design-system"
                                       target="_blank" className="btn btn-neutral btn-icon">
                <span className="btn-inner--icon">
                  <i className="fa fa-cloud-download mr-2"></i>
                </span>
                                        <span className="nav-link-inner--text">Download</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;