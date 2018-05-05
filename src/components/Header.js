import React from "react";
import { LanguageDropDown } from "./LanguageDropDown";
import { Button } from "react-bootstrap";
import {Logo} from "./Logo";
import {Banner } from "./Banner";

export class Header extends React.Component {
    render() {
        const { language, languageSet } = this.props;
        let dropDownTitle = language.menuButtons[language.menuButtons.length - 1];

        return (
            <div>
                <div className="header">
                <Logo className="logo"/>
                <Banner className="banner"/>
                </div>
                {
                    language.menuButtons.map((data, index) => {
                        if (index !== language.menuButtons.length - 1) {
                            return <Button key={index}>{data}</Button>
                        } else {
                            return <LanguageDropDown key="lang" title={dropDownTitle} languageSet={languageSet} />
                        }
                    })
                }

            </div>
        )
    }
}