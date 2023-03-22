import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/store";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {setTheme} from "features/theme/theme-slice";

export const Theme = () => {
    const theme = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()
    const changeThemeHandler = () => {
        dispatch(setTheme(theme === 'Light' ? 'Dark' : 'Light'))
    }
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    return (
        <div onClick={changeThemeHandler} style={{cursor: 'pointer'}}>
            {theme === 'Light' ? (
                <IoMoonOutline size='14px'/>
            ) : (
                <IoMoon size='14px'/>
            )}
            <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
        </div>
    );
};

