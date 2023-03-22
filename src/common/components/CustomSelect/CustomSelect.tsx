import React from 'react';
import Select from "react-select";

const style =  {
    control: (provided: any) => ({
        ...provided,
        backgroundColor: 'var(--colors-ui-base)',
        color: 'var(--colors-text)',
        borderRadius: 'var(--radii)',
        padding: '0.25rem',
        border: 'none',
        boxShadow: 'var(--shadow)',
        height: '50px',
        cursor: 'pointer',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        cursor: 'pointer',
        color: 'var(--colors-text)',
        backgroundColor: state.isSelected
            ? 'var(--colors-bg)'
            : 'var(--colors-ui-base)',
    }),
}

export const CustomSelect = ({...props}) => {
    return (
        <Select {...props} styles={style}/>
    );
};

