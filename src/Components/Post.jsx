import { usePostContext } from "../Context/PostContext";
import { Link } from "react-router-dom";
import { FaHeart, FaRegComment, FaBookmark, FaRegHeart } from "react-icons/fa";

const Post = ({ post }) => {
  const { state, dispatch } = usePostContext();

  return (
    <div className="border-b p-4 mb-4 md:ml-4 md:mr-4 ">
      <div className="flex items-center">
        <img src={post.profileImage} alt={post.name} className="rounded-full w-10 h-10 mr-2" />
        <div>
          <p className="font-bold">{post.name} (@{post.username})</p>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      <p className="mt-2">{post.content}</p>
      <div className="mt-2 flex flex-wrap w-full">
        {post.hashtags.map((tag, index) => (
          <Link key={index} to={`/tag/${tag.replace("#", "")}`} onClick={() => dispatch({ type: "SET_FILTER", payload: tag })} className="text-blue-500 mr-2">
            {tag}
          </Link>
        ))}
      </div>

      <div className="w-full md:h-[400px] h-[200px]">
        {post.image && <img src={post.image} alt="Post" className="mt-2 w-full h-full object-cover rounded-lg" />}
      </div>

      <div className="flex items-center mt-2 space-x-4 justify-evenly">
        <button
        onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: post.id })}
        className="flex items-center space-x-1 cursor-pointer"
      >
        {state.likes[post.id]?.liked ? (
          <FaHeart className="text-xl text-red-500" /> 
        ) : (
          <FaRegHeart className="text-xl text-blue-500  border-blue-500" /> 
        )}
        <span>{state.likes[post.id]?.count || post.likeCount}</span>
      </button>

        <div className="flex items-center space-x-1">
          <FaRegComment className="text-xl text-blue-500  border-blue-500" />
          <span>{post.commentCount}</span>
        </div>

        <div className="flex items-center space-x-1">
          <FaBookmark className="text-xl text-blue-500  border-blue-500" />
          <span>{post.saveCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
