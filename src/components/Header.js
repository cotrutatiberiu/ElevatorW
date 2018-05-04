import React from "react";
import { LanguageDropDown } from "./LanguageDropDown";
import { Button } from "react-bootstrap";

export class Header extends React.Component {
    render() {
        console.log(this.props.language);
        return (
            <div>
                {
                    this.props.language.menuButtons.map((data, index) => <Button key={index}>{data}</Button>)
                }
                <LanguageDropDown />
            </div>
        )
    }
}