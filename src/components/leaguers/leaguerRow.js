import React, { Component } from 'react';
import '../../styles/css/leaguer.css';

import Util from '../../util/util';

import { Link } from 'react-router-dom';

export class Name extends Component {
    render() {
        return (
            <div className="name">
                <Link
                    className="no-underline"
                    to={`../../leaguers/detail/${this.props.id}`}
                >
                    {this.props.name}
                </Link>
            </div>
        );
    }
}

export class Photo extends Component {
    render() {
        return (
            <img
                className="photo"
                src={
                    this.props.url ||
                    process.env.PUBLIC_URL + '/imgs/leaguer/default.png'
                }
                alt="선수 이미지"
            ></img>
        );
    }
}

export class Team extends Component {
    render() {
        return <div className="team">{this.props.teamName}</div>;
    }
}

export class Heroes extends Component {
    setLeaguerMainHeroes = (heroArray) => {
        if (!heroArray) {
            return '없음';
        } else if (heroArray.length === 1) {
            return Util.setHeroName(heroArray[0]);
        } else if (heroArray.length > 1) {
            return `${Util.setHeroName(heroArray[0])} 외 ${
                heroArray.length - 1
            }`;
        }
    };

    render() {
        return (
            <div className="heroes">
                주영웅 : {this.setLeaguerMainHeroes(this.props.heroes)}
            </div>
        );
    }
}
