import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "../../features/posts/postsSlice"
import { useEffect } from "react"
import './PostsContainer.css'
import Post from "../post/Post"



const PostsContainer = () => {
    const dispatch = useDispatch()
    const {posts, isLoading, isError, searchTerm} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(loadPosts())
    }, [])
    
    if(!posts) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="posts-container">
            {posts.filter(post => post.title.includes(searchTerm)).map((post) => (
                <Post
                    key={post.id}
                    post={post}
                 />
            ))}
        </div>
    )
}


export default PostsContainer