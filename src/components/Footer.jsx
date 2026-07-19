import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <hr className="border-violet-500 opacity-50 mt-5" />
      <p className="py-8 px-4 w-full text-center font-poppins text-amber-50">
        © {currentYear} ai4devs · Made for developers who love to ship fast.
      </p>
    </footer>
  );
}

export default Footer;
