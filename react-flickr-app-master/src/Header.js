import React from "react";

// Function with header
function Header() {
  return (
    <header style={headerStyle}>
      <h1> Discovering Great Images</h1>
    </header>
  );
}

// Header styling
const headerStyle = {
  // background: "LightSeaGreen",
  background: "#78bc61",
  color: "white",
  textAlign: "center",
  padding: "10px",
  marginLeft: "10px",
  marginRight: "10px",
};

export default Header;
