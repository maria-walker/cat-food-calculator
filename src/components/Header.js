import React from "react";
import cat5 from "../images/cat5.jpg";

const Header = () => {
  return (
    <div>
      <img className="cat-image" src={cat5} alt="tortie cat" />
      <h1>Feed Poppy</h1>
      <h2>Cat Food Calculator</h2>
    </div>
  );
};

export default Header;
