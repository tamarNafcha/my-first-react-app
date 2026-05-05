import { useOutletContext } from 'react-router';
import NewPost from './NewPost';
import Post from './Post';
import PostPreview from './PostPreview';

function Posts() {
    const { posts, isLoading, error } = useOutletContext();
    return (
        <>
            {isLoading? (
                <p>Loading posts....</p>
            ): error?(
                <p>Error:{error}</p>
            ): (posts.map((post, index) => (
                <PostPreview
                    key={post.id}
                    index={index}
                    title={post.title}
                    body={post.body}
                />
            )))
            }
        </>
    )
}

export default Posts;
