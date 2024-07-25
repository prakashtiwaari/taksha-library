import React from 'react';
import './info-banner.css'

const InfoBanner = (props) => {
    const warningMessage = props.warningMessage ? props.warningMessage : 'Add your custom error message over here';
    const [open, setIsOpen] = React.useState(props.shouldDisplayWarning);

    const handleBannerOnClose = () => {
        setIsOpen(false);
    }

    return (
        open ?
        <div className='dismissible-info-banner'>
            <span>{warningMessage}</span>
            <span className='close-banner' onClick={handleBannerOnClose}>X</span>
        </div> :
            <></>
    );
}

export default InfoBanner;