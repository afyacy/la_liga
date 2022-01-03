// Page Header
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex p-4 sm:p-6 bg-white">
      <Link to="/"><img src="https://i.postimg.cc/PL8ysnvT/xceed-logo-black-3x.png" alt="logo" className="h-6" /></Link>
      <h2 className="font-avenir font-bold sm:text-liga-gray m-auto text-xs sm:text-lg">Xceed Liga Challenge 2021</h2>
    </div>
  );
}
