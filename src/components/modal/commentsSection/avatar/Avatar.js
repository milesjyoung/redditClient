import './Avatar.css'



const Avatar = ({author}) => {
    
    return (
        <img 
            src={`https://api.adorable.io/avatars/10/${author}`}
            alt={'profile image'}
            className="avatar-profile-icon"
        />
    )
}

export default Avatar