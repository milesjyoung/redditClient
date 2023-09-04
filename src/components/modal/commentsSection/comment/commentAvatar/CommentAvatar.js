import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";
import "./CommentAvatar.css";

function CommentAvatar({ author }) {
  const avatar = useMemo(() => {
    return createAvatar(identicon, {
      size: 128,
      seed: author,
      // ... other options
    }).toDataUriSync();
  }, []);

  return <img className="avatar-image" src={avatar} alt="Avatar" />;
}

export default CommentAvatar;
