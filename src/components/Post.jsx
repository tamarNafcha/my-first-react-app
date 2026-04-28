
import styles from './Post.module.css'
import { useState } from 'react';

function Post({ author, content = "No content provided", onEdit, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  const handleCancle = () => {
    setIsEditMode(false);
    setCurrentContent(content);
  };

  const handleSave = () => {
    setIsEditMode(false);
    onEdit(currentContent);
  };

  return (
    <div className={styles.container}>
      <p className={styles.name}>{author}</p>
      <p className={styles.content}>{content}</p>

      {!isEditMode && (
        <>
          <button className={styles.button + " " + styles.edit} onClick={() => setIsEditMode(true)}>
            Edit
          </button>

          <button className={styles.button + " " + styles.delete} onClick={onDelete}>
            Delete
          </button>
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
  );
}

export default Post;