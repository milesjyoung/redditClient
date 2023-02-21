import './PostFooter.css'
import {FaRegCommentAlt} from 'react-icons/fa'


const PostFooter = ({commentCount}) => {
    return (
        <div className='footer-container'>
            <span className='main-span'><FaRegCommentAlt /> {commentCount} Comments</span>
        </div>
    )
}

export default PostFooter

