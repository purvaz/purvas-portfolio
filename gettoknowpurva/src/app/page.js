import me from '../../public/me.png'
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import hobbies from '../../public/hobby.png'
import education from '../../public/education.png'
import js from '../../public/js.png'
import python from '../../public/python.png'
import go from '../../public/go.png'


const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-5 text-white text-center">
      <div className="container mx-auto space-x-12 text-lg">
        <Link href="/">
          <button className="btn-nav">About Me</button>
        </Link>
        <Link href="/expericence">
          <button className="btn-nav">Experience</button>
        </Link>
        <Link href="/projects">
          <button className="btn-nav">Projects</button>
        </Link>
      </div>
    </nav>
  );
};
const Info = () => {
  return (
      <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-center">
            Hey there, I'm Purva!
          </h1>
          <p className="text-gray-600 text-xl text-center py-5">
            I am passionate about coding and building cool things.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            width={400}
            height={330}
            className="rounded-full ml-4"
            src={me}
            alt="Profile"
          />
        </div>
      </div>
  );
};

const AboutMeSection = () => {
  return (
    <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full border-t-2 border-t-gray-400">
      <div className="w-1/2 flex justify-center">
        <Image
          width={700}
          height={550}
          className="rounded-full mr-4"
          src={hobbies}
          alt="Profile"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-semibold text-center">
          A few things about me...
        </h1>
        <p className="text-gray-600 text-xl text-center py-5">
        Beyond coding, I'm an avid artist who finds solace in painting and photography. I love hiking and exploring new places, and I'm passionate about learning languages. With an outgoing and analytical personality, I'm approachable and reliable. I value honesty and strive to create impactful solutions. I'm a quick learner who embraces challenges, fueled by my belief in the power of knowledge.
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full border-t-2 border-t-gray-400">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-center">
            A little about my education...
          </h1>
          <p className="text-gray-600 text-xl text-center py-5">
          I'm proud to hold not one, but two Master's degrees in Computer Science. I earned my first Master's degree at the University of Pune, India, and then went on to secure another from San Francisco State University. And hey, just a little icing on the cake – I happened to do pretty well, with a nearly perfect GPA. With three degrees in my pocket, I'm all set to rock the world of software development and innovation!  🚀📚
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            width={700}
            height={500}
            className="rounded-full ml-4"
            src={education}
            alt="Profile"
          />
        </div>
      </div>
  );
};

const TechnologiesSection = () => {
  return (
    <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full border-t-2 border-t-gray-400">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Technologies</h2>
        <div className="flex justify-center space-x-10">
          {/* Add logos for each technology here */}
          <Image src={go} width={70} alt="Golang" className="h-1/2" />
          <Image src={python} width={70} alt="Python" className="h-1/2" />
          <Image src={js} width={120} alt="JavaScript" className="h-1/2" />
          {/* Add more logos here */}
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen scroll-smooth">
      <Navigation />
      <Info />
      <AboutMeSection />
      <Education />
      <TechnologiesSection />
      {/* Additional sections */}
    </div>
  );
};

export default Home;

