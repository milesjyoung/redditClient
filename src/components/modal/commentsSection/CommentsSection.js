import Comment from './comment/Comment'
import './CommentsSection.css'

const CommentsSection = ({comments, commentsLoading}) => {

    if(commentsLoading) {
        return (
            <div>...Loading</div>
        )
    }

    return (
        <div className='comments-section-container'>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default CommentsSection