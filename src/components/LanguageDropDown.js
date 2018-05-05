import { SplitButton, MenuItem } from 'react-bootstrap';
import React from 'react';


export class LanguageDropDown extends React.Component {
    render() {
        return (
            <SplitButton title={this.props.title} id="test">
                <MenuItem eventKey="1" onSelect={this.props.languageSet}>English</MenuItem>
                <MenuItem eventKey="0" onSelect={this.props.languageSet}>Romanian</MenuItem>
            </SplitButton >
        )
    }
}