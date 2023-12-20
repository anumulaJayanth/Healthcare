import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, title, text, to }) {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: '#000', // Set text color to #000
  };

  return (
    <Link to={to} style={linkStyle} className="menuCard">
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1 style={{ color: '#000' }}>{title}</h1>
        <p style={{ color: '#000' }}>{text}</p>
      </div>
    </Link>
  );
}

export default MenuItem;
