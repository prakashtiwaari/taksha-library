import {ALERTS, BADGES, INFO_ALERT, MISCELLANEOUS, MODALS} from "../constants";

export const getMenus = () => {
    return [
        ALERTS,
        MODALS,
        BADGES,
        MISCELLANEOUS
    ]
}

export const getAlertMenus = () => {
    return [
        INFO_ALERT
    ]
}