import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InterviewNodeState {
    type: string,
    companyName: string,
}

const initialState: InterviewNodeState = {
    type: "",
    companyName: "",
}

const interviewNodeSlice = createSlice({
    name: 'interviewNode',
    initialState,
    reducers: {
        //adding interview
        createdInterview(state, action: PayloadAction<string>) {
            state.type = action.payload
            state.companyName = 'new data'
        },
        //removing interview
        deletedInterview(state) {
            state.type = ''
            state.companyName = ''
        }
    }
})

export const { createdInterview, deletedInterview } = interviewNodeSlice.actions;
export default interviewNodeSlice.reducer;