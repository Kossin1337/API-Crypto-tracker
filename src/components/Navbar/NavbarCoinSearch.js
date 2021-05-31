import React, { useState } from "react";

export const NavbarCoinSearch = ({ handleSearch }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    handleSearch(text);
  };

  return (
    <div className="coin-search">
      <input
        type="text"
        placeholder="Search crypto..."
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};
