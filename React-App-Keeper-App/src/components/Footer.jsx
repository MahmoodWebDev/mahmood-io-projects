//jshint esversion:6

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤ Mahmood {year} </p>
    </footer>
  );
}

export default Footer;
