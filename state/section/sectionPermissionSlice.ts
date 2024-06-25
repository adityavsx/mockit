'use client'
import { createSlice } from "@reduxjs/toolkit";
import { permission } from "process";

export interface sectionPermissionSlice {
    permission: "overview" | "edit",
    canEdit : boolean
}


const initialState: sectionPermissionSlice = {
    permission: "overview",
    canEdit : false
};

const sectionPermissionSlice = createSlice({
    name: 'section permissions',
    initialState: initialState,
    reducers: {
        updatePermissions(state: sectionPermissionSlice, action) {
            state.permission = action.payload;
            state.canEdit = (state.permission === "edit");
        }
    }
})

export const { updatePermissions } = sectionPermissionSlice.actions;
export default sectionPermissionSlice.reducer