import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  nav: {
    background: "green",
    justifyContent: "flex-end"
  },
  a: {
    marginTop: "auto",
    marginBottom: "auto"
  }
}

function Navbar() {
  return (
    <nav className="navbar" style={styles.nav}> 
      <a href="/" style={styles.a}>Welcome</a>
    </nav>
  );
}

export default Navbar;
