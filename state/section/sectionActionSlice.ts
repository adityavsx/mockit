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
}

export interface sectionActionSlice {
    sectionBucket: Map<string, sectionDetails>,
    selectedSection: string,
    isSectionSet: sectionSet,

}

const initialState: sectionActionSlice = {
    sectionBucket: new Map(),
    selectedSection: "[select section]",
    isSectionSet: sectionSet.SECTION_ISNOT_SET,
};

const sectionActionSlice = createSlice({
    name: "section action",
    initialState: initialState,
    reducers: {
        addSection(state: sectionActionSlice, action) {
            // check  for "first insertion"
            if (state.isSectionSet.valueOf() === sectionSet.SECTION_ISNOT_SET.valueOf()) {
                state.isSectionSet = sectionSet.SECTION_IS_SET;
            }

            // subsequent mutation? do we want it?
            state.sectionBucket.set(action.payload.id, action.payload.value);
            state.sectionBucket = new Map(state.sectionBucket);
        },
        deleteSection(state: sectionActionSlice, action) {

            // check for "last deletion" so there is no anti-state information
            if (state.selectedSection = action.payload)
                state.selectedSection = "[select section]";

            // delete state but again, raw mutation seriously adi?
            state.sectionBucket.delete(action.payload);

            // setting selected state clearly there is NOTHING wrong with this
            if (state.sectionBucket.size == 0) {
                state.isSectionSet = sectionSet.SECTION_ISNOT_SET;
            }
        },
        selectSection(state: sectionActionSlice, action) {
            state.selectedSection = action.payload;
        }
    },
})

export const {addSection , deleteSection, selectSection } = sectionActionSlice.actions
export default sectionActionSlice.reducer
