import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LeaguerTable from "../components/leaguers/leaguerTable";
import LeaguerDetail from "../components/leaguers/leaguerDetail";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/leaguers/pages/:num"
                    component={LeaguerTable}
                />
                <Route
                    exact
                    path="/leaguers/detail/:num"
                    component={LeaguerDetail}
                />
                <Redirect path="*" to="/leaguers/pages/1" />
            </Switch>
        );
    }
}

export default Routes;
