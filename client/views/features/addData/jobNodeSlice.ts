import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobNodeState {
    companyName: string,
    jobTitle: string,
}

const initialState: JobNodeState = {
    companyName: "",
    jobTitle: "",
}

const jobNodeSlice = createSlice({
    name: 'jobNode',
    initialState,
    reducers: {
        //adding job
        createdJob(state) {
            state.companyName = 'new data';
            state.jobTitle = 'new data'
        },
        //removing job
        deletedJob(state) {
            state.companyName = 'new data';
            state.jobTitle = 'new data'
        }
    }
})

export const { createdJob, deletedJob } = jobNodeSlice.actions;
export default jobNodeSlice.reducer;
