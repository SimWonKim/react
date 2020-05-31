import React, { Component } from 'react';
import '../../styles/css/leaguerDetail.css';

import axios from 'axios';

import Loading from '../loading';

import Util from '../../util/util';

class LeaguerDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: {},
            stats: {},
            statsRank: {},
            isLoading: true,
        };
    }

    async componentDidMount() {
        const response = await this.getLeaguerDetail();
        this.setState({
            detail: response.leaguer,
            stats: response.stats,
            statsRank: response.statRank,
            isLoading: false,
        });
    }

    async getLeaguerDetail() {
        const id = this.props.match.params.num;
        const url = `${process.env.REACT_APP_BASE_URL}/leaguers/${id}`;
        const result = await axios.get(url);
        return result.data;
    }

    setHeroName(heroName) {
        if (heroName) {
            if (Array.isArray(heroName)) {
                return heroName
                    .map((name) => Util.setHeroName(name))
                    .join(', ');
            } else {
                return Util.setHeroName(heroName);
            }
        } else {
            return '없음';
        }
    }

    numberFixUnderTwo(value) {
        return value > 0 ? Number.parseFloat(value).toFixed(2) : '-';
    }

    secondsToHourAndMinutes(seconds) {
        const hour = parseInt(seconds / 3600);
        const min = parseInt((seconds % 3600) / 60);

        if (hour === 0 && min === 0) {
            return '-';
        } else {
            return `${hour}시간 ${min}분`;
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
                                {this.state.detail.leaguer.name || '선수이름'}
                            </th>
                        </tr>
                        <tr className="detail-table-tr">
                            <th className="detail-table-th">실명</th>
                            <th className="detail-table-th">
                                {`${this.state.detail.familyName} ${this.state.detail.givenName}` ||
                                    '선수이름'}
                            </th>
                        </tr>
                        <tr className="detail-table-tr">
                            <th className="detail-table-th">주영웅</th>
                            <th className="detail-table-th">
                                {this.setHeroName(
                                    this.state.detail.leaguer.mainHeroes
                                ) || '주 영웅 목록'}
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
                                        '소속팀 이름'}
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <div className="text-box">스탯정보</div>
                <table className="detail-table">
                    <tbody>
                        <tr className="detail-table">
                            <th className="detail-table-th">
                                10분당 평균 처치
                            </th>
                            <th className="detail-table-th">
                                {this.numberFixUnderTwo(
                                    this.state.stats.all
                                        .eliminations_avg_per_10m
                                )}
                            </th>
                        </tr>
                        <tr className="detail-table">
                            <th className="detail-table-th">
                                10분당 평균 죽음
                            </th>
                            <th className="detail-table-th">
                                {this.numberFixUnderTwo(
                                    this.state.stats.all.deaths_avg_per_10m
                                )}
                            </th>
                        </tr>
                        <tr className="detail-table">
                            <th className="detail-table-th">
                                10분당 평균 딜량
                            </th>
                            <th className="detail-table-th">
                                {this.numberFixUnderTwo(
                                    this.state.stats.all.hero_damage_avg_per_10m
                                )}
                            </th>
                        </tr>
                        <tr className="detail-table">
                            <th className="detail-table-th">
                                10분당 평균 힐량
                            </th>
                            <th className="detail-table-th">
                                {this.numberFixUnderTwo(
                                    this.state.stats.all.healing_avg_per_10m
                                )}
                            </th>
                        </tr>
                        <tr className="detail-table">
                            <th className="detail-table-th">
                                10분당 평균 궁극기 충전 횟수
                            </th>
                            <th className="detail-table-th">
                                {this.numberFixUnderTwo(
                                    this.state.stats.all
                                        .ultimates_earned_avg_per_10m
                                )}
                            </th>
                        </tr>
                        <tr className="detail-table">
                            <th className="detail-table-th">
                                10분당 평균 막타 처치
                            </th>
                            <th className="detail-table-th">
                                {this.numberFixUnderTwo(
                                    this.state.stats.all.final_blows_avg_per_10m
                                )}
                            </th>
                        </tr>
                        <tr className="detail-table">
                            <th className="detail-table-th">총 출전 시간</th>
                            <th className="detail-table-th">
                                {this.secondsToHourAndMinutes(
                                    this.state.stats.all.time_played_total
                                )}
                            </th>
                        </tr>
                    </tbody>
                </table>

                <div className="text-box">영웅별 스탯</div>
            </div>
        );
    }
}

export default LeaguerDetail;
