import React from 'react';
import {SideNavigationMenus} from "../../ui-components/miscellaneous/side-navigation-menus/side-navigation-menus";

export const SideMenuPreview = () => {
    const menus = ["Dashboard", "Events", "About", "Contact", "More"];
    const header = "My Cool Application";
    const onMenuClick = (menu, index) => {
        window.alert("You clicked " + menu + " at index " + index);
    }

    return (
        <div className='previews'>
            <div className='anything'
                 style={{background: 'white', display: "flex", flexDirection: 'row'}}
            >
                <SideNavigationMenus menus={menus} header={header} onMenuClick={onMenuClick}/>
                <a style={{textAlign: "center", marginTop: "20%", marginLeft: "20%", background:"white"}} href={"/Miscellaneous"}>
                    This is your application page

                </a>
            </div>
            <div className={'preview'}></div>
            <div className={'preview'}></div>
        </div>
    );
}