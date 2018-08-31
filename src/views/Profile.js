import React from 'react';
import '../assets/css/argon.css';
import '../assets/css/argon.css?v=1.0.1';
import '../assets/css/argon.min.css';
import '../assets/vendor/nucleo/css/nucleo.css';
import '../assets/img/brand/favicon.png';
import '../assets/vendor/font-awesome/css/font-awesome.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import GridContainer from "../components/Grid/GridContainer";
import InfoCard from "./component/InfoCard";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class Profile extends React.Component {
    constructor(props){
        super();
        //axios 로 서버에서 사용자 데이터 및 해당 전공 과목 데이터 요청
        this.category = {
            inline: ["채플, 사회봉사"],
            block: ["교양", "전공"]
        }
        this.state = {infoCards: [
                {
                    info:
                        {
                            category: "채플",
                            unit: "",
                            value: 2,
                            division:2
                        },
                    gauge: false,
                    footer: false,
                    xs: 4, sm: 4, md:4
                },
                {
                    info:
                        {
                            category: "과정지도",
                            unit: "",
                            value: 5,
                            division: 6
                        },
                    gauge: false,
                    footer: false,
                    xs: 4, sm: 4, md:4
                },
                {
                    info:
                        {
                            category: "사회봉사",
                            unit: "이수"
                        },
                    gauge: false,
                    footer: false,
                    xs: 4, sm: 4, md:4
                },
                {
                    info:
                        {
                            category: "교양",
                            unit: "학점",
                            value: 34,
                            division:32,
                            tableData: [
                            ]
                        },
                    gauge: true,
                    footer: true,
                    xs: 12, sm: 12, md:12
                },
                {
                    info:
                        {
                            category: "전공",
                            unit: "학점",
                            value: 62,
                            division:75,
                            tableData: [
                                [ "VI00002" , "Python 프로그래밍" , "3"] ,
                                [ "IC00020" , "웹페이지구축Ⅰ" , "3"] ,
                                [ "IC00021" , "자료구조론" , "3"] ,
                                [ "IC00005" , "운영체제론" , "3"]
                            ]
                        },
                    gauge: true,
                    footer: true,
                    xs: 12, sm: 12, md:12
                },
                {
                    info:
                        {
                            category: "전체 학점",
                            unit: "학점",
                            value: 96,
                            division: 130
                        },
                    gauge: true,
                    xs: 12, sm: 12, md:12
                }
            ]
        };
    }
    render() {
        let infoCards = this.state.infoCards.map((infoCard, index) =>
            <InfoCard key={index} info={infoCard.info} gauge={infoCard.gauge} footer={infoCard.footer}
                      xs={infoCard.xs} sm={infoCard.sm} md={infoCard.md}/>
        )
        return(
            <div>
                <Header/>
                <main className="profile-page">
                    <section className="section-profile-cover section-shaped my-0">
                        <div className="shape shape-style-1 shape-primary alpha-4">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="separator separator-bottom separator-skew">
                            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
                            </svg>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="card card-profile shadow mt--300">
                                <div className="px-4">

                                    <div className="text-center mt-5">
                                        <h3>서종현
                                            <span className="font-weight-light">, 201332017</span>
                                        </h3>
                                        <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>3학년 2학기
                                        </div>
                                    </div>
                                    {/* 여기서 부터 내용 */}
                                    <div style={{margin: "auto", width: "600px", marginTop: "40px", marginBottom: "30px"}}>
                                        <div style={{marginBottom: "40px"}}>
                                            <GridContainer>
                                                {infoCards}
                                            </GridContainer>
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

export default Profile;
