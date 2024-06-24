'use client'
import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet();

export enum sectionSet {
    SECTION_IS_SET,
    SECTION_ISNOT_SET
}
export interface sectionDetails {
    name: string,
    description: string,
}

export interface sectionActionSlice {
    items: Map<string, sectionDetails>,
    selectedSection: string,
    isSectionSet: sectionSet,

}

const initialState: sectionActionSlice = {
    items: new Map(),
    selectedSection: "[select section]",
    isSectionSet: sectionSet.SECTION_ISNOT_SET,
};

const sectionActionSlice = createSlice({
    name: "section action",
    initialState: initialState,
    reducers: {
        addSection(state: any, action) {
            if (state.isSectionSet.valueOf() === sectionSet.SECTION_ISNOT_SET.valueOf()) {
                state.isSectionSet = sectionSet.SECTION_IS_SET;
            }
            state.items.set(action.payload.id , action.payload.value);
        },
        deleteSection(state: any, action) {
            if (state.selectedSection = action.payload)
                state.selectedSection = "[select section]";
            state.items.delete(action.payload);
            if (state.items.size == 0) {
                state.isSectionSet = sectionSet.SECTION_ISNOT_SET;
            }
        },
        selectSection(state: any, action) {
            state.selectedSection = action.payload;
        }
    },
})
export const sectionActions = sectionActionSlice.actions
export default sectionActionSlice.reducer
