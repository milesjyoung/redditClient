import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://www.reddit.com/r/popular.json'


const initialState = {
    posts: [],
    isLoading: true,
    isError: false
}

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
    return fetch(url)
        .then(response => response.json())
        .catch(e => console.log(e))
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state) => {
            state.isLoading = true
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            const cleanedPosts = action.payload.data.children.map((post) => (
                {
                    title: post.data.title,
                    thumbnail: post.data.thumbnail,
                    commentCount: post.data.num_comments,
                    isVideo: post.data.is_video,
                    id: post.data.id,
                    downs: post.data.downs,
                    ups: post.data.ups,
                    created_utc: post.data.created_utc,
                    author: post.data.author,
                    permalink: `https://reddit.com${post.data.permalink.substring(0, post.data.permalink.length -1)}.json`,
                    subreddit_name: post.data.subreddit_name_prefixed

                }
            ))
             console.log(cleanedPosts)
            state.posts = cleanedPosts

        },
        [loadPosts.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        }
    }
})

export const {setPosts} = postsSlice.actions


export default postsSlice.reducer


