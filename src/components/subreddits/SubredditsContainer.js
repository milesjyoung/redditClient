import { useDispatch, useSelector } from 'react-redux'
import './SubredditsContainer.css'
import { loadSubreddits } from '../../features/subReddits/subRedditsSlice'
import { setsubredditURL, loadPosts } from '../../features/posts/postsSlice'
import { useEffect } from 'react'


const SubredditsContainer = () => {

    const dispatch = useDispatch()
    const {subreddits} = useSelector(state => state.subreddits)

    useEffect(() => {
        dispatch(loadSubreddits())
    }, [])


    const handleSubredditClick = (subredditTitle) => {
        const urlCleaned = subredditTitle.substring(0, subredditTitle.length - 1) + '.json'
        dispatch(setsubredditURL(urlCleaned))
        dispatch(loadPosts())
    }

    return (
        <div className='subreddits-main-container'>
            <ul className='subreddits-list'>
                {subreddits.map(subreddit => (
                    <li 
                        key={subreddit.id}
                        className='subreddit-item'
                    >
                    <div className='subreddit-item-container' onClick={() => handleSubredditClick(subreddit.url)}><img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              /> {subreddit.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default SubredditsContainer