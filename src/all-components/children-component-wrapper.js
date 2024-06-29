import React from 'react';
import {ALERTS, BADGES, MISCELLANEOUS, MODALS} from "../constants";
import {AlertsPreview} from "../preview-components/alerts/alerts-preview";
import {PreviewComponentWrapper} from "../preview-components/preview-component-wrapper";
import {SideMenuPreview} from "../preview-components/miscellaneous/side-menu-preview";

export const ChildrenComponentWrapper = (props) => {
    return (
        <>
            {
                (() => {
                    switch (props.menu) {
                        case ALERTS:
                            return <PreviewComponentWrapper component ={AlertsPreview} menu={ALERTS}/>;
                        case MODALS:
                            return <PreviewComponentWrapper component ={AlertsPreview} menu={ALERTS}/>;
                        case BADGES:
                            return <PreviewComponentWrapper component ={AlertsPreview} menu={ALERTS}/>;
                        case MISCELLANEOUS:
                            return <PreviewComponentWrapper component ={SideMenuPreview} menu={MISCELLANEOUS}/>;

                        default:
                            return "Created with love"
                    }
                })()
            }

        </>
    );
}