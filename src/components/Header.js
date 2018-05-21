import React from "react";
import { LanguageDropDown } from "./LanguageDropDown";
import { Logo } from "./Logo";
import { Banner } from "./Banner";
import "styles/Header.css";
import { Routes } from "routes/index";

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
                    <Routes menuButtons={language.menuButtons} />
                    <LanguageDropDown key="lang" title={dropDownTitle} languageSet={languageSet} />
                </div>

            </div>
        )
    }
}