import React, {ReactElement} from 'react';
import s from './Main.module.scss'

type MainPropsType = {
    children: ReactElement
}
export const Main: React.FC<MainPropsType> = ({children}) => {
    return (
        <main className={s.main}>
            <div className={s.container}>
                {children}
            </div>
        </main>
    );
};
