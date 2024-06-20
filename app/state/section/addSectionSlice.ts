'use client'
import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet();
interface AddSectionSlice {
    items : Map<string , Object>
}

const initialState: AddSectionSlice = {
    items : new Map
};

const addSectionSlice = createSlice({
    name: "add section",
    initialState: initialState,
    reducers: {
        addSection(state, action) {
            state.items.set(action.payload.id , action.payload.value);
        },
        deleteSection(state, action) {
            state.items.delete(action.payload);
        }
    },
})
export const addSectionActions = addSectionSlice.actions
export default addSectionSlice.reducer
