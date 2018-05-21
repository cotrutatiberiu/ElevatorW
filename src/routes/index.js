import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home, Ascensors, Company, Maintenance, Advice, Contact } from "pages/index";



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
                    <li><Link to="/contact" >{menuButtons[1]}</Link>
                        <Route strict exact path="/contact" render={() => <Maintenance language={language} />} />
                    </li>
                    <li>
                        <Link to="/" >{menuButtons[2]}</Link>
                        <Route exact strict path="/" render={() => <Home language={language} />} />
                    </li>
                    <li>
                        <Link to="/" >{menuButtons[3]}</Link>
                        <Route exact strict path="/" render={() => <Home language={language} />} />
                    </li>
                    <li>
                        <Link to="/" >{menuButtons[4]}</Link>
                        <Route exact strict path="/" render={() => <Home language={language} />} />
                    </li>
                    <li>
                        <Link to="/" >{menuButtons[5]}</Link>
                        <Route exact strict path="/" render={() => <Home language={language} />} />
                    </li>
                    <li>
                        <Link to="/" >{menuButtons[6]}</Link>
                        <Route exact strict path="/" render={() => <Contact language={language} />} />
                    </li>

                </ul>
            </BrowserRouter>)
    }

};