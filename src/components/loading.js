import React, { Component } from 'react';
import '../styles/css/loading.scss';

class Loading extends Component {
    render() {
        return (
            <div className="loader">
                <ul className="hexagon-container">
                    <li className="hexagon hex_1"></li>
                    <li className="hexagon hex_2"></li>
                    <li className="hexagon hex_3"></li>
                    <li className="hexagon hex_4"></li>
                    <li className="hexagon hex_5"></li>
                    <li className="hexagon hex_6"></li>
                    <li className="hexagon hex_7"></li>
                </ul>
            </div>
        );
    }
}

export default Loading;
