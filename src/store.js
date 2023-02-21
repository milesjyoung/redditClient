import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './features/posts/postsSlice'
import subRedditsReducer from "./features/subReddits/subRedditsSlice";


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        subreddits: subRedditsReducer
    }
})

