import { usePostContext } from "../Context/PostContext";
import Post from "../Components/Post";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostList = () => {
  const { state, dispatch } = usePostContext();
  const { tag, page } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    if (tag) {
      dispatch({ type: "SET_FILTER", payload: `#${tag}` });
    } else {
      dispatch({ type: "SET_FILTER", payload: null });
    }
  
    if (page) {
      const parsedPage = parseInt(page, 10);
      if (state.currentPage !== parsedPage) {  
        dispatch({ type: "SET_PAGE", payload: parsedPage });
      }
    } else {
      dispatch({ type: "SET_PAGE", payload: 1 });
    }
  
    window.scrollTo(0, 0);
  }, [tag, page, dispatch]);
  


  const filteredPosts = state.filterTag ? state.posts.filter(post => post.hashtags.includes(state.filterTag)) : state.posts;

  const indexOfLastPost = state.currentPage * state.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - state.itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="mb-2 ">
      {currentPosts.map(post => <Post key={post.id} post={post} />)}
      <div className="flex justify-center gap-[5%] mt-4 ">
        <button disabled={state.currentPage === 1} onClick={() => navigate(`/page/${state.currentPage - 1}`)} className="bg-[#1DA1F2] text-white px-[25px] cursor-pointer py-[8px]  rounded-[5px]">
          Prev
        </button>
        <button disabled={indexOfLastPost >= filteredPosts.length} onClick={() => navigate(`/page/${state.currentPage + 1}`)} className="bg-[#1DA1F2] cursor-pointer text-white px-[25px]  py-[8px] rounded-[5px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
