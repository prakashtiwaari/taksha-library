import React from 'react';
import {useNavigate} from 'react-router-dom'

export const SearchComponent = () => {
        const [searchString, setSearchString] = React.useState('');
        const navigate = useNavigate()

        const handleOnChange = (event) => {
            return setSearchString(event.target.value);
        }

        const goToAllUIComponentsPage = () => {
            navigate('/all-taksha-components')
        };

        return (
            <div className='search-taksha-component'>
                <input
                    className='search-input'
                    type='text'
                    value={searchString}
                    onChange={(event) => handleOnChange(event)}
                    placeholder={'  search taksha component'}
                />
                <p
                    className='view-all-link'
                    onClick={() => goToAllUIComponentsPage()}>
                    view all components
                </p>
            </div>
        );
    }
;