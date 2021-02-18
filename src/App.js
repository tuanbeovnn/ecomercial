import React, { Component } from 'react';
import Footer from './module/Footer';
import Header from './module/Header';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './routers/routes';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        {routes.map((route, index) => {
                            return (
                                <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                            )
                        })}
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
