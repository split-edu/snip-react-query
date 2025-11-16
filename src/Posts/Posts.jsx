import Post from "./Post/Post.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

function Posts() {
  const { isPending, error, data: posts } = useQuery({
    queryKey: ['data'],
    queryFn: async () => await fetchPosts(),
  });

  if (isPending) return 'Učitavanje objava...'

  if (error) return 'Pogreška prilikom dohvata objava: ' + error.message

  return (
    <>
      { posts.length > 0 && posts.map(post => (
        <Post title={post.title} text={post.body} />
      )) }
    </>
  );
}

export default Posts;
