import { SplitButton, MenuItem } from 'react-bootstrap';
import React from 'react';


export class LanguageDropDown extends React.Component {
    render() {
        return (
            <SplitButton title="Language" id="test">
                <MenuItem eventKey="1">English</MenuItem>
                <MenuItem eventKey="2">Romanian</MenuItem>
            </SplitButton>
        )
    }
}