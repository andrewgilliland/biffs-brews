import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="center">&copy; Biff's Brews {new Date().getFullYear()}</p>
    </footer>
  );
}
