import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "pages/home";

export class HomeRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </BrowserRouter>)
    }

};