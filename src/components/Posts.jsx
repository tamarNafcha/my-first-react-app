
import { Outlet, useNavigate } from 'react-router';
import NewPost from './NewPost';
import Post from './Post'
// import PostList from './PostList'
import styles from './Posts.module.css' 
import { useState, useEffect } from 'react';

function Posts() {
    // const [isFormOpen, setIsFormOpen] = useState(false);

    let navigate= useNavigate();

    const [posts, setPosts] = useState([
        // { author: "Tamar Nafcha", content: "This is my first React project, And I realy like it" },
        // { author: "Sara Levi", content: "This is my second React project" },
        // { author: "Yehudit Israel", content: "I have been developing software in React for many years." },
        // { author: "Ayala Sapir" }
    ]);

    const [isLoading, setIsLoading]= useState(true);
    const [error, setError]=useState(null);

   useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/posts55555")
    .then((res)=>{
        if(!res.ok)
        {
            throw new Error("Fetching posts failed");
        } 
        return res.json();      
    })
    .then((data)=>{
        setPosts(data),
        setIsLoading(false);
    })
    .catch((err)=>{
        setError(err.message);
        setIsLoading(false);
        setPosts([]);
    });
   },[]);

    const handleEditPost = (index, newContent) => {
        setPosts((prevPosts) => {
            const updatedPosts = [...prevPosts];
            updatedPosts[index].body = newContent;
            return updatedPosts;
        }); 
    };

    const handleCreateNewPost = (title, body) => {
        setPosts((prevPosts) => [...prevPosts, { title, body }]);
    };

    const handleDeletePost = (index) => {
        setPosts((prevPosts) => prevPosts.filter((post, i) => i !== index));
    };

    const handleLogPost = () => {
        console.log("Current posts array:", posts);
    };

    const handleCreateNewPostClick = () => {
        navigate("new");
    };

    const handleClose = () => {
        
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className={styles.button} onClick={handleCreateNewPostClick}>Create New Post</button>
                <button className={styles.button} onClick={handleLogPost}>Log Posts to Console--</button>
            </div>

            <Outlet context={{posts, error, isLoading ,onCreate: handleCreateNewPost, onEdit: handleEditPost }}/>          
        </>
    );
}

export default Posts;
