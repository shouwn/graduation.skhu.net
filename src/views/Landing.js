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

class Landing extends React.Component {

    render() {
        return(
            <div style={{margin: "auto"}}>
                <Header/>
                <main>
                    <div className="position-relative">
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="container py-lg-md d-flex">
                                <div className="col px-0">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h1 className="display-3  text-white">쉽고 간편한 졸업 관리</h1>
                                            <p className="lead  text-white">졸업 요건 관리 페이지는 졸업 요건이 복잡해 알기 힘든 당신을 위해
                                                만들여졌습니다. 이 페이즈를 통해 쉽고 간편하게 졸업 요건을 확인하세요.</p>
                                            <div className="btn-wrapper">
                                                <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                   className="btn btn-info btn-icon mb-3 mb-sm-0">
                                                    <span className="btn-inner--icon">
                                                        <i className="fa fa-code"></i>
                                                    </span>
                                                    <span className="btn-inner--text">회원 가입</span>
                                                </a>
                                                <Link to="/login"
                                                   className="btn btn-white btn-icon mb-3 mb-sm-0">
                                                    <span className="btn-inner--icon">
                                                        <i className="ni ni-cloud-download-95"></i>
                                                    </span>
                                                    <span className="btn-inner--text">로그인</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="separator separator-bottom separator-skew">
                                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
                                </svg>
                            </div>
                        </section>
                    </div>
                    <section className="section section-lg pt-lg-0 mt--200">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="row row-grid">
                                        <div className="col-lg-4">
                                            <div className="card card-lift--hover shadow border-0">
                                                <div className="card-body py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="ni ni-check-bold"></i>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">졸업 플랜 관리</h6>
                                                    <p className="description mt-3">앞으로 어떤 과목을 들을지 자신만의 플랜을 만들어보세요. 여러
                                                        개의 플랜을 저장해 볼 수도 있습니다.</p>
                                                    <a href="#" className="btn btn-primary mt-4">졸업 플랜으로 가기</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card card-lift--hover shadow border-0">
                                                <div className="card-body py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-istanbul"></i>
                                                    </div>
                                                    <h6 className="text-success text-uppercase">졸업 관리</h6>
                                                    <p className="description mt-3">보고 싶은 졸업 요건과 현재 이수한 목록들을 확인하세요. 어떤
                                                        졸업 요건이 있는지 한눈에 보여줍니다.</p>
                                                    <a href="#" className="btn btn-success mt-4">졸업 관리 가기</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card card-lift--hover shadow border-0">
                                                <div className="card-body py-5">
                                                    <div
                                                        className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-planet"></i>
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">e 커리어 센터</h6>
                                                    <p className="description mt-3">e 커리어 센터에는 취직을 위해 많은 도움을 받을 수 있습니다.
                                                        지금 e 커리어 센터에 가서 상담을 신청해보세요.</p>
                                                    <a href="#" className="btn btn-warning mt-4">e 커리어 센터 가기</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section section-lg">
                        <div className="container">
                            <div className="row row-grid align-items-center">
                                <div className="col-md-6 order-md-2">
                                    <img src={promo1} className="img-fluid floating" alt="promo1"/>
                                </div>
                                <div className="col-md-6 order-md-1">
                                    <div className="pr-md-5">
                                        <div
                                            className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                            <i className="ni ni-settings-gear-65"></i>
                                        </div>
                                        <h3>나만의 플랜 만들기</h3>
                                        <p>원하는 졸업 요건을 선택하고, 자신만의 졸업 플랜을 만들어보세요. 앞으로 보낼 학교 생활을 상상하며 필수 과목들을 지워나가세요!</p>
                                        <ul className="list-unstyled mt-5">
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <div className="badge badge-circle badge-success mr-3">
                                                            <i className="ni ni-settings-gear-65"></i>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">수강해야할 필수 과목 확인 가능</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <div className="badge badge-circle badge-success mr-3">
                                                            <i className="ni ni-html5"></i>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">계획에 휴학 포함 가능</h6>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <div className="badge badge-circle badge-success mr-3">
                                                            <i className="ni ni-satisfied"></i>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-0">모든 조건이 충족되었는지 확인 가능</h6>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section bg-secondary">
                        <div className="container">
                            <div className="row row-grid align-items-center">
                                <div className="col-md-6">
                                    <div className="card bg-default shadow border-0">
                                        <img src={img1} className="card-img-top" alt="img1"/>
                                        <blockquote className="card-blockquote">
                                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 583 95" className="svg-bg">
                                                <polygon points="0,52 583,95 0,95" className="fill-default"/>
                                                <polygon points="0,42 583,95 683,0 0,95" opacity=".2"
                                                         className="fill-default"/>
                                            </svg>
                                            <h4 className="display-3 font-weight-bold text-white">e 커리어 센터</h4>
                                            <p className="lead text-italic text-white">e 커리어 센터 가면 많은 일들을 할 수 있습니다.
                                                글쓰기 상담 부터 시작해서 창업 멘토링까지. 한번 들어가서 확인해보세요.</p>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="pl-md-5">
                                        <div
                                            className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                            <i className="ni ni-settings"></i>
                                        </div>
                                        <h3>e 커리어 센터란</h3>
                                        <p className="lead">어쩌구 저쩌구 e 커리어 센터에 관한 커다란 주제 하나를 여기다가 적어주세요. </p>
                                        <p>그리고 이건 작은 주제입니다. 뭘 넣어야할지 저는 모르겠어요. 글쓴이 분들이 3명이나 계시잖아요.</p>
                                        <p>이것도 또 하나의 작은 주제입니다. 이제 뭘 할까요? 글쎄요~~ 이제 더 이상 적을 말도 없네요.</p>
                                        <a href="#" className="font-weight-bold text-warning mt-5">마지막 문구를 적어주세요.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section pb-0 bg-gradient-warning">
                        <div className="container">
                            <div className="row row-grid align-items-center">
                                <div className="col-md-6 order-lg-2 ml-lg-auto">
                                    <div className="position-relative pl-md-5">
                                        <img src={ill2} className="img-center img-fluid" alt="ill2"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="d-flex px-3">
                                        <div>
                                            <div
                                                className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                                <i className="ni ni-building text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h4 className="display-3 text-white">졸업 요건 확인하기</h4>
                                            <p className="text-white">글씨와 표로 이루어진 졸업 요건은 이제 그만! 이 페이지를 통해 클릭 몇 번으로 내가 보고
                                                싶은 졸업 요건을 확인할 수 있습니다!</p>
                                        </div>
                                    </div>
                                    <div className="card shadow shadow-lg--hover mt-5">
                                        <div className="card-body">
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div
                                                        className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-satisfied"></i>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-success">친구들의 수강 내역 확인</h5>
                                                    <p>지금까지 제대로 수강을 하였는지 궁금한 당신을 위한 기능! 익명으로 친구들이 어떻게 지금까지 수강했는지 확인하며
                                                        자신을 되돌아보세요!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shadow shadow-lg--hover mt-5">
                                        <div className="card-body">
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div
                                                        className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-active-40"></i>
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-warning">졸업 요건 한눈에 보기</h5>
                                                    <p>딱딱한 글씨로만 이루어진 졸업 요건 책자는 그만 보고 우리 사이트에서 졸업 요건을 확인하세요! 자신이 보고 싶은
                                                        내용만 볼 수 있습니다!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
                            </svg>
                        </div>
                    </section>
                    <section className="section section-lg">
                        <div className="container">
                            <div className="row row-grid justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <h2 className="display-3">우리 사이트가 마음에 드셨나요?
                                        <span className="text-success">마음에 드셨으면 바로 확인하세요!</span>
                                    </h2>
                                    <p className="lead">사이트 설명 마지막으로 어쩌구 저쩌구 수미일관법이 좋겠죠? 더 이상 나는 생각이 안 납니다. 하하하하 그래도 템플릿
                                        좋네요.</p>
                                    <div className="btn-wrapper">
                                        <a href="https://www.creative-tim.com/product/argon-design-system"
                                           className="btn btn-primary mb-3 mb-sm-0">회원가입하러 가기</a>
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

export default Landing;
