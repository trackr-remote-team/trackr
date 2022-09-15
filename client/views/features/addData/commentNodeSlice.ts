import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentNodeState {
    note: string,
    associatedNode: string,
}

const initialState: CommentNodeState = {
    note: "",
    associatedNode: "",
}

const CommentNodeSlice = createSlice({
    name: 'CommentNode',
    initialState,
    reducers: {
        //adding Comment
        createdComment(state) {
            state.note = 'new data'
            state.associatedNode = 'new data'
        },
        //removing Comment
        deletedComment(state) {
            state.note = ''
            state.associatedNode = ''
        }
    }
})

export const { createdComment, deletedComment } = CommentNodeSlice.actions;
export default CommentNodeSlice.reducer;