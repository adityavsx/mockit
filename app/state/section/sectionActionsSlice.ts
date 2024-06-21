'use client'
import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet();
interface sectionActionSlice {
    items : Map<string , Object>
}

const initialState: sectionActionSlice = {
    items : new Map
};

const sectionActionSlice = createSlice({
    name: "section action",
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
export const addSectionActions = sectionActionSlice.actions
export default sectionActionSlice.reducer
