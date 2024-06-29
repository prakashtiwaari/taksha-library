import React from 'react';
import {SideMenus} from "../../all-components/side-menus";
import {getAlertMenus} from "../../utils/app-utils";

export const AlertsPage = (props) => {
    return (
        <div>
            <SideMenus menus = {getAlertMenus()}/>
        </div>
    );
}