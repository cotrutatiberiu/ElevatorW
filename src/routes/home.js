import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home } from "pages/home";

export class HomeRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/" >Home</Link>
                    <Route exact strict path="/" component={Home} />
                </div>
            </BrowserRouter>)
    }

};