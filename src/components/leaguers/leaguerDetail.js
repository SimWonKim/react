import React, { Component } from "react";
import "../../styles/css/leaguerDetail.css";

import axios from "axios";

import Loading from "../loading";

import Util from "../../util/util";

class LeaguerDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: {},
            isLoading: true,
        };
    }

    async componentDidMount() {
        const leaguerDetail = await this.getLeaguerDetail();
        this.setState({ detail: leaguerDetail.leaguer, isLoading: false });
    }

    async getLeaguerDetail() {
        const id = this.props.match.params.num;
        const url = `${process.env.REACT_APP_SERVER_URL}/leaguers/${id}`;
        const result = await axios.get(url);
        return result.data;
    }

    setHeroName(heroName) {
        if (heroName) {
            if (Array.isArray(heroName)) {
                return heroName
                    .map((name) => Util.setHeroName(name))
                    .join(", ");
            } else {
                return Util.setHeroName(heroName);
            }
        } else {
            return "없음";
        }
    }

    render() {
        return this.state.isLoading ? (
            <Loading />
        ) : (
            <div className="background">
                <img
                    className="profile-image"
                    src={
                        this.state.detail
                            ? this.state.detail.leaguer.photo
                            : `${process.env.PUBLIC_URL}/imgs/leaguer/default.png`
                    }
                    alt="선수 이미지"
                />
                <table className="detail-table">
                    <tbody>
                        <tr className="detail-table-tr">
                            <th className="detail-table-th">이름</th>
                            <th className="detail-table-th">
                                {this.state.detail.leaguer.name || "선수이름"}
                            </th>
                        </tr>
                        <tr className="detail-table-tr">
                            <th className="detail-table-th">실명</th>
                            <th className="detail-table-th">
                                {`${this.state.detail.familyName} ${this.state.detail.givenName}` ||
                                    "선수이름"}
                            </th>
                        </tr>
                        <tr className="detail-table-tr">
                            <th className="detail-table-th">주영웅</th>
                            <th className="detail-table-th">
                                {this.setHeroName(
                                    this.state.detail.leaguer.mainHeroes
                                ) || "주 영웅 목록"}
                            </th>
                        </tr>
                        <tr className="detail-table-tr">
                            <th className="detail-table-th">소속팀</th>
                            <th className="detail-table-th">
                                <div>
                                    <img
                                        className="logo"
                                        src={
                                            this.state.detail.team.logo ||
                                            `${process.env.PUBLIC_URL}/imgs/logo/overwatch_logo.png`
                                        }
                                        alt="팀로고"
                                    />
                                    {this.state.detail.team.name ||
                                        "소속팀 이름"}
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LeaguerDetail;
