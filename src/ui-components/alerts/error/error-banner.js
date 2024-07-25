import React from 'react';
import './error-banner.css'
import crossIcon from '../../../resources/cross-banner.png'

const ErrorBanner = (props) => {
    const errorMessage = props.errorMessage ? props.errorMessage : 'Add your custom error message over here';
    const [open, setIsOpen] = React.useState(props.shouldDisplayError);

    const handleBannerOnClose = () => {
        setIsOpen(false);
    }

    return (
        open &&
        <div className='dismissible-error-banner'>
            <span>{errorMessage}</span>
            <img className='close-banner' src={crossIcon} alt='close' onClick={handleBannerOnClose}/>
        </div>
    );
}

export default ErrorBanner;