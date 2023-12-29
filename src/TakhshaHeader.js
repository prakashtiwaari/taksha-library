import React from 'react';
import { FaStaffSnake } from "react-icons/fa6";

export const TakhshaHeader = (props) => {
    return (
        <div className='takshaHeader'>
            <div>
                <FaStaffSnake size={'large'}/>
            </div>
            <div className='docs-link'>
                <u>Docs</u>
            </div>

        </div>
    );
}
