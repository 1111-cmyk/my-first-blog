import React from "react";

// Header component
function Header() {
  return (
    <header className="h-16 bg-white shadow-lg">
      {/* Navigation bar container */}
      <nav className="container max-w-6xl h-full mx-auto">
        <div className="flex items-center justify-between h-full w-full">
          {/* Website title */}
          <h2 className="text-black font-bold text-lg">My First Blog</h2>

          {/* Navigation links */}
          <div className="right">
            <span>Contact Us</span>
            <span className="ml-4">My First Products</span>
            <span className="ml-4">Careers</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
