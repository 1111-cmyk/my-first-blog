const PostSkeleton = () => {
  return (
    <div className="space-y-4 p-4  shadow-md">
      <div className="w-full h-48 bg-gray-300 rounded-md animate-pulse"></div>

      <div className="w-3/4 h-6 bg-gray-300 rounded-md animate-pulse"></div>

      <div className="w-full h-4 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="w-5/6 h-4 bg-gray-300 rounded-md animate-pulse"></div>
    </div>
  );
};

export default PostSkeleton;
