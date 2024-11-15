import React from "react";
import Posts from "./pages/posts/page"; // Importing the Posts component
import fetchPosts from "@/service/getPosts"; // Importing the fetchPosts service to retrieve posts data

async function Home() {
  // Fetching posts data asynchronously
  let posts_data = await fetchPosts();

  // Returning the Home component JSX with Posts component and passing posts_data as props
  return (
    <div className="px-8 py-4">
      <Posts posts={posts_data} />{" "}
      {/* Passing the fetched posts data to the Posts component */}
    </div>
  );
}

export default Home;
