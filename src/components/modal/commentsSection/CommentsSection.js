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
                <div key={comment.id}>{comment.body}</div>
            ))}
        </div>
    )
}

export default CommentsSection