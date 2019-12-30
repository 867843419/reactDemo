import React from 'react';
import './index.less'
import { Button } from 'antd'

export default class Admin extends React.Component {

    render () {
        return (
            <div className="box">
                hello world react
                <Button>点击一下</Button>
                <a href="http://wpa.qq.com/msgrd?v=3&uin=1819879180&site=qq&menu=yes">
                    <img border="0" src="http://wpa.qq.com/pa?p=2::53" alt="hello world" title="hello world"/>
                    QQ咨询
                </a>
            </div>
        )
    }

}