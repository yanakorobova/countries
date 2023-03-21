import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "features/countries/countries-slice";

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    dispatch(setAppErrorAC({error: error.message ? error.message: 'Some error occurred'}))
    dispatch(setAppStatusAC({status: 'rejected'}))
}