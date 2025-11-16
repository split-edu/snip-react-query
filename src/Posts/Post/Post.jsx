function Post({ title, text }) {
  return (
    <div className="flex flex-col justify-between my-4 max-w-xl mx-auto">
      <div className="text-green-300">{ title }</div>
      <div>{ text }</div>
    </div>
  );
}

export default Post;
