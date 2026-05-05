
import { Link, NavLink, useNavigate, useOutletContext, useParams } from 'react-router';
import styles from './Post.module.css'
import { Navigate } from 'react-router';
import { useState } from 'react';

function Post() {

  const [isEditMode, setIsEditMode] = useState(false);
  const [currentContent, setCurrentContent] = useState('');

  let navigate = useNavigate();

  const { postId } = useParams();
  const { posts, onEdit } = useOutletContext();
  const post = posts[Number(postId)];

  if (!post) {
    return <p>Post not Found</p>
  };

  const { title, body } = post;

  const handleEditClick = () => {
    setIsEditMode(true);
    setCurrentContent(body);
  }

  const handleCancle = () => {
    setIsEditMode(false);
    setCurrentContent(body);
  };

  const handleSave = () => {
    setIsEditMode(false);
    onEdit(Number(postId), currentContent);
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.name}>{title}</p>
        <p className={styles.content}>{body}</p>

        {!isEditMode && (
          <>
            <button className={styles.button + " " + styles.edit} onClick={handleEditClick}>
              Edit
            </button>

            {/* 
          <button className={styles.button + " " + styles.delete} onClick={onDelete}>
            Delete
          </button> */}
          </>
        )}

        {isEditMode && (
          <div className={styles.editArea}>
            <input
              value={currentContent}
              className={styles.input}
              type="text"
              onChange={(event) => setCurrentContent(event.target.value)}
              placeholder="can edit here post content"
            />

            <div className={styles.DecisionButtons}>
              <button className={styles.button + " " + styles.cancle} onClick={handleCancle}>
                Cancle
              </button>

              <button className={styles.button + " " + styles.save} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.btnDiv}>
        <button className={styles.button + " " + styles.back}
          onClick={() => navigate("/posts")}>
          Back to list of posts</button>

      </div>

      {/* <Link to="/posts">Back to list of posts</Link> */}

    </>


  );
}

export default Post;