import React, {ChangeEvent, useEffect, useState} from 'react';
import {IoSearch} from "react-icons/io5";
import s from './Search.module.scss'


type SearchPropsType = {
    value: string
    onChange: (name: string) => void
}
export const Search: React.FC<SearchPropsType> = React.memo(({value, onChange}) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value)
    }
    return (
        <div className={s.searchContainer}>
            <IoSearch/>
            <input
                value={value}
                onChange={onChangeHandler}
                type={"search"}
                placeholder={'Search for a country...'}
            />
        </div>
    );
});

