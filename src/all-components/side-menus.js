import React from 'react';

export const SideMenus = (props) => {
    console.log(props.referencesHolder)
    const menuOnClickHandler = (menu, index) => {
        props.onClick(props.referencesHolder[menu], index);
    };

    const scrollToTop = () => {
        document.getElementById('takshaComponentsWrapper').scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className='drawerMenusWrapper'>
            <h4 className='drawerMenus' onClick={()=>scrollToTop()}>Getting Started</h4>
            {
                props.menus.map((menu, index) => {
                    return <p
                        className="drawerMenus"
                        onClick={() => menuOnClickHandler(menu, index)}
                    >{menu}</p>
                })
            }
        </div>
    );
}