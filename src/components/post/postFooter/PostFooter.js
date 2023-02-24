import './PostFooter.css'
import {FaRegCommentAlt} from 'react-icons/fa'
import { getPostComments, setPostCommentsVisibility } from '../../../features/posts/postsSlice'
import { useDispatch } from 'react-redux'


const PostFooter = ({commentCount, id, permalink}) => {

    const dispatch = useDispatch()

    const handleCommentsClick = (postId, permalink) => {
        dispatch(setPostCommentsVisibility(postId))
        dispatch(getPostComments(permalink))
    }

    return (
        <div className='footer-container'>
            <span className='main-span'><FaRegCommentAlt onClick={() => handleCommentsClick(id, permalink)} /> {commentCount} Comments</span>
        </div>
    )
}

export default PostFooter

