import { useNavigate } from "react-router";
import styles from "./Post.module.css"

function PostPreview({index, title, body = "No content provided" }){

    let navigate= useNavigate();

    const handleClick=()=>{
        navigate(`/posts/${index}`)
    }; 

    return(
        <div className={styles.container} onClick={handleClick}>
            <p className={styles.name}>{title.slice(0,15)}...</p>
            <p className={styles.content}>{body.slice(0,20)}...</p>
        </div>
    );
};
export default PostPreview;