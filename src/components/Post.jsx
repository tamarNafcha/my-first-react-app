import styles from './Post.module.css'
import { useState } from 'react';

function Post({author, content="No content provided"}){

    const [postContent, setPostContent]=useState(content);

    const handleInputChange=(event)=>{
        setPostContent(event.target.value);
    };

    return (
    <div class={styles.container}>
        <p class={styles.name}>{author}</p>
        <p class={styles.content}>{postContent}</p>
        <input
        className={styles.input}
        type="text"
        onChange={handleInputChange}
        placeholder='can edit here post content'        
        ></input>
    </div>
    );  
}

export default Post;