import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'https://www.reddit.com'


const initialState = {
    posts: [],
    subredditURL: '/r/Home.json',
    searchTerm: '',
    isLoading: true,
    isError: false,
    modalOpen: false
}

export const loadPosts = createAsyncThunk('posts/loadPosts', async (arg, {getState}) => {
    const {subredditURL} = getState().posts
    return fetch(BASE_URL+subredditURL)
        .then(response => response.json())
        .catch(e => console.log(e))
})

export const getPostComments = createAsyncThunk('posts/getPostComments', async ({permalink}) => {
     return fetch(permalink)
        .then(response => response.json())
        .catch(e => console.log(e))
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        setsubredditURL: (state, action) => {
            state.subredditURL = action.payload
        },
        setPostCommentsVisibility: (state, action) => {
            const postToUpdate = state.posts.find(post => post.id===action.payload)
            postToUpdate.displayComments = !postToUpdate.displayComments
        },
        toggleModalState: (state, action) => {
            state.modalOpen = action.payload
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
                    permalink: `${BASE_URL}${post.data.permalink.substring(0, post.data.permalink.length -1)}.json`,
                    subreddit_name: post.data.subreddit_name_prefixed,
                    image: post.data.url,
                    displayComments: false,
                    comments: null,
                    commentsLoading: false,
                    commentsError: false

                }
            ))
             console.log(cleanedPosts)
            state.posts = cleanedPosts

        },
        [loadPosts.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },
        [getPostComments.pending]: (state, action) => {
            const {id} = action.meta.arg
            const post = state.posts.find(post => post.id === id)
            post.commentsLoading = true
            post.commentsError = false
        },
        [getPostComments.fulfilled]: (state, action) => {
            const {id} = action.meta.arg
            const cleanedResponse = action.payload[1].data.children.map(object => object.data)
            console.log(cleanedResponse)
            const post = state.posts.find(post => post.id === id)
            post.comments = cleanedResponse
            post.commentsLoading = false
            post.commentsError = false
        },
        [getPostComments.rejected]: (state, action) => {
            const {id} = action.meta.arg
            const post = state.posts.find(post => post.id === id)
            post.commentsLoading = false
            post.commentsError = true
        }
    }
})

export const {
    setPosts, 
    setSearchTerm, 
    setsubredditURL, 
    setPostCommentsVisibility,
    toggleModalState
} = postsSlice.actions


export default postsSlice.reducer


