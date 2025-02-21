import { usePostContext } from "../Context/PostContext";

const LikeButton = ({ postId }) => {
  const { state, dispatch } = usePostContext();
  const likes = state.likes[postId]?.count ?? 0; 
  const isLiked = state.likes[postId]?.liked ?? false;
  

  const handleLike = () => {
    dispatch({ type: "TOGGLE_LIKE", payload: postId });
  };

  return (
    <button className="mt-2 flex items-center cursor-pointer" onClick={handleLike}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isLiked ? "red" : "none"}
        stroke={isLiked ? "red" : "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 transition-all duration-200"
      >
        <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
      </svg>
      <span className="ml-2">{likes}</span>
    </button>

    
  );
};

export default LikeButton;
