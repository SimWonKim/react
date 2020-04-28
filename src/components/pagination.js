import React, { Component } from "react";
import _ from "lodash";
import "../styles/css/pagination.css";

class PageNation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: this.props.counts, // 전체 row수
            size: this.props.size, // 한번에 보여줄 row 갯수
        };
    }

    // getDerivedStateFromProps은 componentWillReceiveProps의 대체 역할로
    // 작성된 메서드로 컴포넌트가 인스턴스화 된 후, 새 props를 받았을 때 호출된다.
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.counts !== nextProps.counts) {
            return { counts: nextProps.counts };
        }

        return null;
    }

    renderPageNations = () => {
        const loopCount = this.state.counts / this.state.size + 1;
        const range = _.range(loopCount);

        return range.map((num, index) => {
            return (
                <li key={index} className="li">
                    {num + 1}
                </li>
            );
        });
    };

    render() {
        return (
            <div>
                <ul className="ul">{this.renderPageNations()}</ul>
            </div>
        );
    }
}

export default PageNation;
