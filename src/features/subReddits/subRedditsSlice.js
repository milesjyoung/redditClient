import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://www.reddit.com/subreddits.json'

const initialState = {
    subreddits: [],
    isLoading: true,
    isError: false
}

export const loadSubreddits = createAsyncThunk('subreddits/loadSubreddits', async () => {
    return fetch(url)
        .then(response => response.json())
        .catch(e => console.log(e))
})

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        setSubreddits: (state, action) => {
            state.isLoading = false
            state.subreddits = action.payload
        }
    },
    extraReducers: {
        [loadSubreddits.pending]: (state) => {
            state.isLoading = true
            state.isError = false
        },
        [loadSubreddits.fulfilled]: (state, action) => {
            const cleanedResponse = action.payload.data.children.map(entry => entry.data)
            state.subreddits = cleanedResponse
            state.isLoading = false
            state.isError = false
        },
        [loadSubreddits.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        }
    }   
})

export const {setSubreddits} = subredditsSlice.actions

export default subredditsSlice.reducer