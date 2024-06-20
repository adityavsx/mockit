import { createSlice } from "@reduxjs/toolkit";

interface SectionSlice {
    showEditMockSection: boolean,
    showPullMockSection: boolean,
    justClicked: string,
    lastClicked : string

}

const initialState: SectionSlice = {
    showEditMockSection: true,
    showPullMockSection: false,
    justClicked: 'edit-mock',
    lastClicked: 'edit-mock'
};

const sectionSlice = createSlice({
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

export const sectionActions = sectionSlice.actions
export default sectionSlice.reducer