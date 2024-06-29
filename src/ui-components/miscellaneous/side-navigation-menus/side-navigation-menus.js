import React from 'react';
import '../side-navigation-menus/side-navigation-menus.css'

const SideNavigationMenus = (props) => {
    const menus = props.menus;
    const header = props.header;

    const onClickHandler = (menu, index) => {
        props.onMenuClick(menu, index);
    }

    return (
        <div className='taksha-side-navigation-menus-wrapper'>
            <div className='taksha-side-menu-header'>{header}</div>
            {
                menus.map((menu, index) => {
                    return <>
                        <div className='taksha-side-menu' onClick={() => onClickHandler(menu, index)}>{menu}</div>
                    </>
                })
            }
        </div>
    );
}

export default SideNavigationMenus;