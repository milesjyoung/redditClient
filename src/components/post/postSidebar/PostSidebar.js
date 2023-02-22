import './PostSidebar.css'
import {TiArrowUpOutline, TiArrowDownOutline} from 'react-icons/ti'
import { useSelector } from 'react-redux'

const PostSidebar = ({ups}) => {
   
    return (
        <div className="sidebar-container">
            <div className='votes-container'>
                <TiArrowUpOutline className='vote-button up-vote' />
                <div><span>{ups}</span></div>
                <TiArrowDownOutline className='vote-button down-vote' />
            </div>
        </div>
    )
}


export default PostSidebar