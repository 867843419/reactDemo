import React from 'react'
import { Row, Col } from 'antd'
import Util from '../../utils/utils'
import './index.less'

export default class Header extends React.Component {

    state = {
        userName:'',
        stsTime:''
    }

    componentWillMount(){
        this.setState({
            userName:'董育康',
            stsTime:''
        })
        setInterval(() => {
            let stsTime = Util.formateDate(new Date().getTime());
            this.setState({
                stsTime
            })
        },1000)
    }

    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>
                            欢迎，{this.state.userName}
                        </span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.stsTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }

}