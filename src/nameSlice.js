import { createSlice } from "@reduxjs/toolkit";
import { action } from "react-dom/test-utils";

const initialState ={
    frmDt: "",
    dtList: []
}

const nameSlice = createSlice({
    name:'userName',
    initialState,

    reducers:{
        setFrmDt: (state, action) =>{
            state.frmDt = action.payload
        },
        setDtList: (state, action) =>{
            state.dtList = [...state.dtList, state.frmDt]
        }
    }
})

const {reducer, actions} = nameSlice
export const {setFrmDt, setDtList} = actions

export default reducer

