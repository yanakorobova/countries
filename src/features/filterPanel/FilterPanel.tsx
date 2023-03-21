import React, {useCallback} from 'react';
import s from './FilterPanel.module.scss'
import {Search} from "common/components/Search/Search";
import {useAppDispatch, useAppSelector} from "app/store";
import {setRegion, setSearch} from "features/filterPanel/controls-slice";
import Select from "react-select";

type OptionsMapValue = {
    value: string
    label: string
}
type OptionsMapType = {
    [K: string]: OptionsMapValue
}
const optionsMap: OptionsMapType = {
    Africa: {value: 'Africa', label: 'Africa'},
    America: {value: 'America', label: 'America'},
    Asia: {value: 'Asia', label: 'Asia'},
    Europe: {value: 'Europe', label: 'Europe'},
    Oceania: {value: 'Oceania', label: 'Oceania'},
}

const options = Object.values(optionsMap)

export const FilterPanel = () => {
    const search = useAppSelector(state => state.controls.search)
    const region = useAppSelector(state => state.controls.region)
    const dispatch = useAppDispatch()
    const setSearchHandler = useCallback((name: string) => {
        dispatch(setSearch({search: name}))
    }, [])
    const setRegionHandler = useCallback((region: any) => {
        dispatch(setRegion({region: region.value}))
    }, [])
    return (
        <div className={s.wrapper}>
            <Search value={search} onChange={setSearchHandler}/>
            <Select
                options={options}
                placeholder='Filter by Region'
                isClearable
                defaultValue={undefined}
                isSearchable={false}
                value={optionsMap[region]}
                onChange={setRegionHandler}
                className={s.select}
            />
        </div>
    );
};
