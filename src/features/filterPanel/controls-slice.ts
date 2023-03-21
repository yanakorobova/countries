import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    search: '',
    region: '',
}
const controls = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<{ search: string }>) => {
            state.search = action.payload.search
        },
        setRegion: (state, action: PayloadAction<{ region: string }>) => {
            state.region = action.payload.region
        },
        resetFilters: () => {
            return initialState
        }
    }
})

export const controlsReducer = controls.reducer
export const {setSearch, setRegion, resetFilters} = controls.actions