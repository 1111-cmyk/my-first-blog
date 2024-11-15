import PostSkeleton from "@/components/PostSkeleton/Skeleton";

import { db } from "@/connection/firebaseConfig";
import { fetchPostById } from "@/service/getPosts";
import { collection, getDocs } from "firebase/firestore";
import { MdDateRange } from "react-icons/md";
import React from "react";

//  SinglePost Component
async function SnglePost({ params }) {
  // Extract post ID from URL params
  let currentId = params.id;

  // Fetch the post data by ID
  const post = await fetchPostById(currentId);

  // Log the post data for debugging purposes
  console.log("post", post);

  // Render the post details
  return (
    <div className="flex justify-between items-center w-full py-4 px-8 mt-20">
      {/* Skeleton loader for post image */}
      <div className="h-48 w-96">
        <PostSkeleton />
      </div>

      {/* Content section for post details */}
      <div className="content w-8/12 space-y-5">
        {/* Displaying post title */}
        <h3 className="text-white font-bold text-lg">{post.title}</h3>

        {/* Displaying post completion status */}
        <p className="text-white">{post.completed}</p>

        {/* Displaying post date */}
        <div className="date flex items-center gap-2">
          <p className="font-bold text-white">{post.date} </p>
          <span>
            {/* Date icon */}
            <MdDateRange color="white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SnglePost;

//  Generate Static Params

export async function generateStaticParams() {
  // Fetch all documents from the "my-blog" Firestore collection
  const snapshot = await getDocs(collection(db, "my-blog"));

  // Map through each document and extract the post ID and data
  const posts = snapshot.docs.map((doc) => ({
    id: doc.id, // Get the post ID
    ...doc.data(), // Get the post data (title, content, etc.)
  }));

  // Return the list of post IDs to be used for dynamic routing in Next.js
  return posts.map((post) => ({
    id: post.id, // Returning the id to be used in URL parameters
  }));
}
