// Page Header
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex py-6 p-24 bg-white">
      <Link to="/"><img src="https://i.postimg.cc/PL8ysnvT/xceed-logo-black-3x.png" alt="logo" className="h-6" /></Link>
      <h2 className="font-avenir font-bold text-liga-gray m-auto ">Xceed Liga Challenge 2021</h2>
    </div>
  );
}
