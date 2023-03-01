import { useDispatch } from 'react-redux'
import './Modal.css'
import { toggleModalState, setPostCommentsVisibility } from '../../features/posts/postsSlice'
import PostSidebar from '../post/postSidebar/PostSidebar'
import PostHeader from '../post/postHeader/PostHeader'
import CommentsSection from './commentsSection/CommentsSection'

const Modal = ({post}) => {

    const dispatch = useDispatch()
    
    const onClose = () => {
        dispatch(toggleModalState(false))
        dispatch(setPostCommentsVisibility(post.id))
    }

    if(post === null) {
        return null
    }


    return (
        <div className='overlay-container' onClick={() => onClose()}>
            <div className='main-modal-content' onClick={(e) => e.stopPropagation()}>
                <PostSidebar ups={post.ups} />
                <div className='modal-main-column'>
                    <PostHeader subreddit_name={post.subreddit_name} author={post.author} created_utc={post.created_utc} />
                    <h2>{post.title}</h2>
                    {post.image.includes('jpg') && <img src={post.image} alt="post" className="post-image"/>}
                    <CommentsSection comments={post.comments} commentsLoading={post.commentsLoading} />
                </div>
            </div>
        </div>
        
    )
}


export default Modal