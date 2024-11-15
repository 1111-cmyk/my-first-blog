import Link from "next/link";
import React from "react";

// Styling object
const style = {
  post_container: `flex flex-col space-y-5 items-center`,
  link: `shadow-md rounded-md w-full min-h-14 bg-white/80 text-center flex items-center justify-center hover:scale-105 transition-all duration-700`,
};

// Component to display posts
function Posts({ posts }) {
  return (
    <div className={style.post_container}>
      {/* Mapping through the posts and rendering them as clickable links */}
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`} // Navigate to a dynamic post page
          className={style.link}
        >
          {post.title} {/* Displaying the post title */}
        </Link>
      ))}
    </div>
  );
}

export default Posts;