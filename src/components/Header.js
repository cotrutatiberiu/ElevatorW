import React from "react";
import { LanguageDropDown } from "./LanguageDropDown";
import { Button } from "react-bootstrap";

export class Header extends React.Component {
    render() {
        const { language, languageSet } = this.props;
        let dropDownTitle = language.menuButtons[language.menuButtons.length - 1];

        return (
            <div>
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