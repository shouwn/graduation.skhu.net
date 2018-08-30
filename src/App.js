import React from 'react';
import GridContainer from "./components/Grid/GridContainer";
import InfoCard from "./views/component/InfoCard"

class App extends React.Component {
    constructor(props){
        super();
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
        let infoCards = this.state.infoCards.map((infoCard) =>
            <InfoCard info={infoCard.info} gauge={infoCard.gauge} footer={infoCard.footer}
                      xs={infoCard.xs} sm={infoCard.sm} md={infoCard.md}/>
        )
        return(
            <div style={{margin: "auto", width: "600px"}}>
                <div style={{textAlign: "center", marginTop: "30px", marginBottom: "30px"}}>
                    <h2>소프트웨어공학과: 전공심화 과정</h2>
                </div>
                <div>
                    <GridContainer>
                        {infoCards}
                    </GridContainer>
                </div>
            </div>
        )
    }
}

export default App;
