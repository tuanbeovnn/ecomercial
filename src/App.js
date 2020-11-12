import React, { Component } from 'react';
import Footer from './module/Footer';
import Header from './module/Header';
import Home from './module/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;
