import React from 'react';
import {APIResponseType} from "common/type/type";
import s from './Details.module.scss'

type DetailsTypeProps = {
    countries: APIResponseType
}
export const Details: React.FC<DetailsTypeProps> = ({countries}) => {
    return (
        <div className={s.container}>

        </div>
    );
};

