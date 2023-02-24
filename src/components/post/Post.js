import PostSidebar from './postSidebar/PostSidebar'
import './Post.css'
import PostHeader from './postHeader/PostHeader'
import PostFooter from './postFooter/PostFooter'


const Post = ({post}) => {
    const {title, subreddit_name, author, created_utc, thumbnail, commentCount, image, ups, id, permalink} = post
    return (
        <div className='post-container'>
            <PostSidebar ups={ups} />
            <div className='main-area-column'>
                <PostHeader 
                subreddit_name={subreddit_name} 
                created_utc={created_utc}
                author={author}
                />
                <h3 className='title'>{title}</h3>
                {image.includes('jpg') && <img src={image} alt="post" className="post-image"/>}
                <div className='post-footer-div'>
                    <PostFooter commentCount={commentCount} id={id} permalink={permalink} />
                </div>
            </div>
        </div>
    )
}



export default Post