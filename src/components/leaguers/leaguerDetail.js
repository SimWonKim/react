import React, { Component } from "react";
import "../../styles/css/leaguerDetail.css";

import axios from "axios";

class LeaguerDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leaguer: {},
        };
    }

    async componentDidMount() {
        const leaguerDetail = await this.getLeaguerDetail();
        this.setState({ leaguer: leaguerDetail.leaguer });
    }

    async getLeaguerDetail() {
        const url = `${process.env.REACT_APP_SERVER_URL}/leaguers/${this.props.id}`;
        const result = await axios.get(url);
        return result.data;
    }

    render() {
        return (
            <div className="background">
                <img
                    className="profile-image"
                    src={
                        this.state.leaguer.player
                            ? this.state.leaguer.player.headshot
                            : process.env.PUBLIC_URL +
                              "/imgs/leaguer/default.png"
                    }
                    alt="선수 이미지"
                />
            </div>
        );
    }
}

export default LeaguerDetail;
