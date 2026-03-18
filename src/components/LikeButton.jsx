import { useState, useEffect } from "react";

export default function LikeButton({ id }) {
  // Track like state
  const [liked, setLiked] = useState(false);

  // Load likes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("likes") || "[]";
    const likes = JSON.parse(saved);

    if (likes.includes(id)) {
      setLiked(true);
    }
  }, [id]);

  // Toggle like and save to localStorage
  const handleClick = () => {
    const saved = localStorage.getItem("likes") || "[]";
    let likes = JSON.parse(saved);

    if (likes.includes(id)) {
      likes = likes.filter((l) => l !== id);
      setLiked(false);
    } else {
      likes.push(id);
      setLiked(true);
    }

    localStorage.setItem("likes", JSON.stringify(likes));
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-3 py-1 rounded-full 
        flex items-center gap-2 
        transition-colors duration-200
        ${liked ? "bg-red-100 text-red-600" : "bg-gray-200 text-gray-800"}
      `}
    >
      <span>{liked ? "❤️" : "🤍"}</span>
      <span>{liked ? "Liked" : "Like"}</span>
    </button>
  );
}