import './PostFooter.css'
import {FaRegCommentAlt} from 'react-icons/fa'
import { getPostComments, setPostCommentsVisibility, toggleModalState } from '../../../features/posts/postsSlice'
import { useDispatch } from 'react-redux'


const PostFooter = ({commentCount, id, permalink}) => {

    const dispatch = useDispatch()

    const handleCommentsClick = (postId, permalink) => {
        dispatch(setPostCommentsVisibility(postId))
        dispatch(getPostComments({permalink, id: postId}))
        dispatch(toggleModalState(true))
    }

    return (
        <div className='footer-container'>
            <span className='main-span' onClick={() => handleCommentsClick(id, permalink)}><FaRegCommentAlt className='comment-icon' /> {commentCount} Comments</span>
        </div>
    )
}

export default PostFooter

