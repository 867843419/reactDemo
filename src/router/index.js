import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Login from '../pages/login/index'
import Admin from '../pages/admin/index'
import Common from '../pages/common/index'
import NoMatch from '../pages/404/index'
import Home from '../pages/home/index'
import Buttons from '../pages/ui/buttons'
import Modals from '../pages/ui/modals'
import Loadings from '../pages/ui/loadings'
import Notice from '../pages/ui/notice'
import Messages from '../pages/ui/messages'
import Tabs from '../pages/ui/tabs'
import Gallery from '../pages/ui/gallery'
import Carousel from '../pages/ui/carousel'


export default class Router extends React.Component {

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/common" component={Common}/>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Redirect to="/home" />
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }

}