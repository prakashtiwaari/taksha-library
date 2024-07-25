import React from 'react';
import './warning-banner.css'

const WarningBanner = (props) => {
    const warningMessage = props.warningMessage ? props.warningMessage : 'Add your custom error message over here';
    const [open, setIsOpen] = React.useState(props.shouldDisplayWarning);

    const handleBannerOnClose = () => {
        setIsOpen(false);
    }

    return (
        open ?
        <div className='dismissible-warning-banner'>
            <span>{warningMessage}</span>
            <span className='close-banner' onClick={handleBannerOnClose}>X</span>
        </div> :
            <></>
    );
}

export default WarningBanner;