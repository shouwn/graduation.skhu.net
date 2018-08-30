import React from 'react';
import '../../assets/css/argon.css';
import '../../assets/css/argon.min.css';
import '../../assets/vendor/nucleo/css/nucleo.css';
import {Progress} from 'reactstrap';
import { Button, Collapse } from "reactstrap";
import CardFooter from "../../components/Card/CardFooter";
import classes from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import Icon from "@material-ui/core/es/Icon/Icon";
import Table from "../../components/Table/Table";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import CardBody from "../../components/Card/CardBody";

class InfoCard extends React.Component {
    constructor(props){
        super();
        this.state = {
            info: props.info,
            gauge: props.gauge,
            footer: props.footer,
            footerTable: false,
            xs: props.xs, sm: props.sm, md: props.md
        };
    }

    onToggleFooterTable(){
        this.setState({footerTable: !this.state.footerTable});
    }

    render() {
        let percentage = Math.min(Math.floor(this.state.info.value / this.state.info.division * 100), 100);

        let tableDataIsZero = this.state.info.tableData && this.state.info.tableData.length === 0;

        let gauge = !this.state.gauge ? "" :
            <div>
                <div className="progress-info">
                    <div className="progress-label"></div>
                    <div className="progress-percentage">
                        <span>{`${percentage}%`}</span>
                    </div>
                </div>
                <Progress value = {percentage}/>
            </div>;

        let footer = !this.state.footer ? "" :
            <CardFooter plain>
                <div className={classes.stats}>
                    <Button color={this.props.iconColor} disabled={tableDataIsZero} onClick={this.onToggleFooterTable.bind(this)}>
                        <div style={{display: 'inline-block'}}>{`필수 과목 ${tableDataIsZero ? "완료" : "확인"}`}</div>
                        {tableDataIsZero ?
                            <Icon style={{verticalAlign: "bottom", marginLeft: "3px"}}>check_circle_outline</Icon> : ""}
                    </Button>
                    <Collapse isOpen={this.state.footerTable}>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={this.props.tableHead}
                            tableData={this.state.info.tableData}
                        />
                    </Collapse>
                </div>
            </CardFooter>

        return(
            <GridItem xs={this.state.xs} sm={this.state.sm} md={this.state.md}>
                <Card>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="info">
                            <div>{this.state.info.category}</div>
                        </CardIcon>
                        <h3 className={classes.cardTitle}>
                            <small>{this.state.info.unit}</small>
                            {this.state.info.value ? ` ${this.state.info.value}/${this.state.info.division}` : ""}
                        </h3>
                    </CardHeader>
                    <CardBody>
                        {gauge}
                    </CardBody>
                    {footer}
                </Card>
            </GridItem>
        )
    }
}

InfoCard.defaultProps = {
    tableHead: ["과목코드", "교과목명", "학점"],
    iconColor: "primary"
}

export default InfoCard;
