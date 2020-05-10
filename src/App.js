import React, { Component } from "react";
import "./styles/css/app.css";
import LeaguerTable from "./components/leaguers/leaguerTable";

class App extends Component {
    render() {
        return (
            <div>
                <LeaguerTable />
            </div>
        );
    }
}

export default App;
