import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './NotFound';
import SingleProduct from './SingleProduct';

class Router extends React.Component{
   render(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
                <Route path="/product/:slug">
                    <SingleProduct/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
        )
   }
}

export default Router

if (document.getElementById('example')) {
    ReactDOM.render(<Router />, document.getElementById('example'));
}
