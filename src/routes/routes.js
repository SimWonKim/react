import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LeaguerTable from "../components/leaguers/leaguerTable";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/leaguers/pages/:num"
                    component={LeaguerTable}
                />
                <Redirect path="*" to="/leaguers/pages/1" />
            </Switch>
        );
    }
}

export default Routes;
