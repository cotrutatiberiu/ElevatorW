import React from "react";
import { LanguageDropDown } from "./LanguageDropDown";
import { Button } from "react-bootstrap";
import { Logo } from "./Logo";
import { Banner } from "./Banner";
import "styles/Header.css";


import { Home } from "pages/home/home";

export class Header extends React.Component {
    render() {
        const { language, languageSet } = this.props;
        let dropDownTitle = language.menuButtons[language.menuButtons.length - 1];

        return (
            <div>
                <div id="header">
                    <div id="logo-side" >
                        <Logo />
                        <p>logo and text</p>
                    </div>
                    <div id="banner-side" >
                        <p>banner and stuff</p>
                        <Banner />
                    </div>
                    <div id="text-side"><h1>something something here </h1></div>
                </div>
                <hr />
                
                <div id="top-navbar">
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

            </div>
        )
    }
}