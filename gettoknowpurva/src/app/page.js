import me from '../../public/me.png'
import React from 'react';
import Image from "next/image";
import hobbies from '../../public/hobby.png'
import education from '../../public/education.png'
import js from '../../public/js.png'
import python from '../../public/python.png'
import go from '../../public/go.png'
import vue from '../../public/vue.png'
import mysql from '../../public/mysql.png'
import jquery from '../../public/jquery.png'
import mongo from '../../public/mongo.png'
import html from '../../public/html.png'
import css from '../../public/css.png'
import tail from '../../public/tail.png'
import react from '../../public/react.png'
import node from '../../public/node.png'
import next from '../../public/next.png'
import aws from '../../public/aws.png'
import gc from '../../public/gc.png'
import flask from '../../public/flask.png'
import java from '../../public/java.png'
import bs from '../../public/bs.png'
import npm from '../../public/npm.png'
import git from '../../public/git.png'
import vs from '../../public/vs.png'
import unity from '../../public/unity.png'
import rt from '../../public/3t.png'
import st from '../../public/st.png'
import gk from '../../public/gitkraken.png'
import ij from '../../public/ij.jpeg'


const Info = () => {
  return (
      <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-center" >
            Hey there, I&apos;m Purva!
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
    <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full border-t-2 border-t-gray-400 ">
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
        Beyond coding, I&apos;m an avid artist who finds solace in painting and photography. I love hiking and exploring new places, and I&apos;m passionate about learning languages. With an outgoing and analytical personality, I&apos;m approachable and reliable. I value honesty and strive to create impactful solutions. I&apos;m a quick learner who embraces challenges, fueled by my belief in the power of knowledge.
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
          I&apos;m proud to hold not one, but two Master&apos;s degrees in Computer Science. I earned my first Master&apos;s degree at the University of Pune, India, and then went on to secure another from San Francisco State University. And hey, just a little icing on the cake – I happened to do pretty well, with a nearly perfect GPA. With three degrees in my pocket, I&apos;m all set to rock the world of software development and innovation!  🚀📚
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
        <h2 className="text-4xl font-semibold text-center mb-6">Technologies</h2>
        <div className="flex justify-center space-x-10 py-6">
          <Image src={go} width={80} alt="Golang" className="h-1/2" />
          <Image src={vue} width={80} alt="Vue JS" className="h-1/2" />
          <Image src={python} width={70} alt="Python" className="h-1/2" />
          <Image src={js} width={120} alt="JavaScript" className="h-1/2" />
          <Image src={java} width={110} alt="Java" className="h-1/2" />
          <Image src={jquery} width={70} alt="JQuery" className="h-1/2" />
          <Image src={react} width={110} alt="React" className="h-1/2" />
          <Image src={node} width={70} alt="Node" className="h-1/2" />
          <Image src={next} width={80} alt="Next" className="h-1/2" />
        </div>
        <div className="flex justify-center space-x-10 py-6">
          <Image src={mysql} width={70} alt="MySQL" className="h-1/2" />
          <Image src={mongo} width={80} alt="MongoDB" className="h-1/2" />
          <Image src={html} width={70} alt="HTML" className="h-1/2" />
          <Image src={css} width={70} alt="CSS" className="h-1/2" />
          <Image src={tail} width={100} alt="Tailwind" className="h-16" />
          <Image src={bs} width={70} alt="Bootstrap" className="h-1/2" />
          <Image src={flask} width={70} alt="Flask" className="h-1/2" />
        </div>
        <div className="flex justify-center space-x-10 py-6">
          <Image src={aws} width={70} alt="AWS" className="h-1/2" />
          <Image src={gc} width={90} alt="Google Cloud" className="h-1/2" />
          <Image src={npm} width={90} alt="NPM" className="h-10" />
          <Image src={git} width={80} alt="git" className="h-1/2" />
          <Image src={gk} width={80} alt="Gitkraken" className="h-1/2" />
          <Image src={st} width={50} alt="SourceTree" className="h-1/2" />
          <Image src={vs} width={80} alt="vs" className="h-1/2" />
          <Image src={unity} width={60} alt="unity" className="h-1/2" />
          <Image src={ij} width={60} alt="IntelliJ" className="h-1/2" />
          <Image src={rt} width={60} alt="Robo 3T" className="h-1/2" />
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen scroll-smooth">
      {/* <Navigation /> */}
      <Info />
      <AboutMeSection />
      <Education />
      <TechnologiesSection />
      {/* Additional sections */}
    </div>
  );
};

export default Home;

