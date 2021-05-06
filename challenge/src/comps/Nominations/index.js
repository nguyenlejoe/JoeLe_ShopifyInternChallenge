import React from 'react';
import styled from 'styled-components';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

const NominationCont = styled.div`
    display:flex;
    flex:1.5;
    flex-direction:column;
    margin-left:2%;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding:25px;
`;

const NominationLabel = styled.label`
    margin-bottom:10px;
    font-size:20px;
    font-family: "SF Pro Display";
    font-weight:bold;
`;

const NominationOutput = styled.div`
    display:flex;
    flex-direction:column;
`;
const NominationContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;


const Nomination = ({content, language}) => {
    let langaugeMessage;
    console.log(language)
    
    switch (language) {
        case "French":
            langaugeMessage = {Message: "Nominations"}
            break;
        case "Mandarin Chinese":
            langaugeMessage = {Message: "提名作品"}
            break;
        case "Hindi":
            langaugeMessage = {Message: "नामांकन"}
            break;
        case "Spanish":
            langaugeMessage = {Message: "Nominaciones"}
            break;
        case "Russian":
            langaugeMessage = {Message: "Номинации"}
            break;
        default:
            break;
    }
    return (
    <NominationCont>
        <IntlProvider messages={langaugeMessage}  defaultLocale="en">
            <NominationLabel>
                <FormattedMessage
                    id="Message"
                    defaultMessage="Nominations"
                />
            </NominationLabel>
        </IntlProvider>
            <NominationContent>
                <NominationOutput>{content}</NominationOutput>
            </NominationContent>
    </NominationCont>
    );
}

Nomination.defaultProps = {

}

export default Nomination;