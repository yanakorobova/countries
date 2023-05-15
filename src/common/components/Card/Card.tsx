import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/store";
import s from './Card.module.scss'
import {loadNeighbors} from "features/details/detailsCountry-slice";
import {useNavigate} from "react-router-dom";


export const Card = () => {
    const navigate = useNavigate()
    const status = useAppSelector(state => state.countries.status)
    const error = useAppSelector(state => state.countries.error)
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain = [],
        currencies = [],
        languages = [],
        borders = [],
    } = useAppSelector(state => state.details.details)
    const neighbors = useAppSelector(state => state.details.neighbors)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighbors(borders))
        }
    }, [dispatch, borders])
    const onClickHandler = (name: string) => navigate(name)
    return (
        <div className={s.card}>
            {status === 'loading' ? <h2>Loading...</h2> :
                error ? <h2>{error}</h2> :
                <div className={s.cardContainer}>
                    <div className={s.test}>
                        <img src={flag} alt="img"/>
                    </div>
                    <div className={s.body}>
                        <p className={s.title}>{name}</p>
                        <div className={s.information}>
                            <ul>
                                <li><b>Native name: </b>{nativeName}</li>
                                <li><b>Population: </b>{ population?.toLocaleString()}</li>
                                <li><b>Region: </b>{region}</li>
                                <li><b>Sub Region: </b>{subregion}</li>
                                <li><b>Capital: </b>{capital? capital: '-'}</li>
                            </ul>
                            <ul>
                                <li><b>Top Level Domain: </b>{topLevelDomain.map((d) => (
                                    <span key={d}>{d} </span>
                                ))}</li>
                                <li>
                                    <b>Currency: </b>{currencies.map(c => (
                                    <span key={c.code}>{c.name} </span>
                                ))}
                                </li>
                                <li><b>Languages: </b>{languages.map(l => (
                                    <span key={l.name}>{l.name} </span>
                                ))}</li>
                            </ul>
                        </div>
                        <div className={s.meta}>
                            <b>Border Countries:</b>
                            {!borders.length ? (
                                <span>There is no border countries</span>
                            ) : (
                                <div className={s.group}>
                                    {neighbors.map((b: any) => (
                                        <span key={b} onClick={() => {
                                            onClickHandler(`/country/${b}`)
                                        }}>
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

