import me from '../../public/me.png'
import Link from 'next/link';
import React from 'react';
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4 text-white text-center">
      <div className="container mx-auto space-x-4">
        <Link href="/">
          <button className="btn-nav">Home</button>
        </Link>
        <Link href="/about">
          <button className="btn-nav">About</button>
        </Link>
        <Link href="/contact">
          <button className="btn-nav">Contact</button>
        </Link>
      </div>
    </nav>
  );
};
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <div className="container mx-auto p-20 flex items-center justify-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-center">
            Hey there, I'm Purva!
          </h1>
          <p className="text-gray-600 text-lg text-center py-5">
            I am passionate about coding and building cool things.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            width={250}
            height={250}
            className="rounded-full ml-4"
            src={me}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
