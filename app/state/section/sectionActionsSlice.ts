'use client'
import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet();

export interface sectionDetails {
    name: string,
    description: string,
}

export interface sectionActionSlice {
    items: Map<string, sectionDetails>,
    selectedSection : string
}

const initialState: sectionActionSlice = {
    items: new Map(),
    selectedSection : ""
};

const sectionActionSlice = createSlice({
    name: "section action",
    initialState: initialState,
    reducers: {
        addSection(state:any, action) {
            state.items.set(action.payload.id , action.payload.value);
        },
        deleteSection(state: any, action) {
            if (state.selectedSection = action.payload)
                state.selectedSection = "";
            state.items.delete(action.payload);
        },
        selectSection(state : any, action) {
            state.selectedSection = action.payload;
        }
    },
})
export const sectionActions = sectionActionSlice.actions
export default sectionActionSlice.reducer
