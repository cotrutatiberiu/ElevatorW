import { SplitButton, MenuItem } from 'react-bootstrap';
import React from 'react';


export class LanguageDropDown extends React.Component {
    render() {
        return (
            <SplitButton title="Dropdown right">
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
        )
    }
}