import React, { Component } from 'react';
import './styles/css/app.css';

import Routes from './routes/routes';

class App extends Component {
    render() {
        return (
            <div>
                <Routes />
            </div>
        );
    }
}

export default App;
