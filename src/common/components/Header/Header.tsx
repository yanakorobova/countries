import React from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "common/path/path";
import {Theme} from "features/theme/Theme";
import {useAppDispatch} from "app/store";
import {resetFilters} from "features/filterPanel/controls-slice";


export const Header = () => {
    const dispatch = useAppDispatch()
    const resetFiltersHandler = () => {
        dispatch(resetFilters())
    }
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <NavLink to={PATH.HOME} onClick={resetFiltersHandler}>Where is the world?</NavLink>
                    <Theme/>
                </div>
            </div>
        </header>
    );
};

