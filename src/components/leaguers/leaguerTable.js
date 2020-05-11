import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Name, Photo, Team, Heroes } from "./leaguerRow";
import Loading from "../loading";

import axios from "axios";
import _ from "lodash";

class LeaguerTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: ["이름", "사진", "소속팀", "주영웅"],
            leaguers: [],
            counts: 0,
            page: this.props.match.params.num || 1,
            size: 10,
            isLoading: true,
        };
    }

    async componentDidMount() {
        const queryData = {
            size: this.state.size,
            page: this.state.page,
        };
        const response = await this.getLeaguerList(queryData);
        this.setState({
            leaguers: response.leaguers,
            counts: response.counts,
        });
    }

    // props또는 state 갱신 후 가장 마지막에 호출됨.
    // 무한 호출되는 case가 있음.
    async componentDidUpdate(prevProps, prevState) {
        if (this.state.isLoading) {
            const queryData = {
                size: this.state.size,
                page: this.state.page,
            };
            const response = await this.getLeaguerList(queryData);
            this.setState({
                leaguers: response.leaguers,
                counts: response.counts,
                isLoading: false,
            });
        }
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
        const loopCount = this.state.counts / this.state.size;
        const range = _.range(loopCount);

        return (
            <div className="pagination-div">
                <ul className="pagination-ul">
                    {range.map((num, index) => {
                        const pageNum = num + 1;
                        const url = `/leaguers/pages/${pageNum}`;
                        return (
                            <li key={index} className="pagination-li">
                                <Link
                                    className="no-underline"
                                    to={url}
                                    onClick={() => {
                                        this.setState({
                                            page: pageNum,
                                            isLoading: true,
                                        });
                                    }}
                                >
                                    {pageNum}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    render() {
        return this.state.isLoading ? (
            <Loading />
        ) : (
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

export default LeaguerTable;
