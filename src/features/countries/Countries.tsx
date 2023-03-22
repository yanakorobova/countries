import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/store";
import {loadCountries, selectAllCountries} from "features/countries/countries-slice";
import {List} from "common/components/List/List";
import s from './Countries.module.scss'

export const Countries = React.memo(() => {
    const dispatch = useAppDispatch()
    const countries = useAppSelector((state) =>
        selectAllCountries(state, state.controls.search, state.controls.region)
    )
    const status = useAppSelector(state => state.countries.status)
    const error = useAppSelector(state => state.countries.error)
    useEffect(() => {
        dispatch(loadCountries())
    }, [])

    const mappedCountries = countries.map(c => {
        return <List key={c.name} countries={c}/>
    })

    return (
        <>
            {status === 'loading' ? <h2>Loading...</h2> :
                error ? <h2>{error}</h2> :
                countries.length ? <div className={s.containerCountries}>
                    {mappedCountries}
                </div> : <h2>Country not found. Change your search options</h2>
            }
        </>

    );
});

