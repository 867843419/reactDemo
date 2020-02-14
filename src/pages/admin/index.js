import React from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavLeft from '../../components/NavLeft'
import './index.less'

export default class App extends React.Component {

  render(){
    return (
      <Row>
        <Col span={4}>
          <NavLeft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Row>
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }

}
