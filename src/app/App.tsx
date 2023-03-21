import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {Details} from "pages/Details";
import {Main} from 'common/components/Main/Main';
import {Header} from "common/components/Header/Header";
import {NotFound} from "pages/NotFound";
import {PATH} from "common/path/path";


function App() {
    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path={PATH.HOME} element={<HomePage/>}/>
                    <Route path={PATH.DETAILS} element={<Details/>}/>
                    <Route path={PATH.ERROR} element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
