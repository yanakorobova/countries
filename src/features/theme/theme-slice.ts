import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type ThemeType = 'Light' | 'Dark'

const initialState: ThemeType = 'Light'

const themeSlice = createSlice({
    name: 'theme',
    initialState: (): ThemeType => initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            return action.payload
        }
    }
})

export const themeReducer = themeSlice.reducer
export const {setTheme} = themeSlice.actions