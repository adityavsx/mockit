import { createSlice } from "@reduxjs/toolkit";

interface whichSectionSlice {
    showEditMockSection: boolean,
    showPullMockSection: boolean,
    justClicked: string,
    lastClicked : string

}

const initialState: whichSectionSlice = {
    showEditMockSection: true,
    showPullMockSection: false,
    justClicked: 'edit-mock',
    lastClicked: 'edit-mock'
};

const whichSectionSlice = createSlice({
    name: "show-section",
    initialState : initialState,
    reducers: {
        changeSections(state, action) {
            state.lastClicked = state.justClicked;
            state.justClicked = action.payload;
            if (state.justClicked == state.lastClicked)
                return;
            state.showEditMockSection = !state.showEditMockSection;
            state.showPullMockSection = !state.showPullMockSection;
        }
    }
})

export const whichSectionActions = whichSectionSlice.actions
export default whichSectionSlice.reducer