import "./Comment.css";
// import Avatar from "../avatar/Avatar";
import moment from "moment";
import CommentAvatar from "./commentAvatar/CommentAvatar";

const Comment = ({ comment }) => {
  const getRelativeTime = (utcTime) => {
    return moment.unix(utcTime).fromNow();
  };

  const { author, body, created_utc, replies } = comment;
  const timestamp = getRelativeTime(created_utc);

  return (
    <div className="comments__root-comment">
      <div className="comments__header">
        <div className="comments__author-icon-container">
          <div className="comments__author-icon">
            <CommentAvatar
              className="comments__comments-avatar"
              author={author}
            />
          </div>
        </div>
        <h2 className="comments__h2">{author}</h2>
        <span className="comments__timestamp"> · {timestamp}</span>
      </div>
      <div className="comments__main-section">
        <div className="comments__line"></div>
        <div className="comments__body">
          <div className="comments__body-text">
            <p>{body}</p>
          </div>
          {/* <div className="comments__body-child"></div> */}
          {replies?.data?.children &&
            replies.data.children.map((commentWrapper) => {
              if (!commentWrapper.data || commentWrapper.kind === "more") {
                return null;
              }
              return (
                <Comment
                  key={commentWrapper.data}
                  comment={commentWrapper.data}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
