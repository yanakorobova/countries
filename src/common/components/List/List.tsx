import React, {useCallback} from 'react';
import {APIResponseType} from "common/type/type";
import s from './List.module.scss'
import {useNavigate} from "react-router-dom";

type DetailsTypeProps = {
    countries: APIResponseType
}
export const List: React.FC<DetailsTypeProps> = React.memo(({countries}) => {
    const navigate = useNavigate()
    const {region, population, capital, name, flags} = countries
    const onClickHandler = useCallback(
        (name: string) => {
            return () => navigate(name)
        },
        [navigate]
    )
    return (
        <div className={s.container} onClick={onClickHandler(`/country/${name}`)}>
            <img src={flags.svg} alt={'img'}/>
            <div className={s.body}>
                <b>{name}</b>
                <ul>
                    <li><b>Capital: </b>{capital}</li>
                    <li><b>Population: </b>{population.toLocaleString()}</li>
                    <li><b>Region: </b>{region}</li>
                </ul>
            </div>
        </div>
    );
});

