import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "../../features/posts/postsSlice"
import { useEffect } from "react"
import './PostsContainer.css'
import Post from "../post/Post"
import { loadSubreddits } from "../../features/subReddits/subRedditsSlice"


const PostsContainer = () => {
    const dispatch = useDispatch()
    const {posts, isLoading, isError} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(loadPosts())
        dispatch(loadSubreddits())
    }, [])
    
    if(!posts) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="posts-container">
            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                 />
            ))}
        </div>
    )
}


export default PostsContainer