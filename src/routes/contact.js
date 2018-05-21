import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Contact } from "pages/contact";

export class ContactRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/contact" component={Contact} />
            </BrowserRouter>)
    }

};