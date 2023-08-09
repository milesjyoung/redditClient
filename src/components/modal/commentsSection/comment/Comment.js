import './Comment.css'
import Avatar from '../avatar/Avatar'
import moment from 'moment'

const Comment = ({comment}) => {

    const getRelativeTime = (utcTime) => {
        return moment.unix(utcTime).fromNow()
    }
    
    return (
        <div className='comment-container'>
            <div className='comment-header'>
                {/* <Avatar className='avatar' author={comment.author} /> */}
                <h5 className='author-name-time'>{comment.author} &#x2022; {getRelativeTime(comment.created_utc)}</h5>
            </div>
            {/* no not really */}
            <svg>
                <line x1="2%" y1="0" x2="2%" y2="100%" stroke="black" />
            </svg>

           
        </div>
    )
}



export default Comment