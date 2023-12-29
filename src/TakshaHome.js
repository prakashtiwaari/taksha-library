import React from 'react';
import {TakhshaHeader} from "./TakhshaHeader";
import {TakshaHomeBanner} from "./TakshaHomeBanner";
import {SearchComponent} from "./SearchComponent";

export const TakshaHome = () => {
    return (
        <div className="taksha-provider">
            <TakhshaHeader/>
            <TakshaHomeBanner/>
            <SearchComponent/>
        </div>
    );
}