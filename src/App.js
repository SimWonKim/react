import React, { Component } from "react";
import { useLocation } from "react-router-dom";

import { Name, Photo, Team, Heroes } from "./components/leaguer";
import PageNation from "./components/pagination";

import "./styles/css/app.css";

import axios from "axios";

class App extends Component {
    render() {
        return (
            <div>
                <LeaguerTable></LeaguerTable>
            </div>
        );
    }
}

export default App;

class LeaguerTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: ["이름", "사진", "소속팀", "주영웅"],
            leaguers: [],
            counts: 0,
            page: 1,
            size: 10,
        };
    }

    async componentDidMount() {
        const queryData = {
            size: this.state.size,
            page: this.state.page,
        };
        const response = await this.getLeaguerList(queryData);
        this.setState({ leaguers: response.leaguers, counts: response.counts });
    }

    getLeaguerList = async (query) => {
        const url = `${process.env.REACT_APP_SERVER_URL}/leaguers?page=${query.page}&size=${query.size}`;
        const result = await axios.get(url);
        return result.data;
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

    renderPageNation() {
        return (
            <PageNation
                counts={this.state.counts}
                size={this.state.size}
            ></PageNation>
        );
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
                {this.renderPageNation()}
            </div>
        );
    }
}
