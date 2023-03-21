import React from 'react';
import {FilterPanel} from "features/filterPanel/FilterPanel";
import {Countries} from "features/countries/Countries";

export const HomePage = () => {
    return (
        <>
            <FilterPanel/>
            <Countries/>
        </>
    );
};
