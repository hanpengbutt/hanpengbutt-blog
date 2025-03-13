import { Link } from 'gatsby';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[50px] flex-center bg-white fixed">
      <div className="w-[60%] min-w-[480px] h-full flex-between">
        <Link to='/' className="font-GmarketSansBold text-lg">hanpengbutt-blog</Link>
        <nav className="flex gap-4 items-center">
          <Link to="/about">about</Link>
          <Link to="/posts">posts</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
