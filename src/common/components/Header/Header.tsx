import React from 'react';
import s from 'common/components/Header/Header.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "common/path/path";


export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <NavLink to={PATH.HOME}>Where is the world?</NavLink>
                    <p>Theme</p>
                </div>
            </div>
        </header>
    );
};

