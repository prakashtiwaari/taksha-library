import React from 'react';

export const ChildrenComponentWrapper = (props) => {
    return (
        <>
            {
                (() => {
                    switch (props.menu) {
                        case 'Modals':
                            return <div>Hey modal</div>;

                        default:
                            return "Created with love"
                    }
                })()
            }

        </>
    );
}