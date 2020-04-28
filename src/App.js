import React, { Component } from "react";
import { Name, Photo, Team, Heroes } from "./components/leaguer";
import "./styles/css/app.css";
import Loading from "./components/loading";

import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ["이름", "사진", "소속팀", "주영웅"],
            leaguers: [],
        };
    }

    // componentWillMount() {} deprecated됨.

    async componentDidMount() {
        const leaguers = await this.getLeaguerList();
        this.setState({ leaguers: leaguers });
    }

    getLeaguerList = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/leaguers`;
        const result = await axios.get(url);
        return result.data.leaguers;
    };

    renderTableColums() {
        return (
            <tr className="leaguer-table-column-tr">
                {this.state.columns.map((column, index) => {
                    return (
                        <th className="leaguer-table-column-th" key={index}>
                            {column}
                        </th>
                    );
                })}
            </tr>
        );
    }

    renderTableData() {
        return this.state.leaguers.map((leaguer, index) => {
            return (
                <tr className="leaguer-table-tr" key={index}>
                    <th className="leaguer-table-th">
                        <Name name={leaguer.name} id={leaguer.id}></Name>
                    </th>
                    <th className="leaguer-table-th">
                        <Photo url={leaguer.photo}></Photo>
                    </th>
                    <th className="leaguer-table-th">
                        <Team teamName={leaguer.teamName}></Team>
                    </th>
                    <th className="leaguer-table-th">
                        <Heroes heroes={leaguer.mainHeroes}></Heroes>
                    </th>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table className="leaguer-table">
                    <tbody>
                        {this.renderTableColums()}
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
