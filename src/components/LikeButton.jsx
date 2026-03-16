import { useState } from "react";

export default function LikeButton() {
  // Track if the card is liked
  const [liked, setLiked] = useState(false);

  // Toggle liked state on click
  const handleClick = () => {
    setLiked(!liked);
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
      {/* Heart icon */}
      <span>{liked ? "❤️" : "🤍"}</span>
      {/* Text */}
      <span>{liked ? "Liked" : "Like"}</span>
    </button>
  );
}