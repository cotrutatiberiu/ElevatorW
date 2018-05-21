import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Contact } from "pages/contact";
import { Home } from "pages/home";

export class ContactRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/contact" >Contact</Link>
                    <Route strict exact path="/contact" component={Contact} />

                    <Link to="/" >Home</Link>
                    <Route exact strict path="/" component={Home} />
                </div>
            </BrowserRouter>)
    }

};