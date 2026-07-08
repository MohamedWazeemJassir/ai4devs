import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <hr className="text-gray-700 opacity-100 mt-5" />
      <p className="py-8 px-4 w-full text-center font-mono text-gray-400">
        © {currentYear} ai4devs · Made for developers who love to ship fast.
      </p>
    </footer>
  );
}

export default Footer;
