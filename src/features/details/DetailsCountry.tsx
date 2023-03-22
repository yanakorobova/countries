import React, {useEffect} from 'react';
import s from './Details.module.scss'
import {Card} from "common/components/Card/Card";
import {IoArrowBackOutline} from "react-icons/io5";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "app/store";
import {clearDetails, getCountryByName} from "features/details/detailsCountry-slice";

export const DetailsCountry = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {name} = useParams<{ name: string }>()
    const onClickHandler = () => navigate(-1)

    useEffect(() => {
        dispatch(getCountryByName(name as string))
        return () => {
            dispatch(clearDetails())
        }
    }, [name])
    return (
        <div className={s.container}>
            <button onClick={() => onClickHandler()} className={s.button}>
                <IoArrowBackOutline/>
                Back
            </button>
            <Card/>
        </div>
    );
};

