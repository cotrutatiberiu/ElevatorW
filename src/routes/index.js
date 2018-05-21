import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Contact } from "pages/contact";
import { Home } from "pages/home";

export class Routes extends React.Component {
    render() {
        const { menuButtons, language } = this.props;
        return (
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/" >{menuButtons[0]}</Link>
                        <Route exact strict path="/" render={() => <Home language={language} />} />
                    </li>
                    <li><Link to="/contact" >{menuButtons[4]}</Link>
                        <Route strict exact path="/contact" render={() => <Contact language={language} />} />
                    </li>
                </ul>
            </BrowserRouter>)
    }

};