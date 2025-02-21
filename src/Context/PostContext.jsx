import { createContext, useContext, useEffect, useReducer } from "react";
import { postsData } from "../Data/PostsData";

const PostContext = createContext();

const getRandomCount = (id, type) => {
  const storedCounts = JSON.parse(localStorage.getItem("postCounts")) || {};

  if (storedCounts[id]?.[type] !== undefined) {
    return storedCounts[id][type];
  }

  const newCount = Math.floor(Math.random() * (3000 - 10 + 1)) + 10;
  storedCounts[id] = { ...storedCounts[id], [type]: newCount };
  localStorage.setItem("postCounts", JSON.stringify(storedCounts));
 
  return newCount;
};

const getRandomImage = () => `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 10000)}`;

const getInitialLikes = () => JSON.parse(localStorage.getItem("likes")) || {};

const initialState = {
  posts: [],
  likes: getInitialLikes(),
  filterTag: null,
  currentPage: 1,
  itemsPerPage: 10,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };

    case "TOGGLE_LIKE": {
      const postId = action.payload;
      const updatedLikes = {
        ...state.likes,
        [postId]: {
          count: state.likes[postId]?.count ?? getRandomCount(postId, "likeCount"),
          liked: !state.likes[postId]?.liked,
        },
      };

      updatedLikes[postId].count += updatedLikes[postId].liked ? 1 : -1;
      localStorage.setItem("likes", JSON.stringify(updatedLikes));

      return { ...state, likes: updatedLikes };
    }

    case "SET_LIKES":
      return { ...state, likes: action.payload };

    case "SET_FILTER":
      return { ...state, filterTag: action.payload, currentPage: 1 };

    case "SET_PAGE":
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    const updatedData = postsData.map((post) => ({
      ...post,
      image: post.image || getRandomImage(),
    }));

    const storedLikes = getInitialLikes();
    const updatedLikes = { ...storedLikes };

    updatedData.forEach((post) => {
      if (!updatedLikes[post.id]) {
        updatedLikes[post.id] = {
          count: getRandomCount(post.id, "likeCount"),
          liked: false,
        };
      }
    });

    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    dispatch({ type: "SET_POSTS", payload: updatedData });
    dispatch({ type: "SET_LIKES", payload: updatedLikes });
  }, []);

  return <PostContext.Provider value={{ state, dispatch }}>{children}</PostContext.Provider>;
};

export const usePostContext = () => useContext(PostContext);

export default PostProvider;