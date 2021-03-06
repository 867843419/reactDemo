import React from 'react'
import './index.less'
import MenuList from '../../config/menuConfig'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd';
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuList);

        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map(item => {
            if(item.children){
                return (
                    <SubMenu
                        title={item.title}
                        key={item.key}
                    >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                ) 
            }
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render(){
        return (
            <div className="nav-left">
                <div className="nav-left-logo">
                    <img src="/assets/logo-ant.svg" className="img" alt="" />
                    <div className="title">react demo</div>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }

}