import React from 'react';
import '../styles/preview-wrapper.css';
import {useNavigate} from 'react-router-dom';

export const PreviewComponentWrapper = (props) => {
    const navigate = useNavigate();
    const ComponentToPreview = props.component;

    const handleOnClick = () => {
        navigate(`/${props.menu}`)
    }

    return (
        <div className='preview-wrapper'>
            <ComponentToPreview/>
            <p onClick={handleOnClick}>
                view more
            </p>
        </div>
    );
}