import { createSlice } from "@reduxjs/toolkit";

interface AddSectionSlice {
    items : string []
}

const initialState: AddSectionSlice = {
    items : []
};

const addSectionSlice = createSlice({
    name: "add section",
    initialState: initialState,
    reducers: {
        addSection(state, action) {
            state.items.push(action.payload.name);
        }
    },
})

export const addSectionActions = addSectionSlice.actions
export default addSectionSlice.reducer