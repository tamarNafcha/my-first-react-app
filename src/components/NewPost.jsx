
import { useState } from 'react';
import styles from './NewPost.module.css';
import { useNavigate, useOutletContext } from 'react-router';

function NewPost() {
  const [authorName, setAuthorName] = useState("");
  const [postContent, setPostContent] = useState("");
  const {onCreate}= useOutletContext();
  let navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(authorName, postContent);
    setAuthorName("");
    setPostContent("");
    navigate("/posts");
  };

  return (
    <form
      className={styles.modal}
      onSubmit={handleSubmit}
      onClick={(event) => event.stopPropagation()}
    >
      <h2 className={styles.title}>Create a New Post</h2>

      <div className={styles.formGroup}>
        <label htmlFor="author">Author Name:</label>
        <input
          id="author"
          type="text"
          placeholder="Enter author name"
          className={styles.input}
          autoFocus
          value={authorName}
          onChange={(event) => setAuthorName(event.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          placeholder="Write your post here..."
          className={styles.textarea}
          rows="4"
          value={postContent}
          onChange={(event) => setPostContent(event.target.value)}
        />
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitButton}>
          Create Post
        </button>

        <button type="button" onClick={()=>navigate("/posts")} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewPost;