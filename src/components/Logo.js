import React from "react";

import logo from "pictures/1.jpg";


export class Logo extends React.Component {
    render() {
        return <img src={logo} alt="logo" id="logo-picture"/>
    }
}