import React from 'react';

export class Contact extends React.Component {
    render() {
        const { contactInformations } = this.props.language;
        return (
            <div>
                <p>{contactInformations.phoneNumber}</p>
                <p>{contactInformations.email}</p>
            </div>
        )
    }
}


