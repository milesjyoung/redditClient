import "./Comment.css";
import Avatar from "../avatar/Avatar";
import moment from "moment";

const Comment = ({ comment }) => {
  const getRelativeTime = (utcTime) => {
    return moment.unix(utcTime).fromNow();
  };

  const { author, body, created_utc, replies } = comment;
  const timestamp = getRelativeTime(created_utc);

  return (
    <div className="comments__root-comment">
      <span className="comments__header">
        <h2 className="comments__h2">{author}</h2>·{" "}
        <span className="comments__timestamp">{timestamp}</span>
      </span>
      <div className="comments__main-section">
        <div className="comments__line"></div>
        <div className="comments__body">
          <div className="comments__body-text">
            <p>{body}</p>
          </div>
          {/* <div className="comments__body-child"></div> */}
          {replies?.data?.children &&
            replies.data.children.map((commentWrapper) => (
              <Comment
                key={commentWrapper.data}
                comment={commentWrapper.data}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
