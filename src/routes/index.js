import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Contact } from "pages/contact";
import { Home } from "pages/home";

export class Routes extends React.Component {
    render() {
        const { menuButtons } = this.props;
        return (
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/" >{menuButtons[0]}</Link>
                        <Route exact strict path="/" component={Home} />
                    </li>
                    <li><Link to="/contact" >{menuButtons[4]}</Link>
                        <Route strict exact path="/contact" component={Contact} />
                    </li>
                </ul>
            </BrowserRouter>)
    }

};