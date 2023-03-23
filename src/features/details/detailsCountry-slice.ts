import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppStatusAC} from "features/countries/countries-slice";
import {handleServerNetworkError} from "common/utils/utils";
import {appAPI} from "app/app-api";
import {DetailsResponseType} from "common/type/type";

const initialState = {
    details: {} as DetailsResponseType,
    neighbors: [],
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        clearDetails: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCountryByName.fulfilled, (state, action) => {
            state.details = action.payload
        })
        builder.addCase(loadNeighbors.fulfilled, (state, action) => {
            state.neighbors = action.payload
        })
    }
})
export const detailsReducer = detailsSlice.reducer
export const {clearDetails} = detailsSlice.actions
export const getCountryByName = createAsyncThunk('details/getCountryByName',
    async (name: string, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatusAC({status: 'loading'}))
        try {
            const res = await appAPI.getCountryByName(name)
            dispatch(setAppStatusAC({status: 'received'}))
            return res.data[0]
        } catch (e) {
            //@ts-ignore
            handleServerNetworkError(e, dispatch)
            return rejectWithValue({})
        }
    })

export const loadNeighbors = createAsyncThunk('details/loadNeighbors',
    async (neighbors: string[], {dispatch, rejectWithValue}) => {
        dispatch(setAppStatusAC({status: 'loading'}))
        try {
            const res = await appAPI.getCountrysByCode(neighbors)
            dispatch(setAppStatusAC({status: 'received'}))
            return res.data.map((c: { name: string }) => c.name)
        } catch (e) {
            //@ts-ignore
            handleServerNetworkError(e, dispatch)
            return rejectWithValue({})
        }
    })