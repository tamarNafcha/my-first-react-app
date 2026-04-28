
import './App.css'
import NewPost from './components/NewPost';
import Post from './components/Post'
import { useState } from 'react';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [posts, setPosts] = useState([
    { author: "Tamar Nafcha", content: "This is my first React project, And I realy like it" },
    { author: "Sara Levi", content: "This is my second React project" },
    { author: "Yehudit Israel", content: "I have been developing software in React for many years." },
    { author: "Ayala Sapir" }
  ]);

  const handleEditPost = (index, newContent) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index].content = newContent;
      return updatedPosts;
    });
  };

  const handleCreateNewPost = (author, content) => {
    setPosts((prevPosts) => [...prevPosts, { author, content }]);
    setIsFormOpen(false);
  };

  const handleDeletePost = (index) => {
    setPosts((prevPosts) => prevPosts.filter((post, i) => i !== index));
  };

  const handleLogPost = () => {
    console.log("Current posts array:", posts);
  };

  const handleCreateNewPostClick = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button" onClick={handleCreateNewPostClick}>Create New Post</button>
        <button className="button" onClick={handleLogPost}>Log Posts to Console--</button>
      </div>

      {posts.map((post, index) => (
        <Post
          key={index}
          author={post.author}
          content={post.content}
          onEdit={(newContent) => handleEditPost(index, newContent)}
          onDelete={() => handleDeletePost(index)}
        />
      ))}

      {isFormOpen && (
        <div className="modalbackdrop" onClick={handleClose}>
          <NewPost onClose={handleClose} onCreate={handleCreateNewPost} />
        </div>
      )}
    </>
  );
}

export default App;