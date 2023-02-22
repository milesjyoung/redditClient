import './PostHeader.css'
import {FaAdn} from 'react-icons/fa'
import moment from 'moment'


const PostHeader = ({subreddit_name, author, created_utc}) => {
    
    const getRelativeTime = (utcTime) => {
        return moment.unix(utcTime).fromNow()
    }

    return (
        <div className="post-header-container">
            <div className='author-container'>
                <h5 className='author-name-time'>posted by {author} {getRelativeTime(created_utc)} hours ago</h5>
            </div>
        </div>
    )
}


export default PostHeader