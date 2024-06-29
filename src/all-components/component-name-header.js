import React from 'react';

export const ComponentNameHeader = React.forwardRef((props, ref) => {
    return (
        <div className='component-name-header' ref={ref}>
            <h3 className={'header-name'}>{props.menuName}</h3>
        </div>
    );
});