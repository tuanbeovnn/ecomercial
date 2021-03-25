import React, { Component } from 'react';
import Footer from './module/Footer';
import Header from './module/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes, routesAdmin } from './routers/routes';
import AdminPage from './components/admin/AdminPage';

class App extends Component {
    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/admin">
                        <AdminPage>
                            <Switch>
                                {routesAdmin.map((route, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={"/admin" + route.path}
                                            exact={route.exact}
                                            component={route.main}
                                            
                                        />
                                    )
                                })}
                            </Switch>
                        </AdminPage>

                    </Route>

                    <Route path="/">
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
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
