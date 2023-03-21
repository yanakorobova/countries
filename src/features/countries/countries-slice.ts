import {CountriesType, StatusType} from "common/type/type";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAPI} from "app/app-api";
import {AppRootStateType} from "app/store";
import {handleServerNetworkError} from "common/utils/utils";

const initialState: CountriesType = {
    status: 'idle',
    error: null,
    list: [],
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setAppStatusAC: (state, action: PayloadAction<{ status: StatusType }>) => {
            state.status = action.payload.status
        },
        setAppErrorAC: (state, action: PayloadAction<{ error: null | string }>) => {
            state.error = action.payload.error
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadCountries.fulfilled, (state, action) => {
            state.list = action.payload
        })
    }
})

export const {setAppStatusAC, setAppErrorAC} = countriesSlice.actions
export const countriesReducer = countriesSlice.reducer

export const loadCountries = createAsyncThunk('countries/loadCountries',
    async (_, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatusAC({status: 'loading'}))
        try {
            const res = await appAPI.getCountries()
            dispatch(setAppStatusAC({status: 'received'}))
            return res.data
        } catch (e) {
            //@ts-ignore
            handleServerNetworkError(e, dispatch)
            return rejectWithValue({})
        }
    })

export const selectAllCountries = (
    state: AppRootStateType,
    search: string,
    region: string
) => {
    return state.countries.list.filter((countries) => {
        return (
            countries.name.toLowerCase().includes(search.toLowerCase()) &&
            countries.region.toLowerCase().includes(region.toLowerCase())
        )
    })
}