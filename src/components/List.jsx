import React from 'react';

function List({ emojis }) {
  const handleCopy = (emoji) => {
    navigator.clipboard.writeText(emoji);
  };

  return (
    <div>
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="border-t-2 border-b-2 border-gray-300 hover:bg-gray-300 relative"
        >
          <div className="my-2 text-left pl-4">
            <p className="text-lg">
              {emoji.emoji} {emoji.title}
            </p>
          </div>
          <div className="absolute top-0 left-0 right-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={() => handleCopy(emoji.emoji)}
              className="ml-auto py-2 cursor-pointer text-right pr-4 text-gray-400"
            >
              Emoji'yi Kopyala
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
