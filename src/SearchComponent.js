import React from 'react';
import {useNavigate} from 'react-router-dom'

export const SearchComponent = () => {
        const [searchString, setSearchString] = React.useState('');
        const navigate = useNavigate()

        const handleOnChange = (event) => {
            return setSearchString(event.target.value);
        }

        const goToAllUIComponentsPage = (queryParam) => {
            let allTakshaComponentUrl = '/all-taksha-components';

            if(Boolean(queryParam)) {
                allTakshaComponentUrl = allTakshaComponentUrl.concat(`?${queryParam}`);
            }
            navigate(allTakshaComponentUrl);
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
                <button
                    className='get-started-button'
                    onClick={() => goToAllUIComponentsPage('gettingStarted=Y')}
                >
                    Get Started
                </button>
                <p
                    className='view-all-link'
                    onClick={() => goToAllUIComponentsPage()}>
                    view all components
                </p>
            </div>
        );
    }
;