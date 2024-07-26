import { createSlice } from "@reduxjs/toolkit";

const programmeSlice = createSlice({
    name: "programme",
    initialState: {
        programme: {},
    },
    reducers: {
        getProgram: (state, action) => {
            state.programme = action.payload
        }
    }
})
export const { getProgram } = programmeSlice.actions;
export default programmeSlice.reducer