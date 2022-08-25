import React from "react";

function Footer() {
  const footeryear = new Date().getFullYear();
  return (
    <footer
      className="footer p-10 bg-gray-700 text-primary-content footer-center"
      style={{ padding: "0.5px" }}
    >
      <div>
        <svg></svg>
        <p>Copyright &copy; {footeryear} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
