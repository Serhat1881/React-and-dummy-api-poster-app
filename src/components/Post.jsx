import classes from "./Post.module.css";
import { Link } from "react-router-dom";
function Post({ author, body, id }) {
  return (
    <Link to={id} className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </Link>
  );
}

export default Post;
