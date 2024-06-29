import React, {useRef} from 'react';
import '../styles/taksha-component.css';
import {SideMenus} from "./side-menus";
import {ComponentNameHeader} from "./component-name-header";
import {getMenus} from "../utils/app-utils";
import {ChildrenComponentWrapper} from "./children-component-wrapper";
import {GettingStarted} from "../getting-started";
import {useNavigate} from "react-router-dom";

export const AllTakshaComponentProvider = () => {
    let referencesHolder = {};
    const navigate = useNavigate();
    const menus = getMenus();
    const [searchString, setSearchString] = React.useState('');
    const handleSearch = (event) => {
        setSearchString(event.target.value);
    }

    const ref = useRef(null);

    const buildReferences = (menus) => {
        menus.forEach(menu => {
            return referencesHolder = {
                ...referencesHolder,
                [menu]: ref
            }
        })
    }

    buildReferences(menus);

    const scrollToComponent = (componentToScroll, index, menu) => {
        const scrollPos =(850 * (index + 1)) + index * 25;

        document.getElementById('takshaComponentsWrapper').scrollTo({
            top: scrollPos,
            behavior: "smooth"
        })
        navigate(`#${menu}`)


        // setCurrentScrollPosition()
        /*window.scrollTo({
            top: componentToScroll.current.offsetTop,
            behavior: "smooth"
        })*/
    }

    return (
        <div className='takshaComponentsHome'>
            <SideMenus menus={menus} onClick={scrollToComponent} referencesHolder={referencesHolder}/>
            <div className='takshaComponentsWrapper' id={'takshaComponentsWrapper'}>
                <GettingStarted/>
                <input
                    className='search-input'
                    type='text'
                    value={searchString}
                    onChange={(event) => handleSearch(event)}
                    placeholder={'search component'}
                />
                {
                    menus.map((menu) => {
                        return <>
                            <ComponentNameHeader menuName={menu} ref={referencesHolder[menu]}/>
                            <ChildrenComponentWrapper menu={menu}/>
                        </>
                    })
                }
            </div>
        </div>
    );
}