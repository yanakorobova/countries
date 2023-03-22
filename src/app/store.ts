import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {countriesReducer} from "features/countries/countries-slice";
import {controlsReducer} from "features/filterPanel/controls-slice";
import {detailsReducer} from "features/details/detailsCountry-slice";
import {themeReducer} from "features/theme/theme-slice";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'theme',
    storage,
    whitelist: ['theme']
};

const rootReducer = combineReducers({
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
    theme: themeReducer
})
const persistedReducer  = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer ,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, PERSIST, PURGE, REHYDRATE, PAUSE, REGISTER],
            ignoreActions: false,
        },
    }).prepend(thunk)
})
export const persistor = persistStore(store)

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//@ts-ignore
window.store = store