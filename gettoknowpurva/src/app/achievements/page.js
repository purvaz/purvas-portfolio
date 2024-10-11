"use client";

import React from "react";

const achievements = [
  {
    image: "./ribbon.png",
    title: "Distinguished Achievement Award for Academic Excellence",
    details: "Received the Distinguished Achievement Award for Academic Excellence in Computer Science at San Francisco State University",
    foregroundColor: "#FFC533",
    backgroundColor: "#219EBC",
    textColor: "#000",
    year: "May 2024",
  },
  {
    image: "./cap.png",
    title: "Masters of Science, Computer Science",
    details: "Graduated with a Master's Degree in Computer Science from San Francisco State University",
    foregroundColor: "#034363",
    backgroundColor: "#FD9E02",
    textColor: "#fff",
    year: "May 2024",
  },
  {
    image: "./trophy.png",
    title: "Winner at Student Project Showcase Annual Research Competition",
    details: "Won the second place at the Annual Project Showcase for Virtual Reality Training for Post-Earthquake Structural Damage Assessment",
    foregroundColor: "#73BFDC",
    backgroundColor: "#FB8500",
    textColor: "#fff",
    year: "May 2023",
  },
  {
    image: "./cap.png",
    title: "Master's in Computer Science",
    details: "Graduated with a Master's Degree in Computer Science from University of Pune",
    foregroundColor: "#034363",
    backgroundColor: "#FD9E02",
    textColor: "#fff",
    year: "May 2017",
  },
  {
    image: "./ribbon.png",
    title: "Award for Rank 1 in Master's Program",
    details: "Award for securing First Rank throughout the Master's Program in the University",
    foregroundColor: "#73BFDC",
    backgroundColor: "#FB8500",
    textColor: "#fff",
    year: "Aug 2017",
  },
  {
    image: "./scholar.png",
    title: "Late Dattatreya Nilkanth Pujari Scholarship",
    details: "Scholarship and Award for securing Rank 1 throughout the Master's Program in Computer Science",
    foregroundColor: "#FFC533",
    backgroundColor: "#219EBC",
    textColor: "#000",
    year: "Aug 2017",
  },
  {
    image: "./scholar.png",
    title: "Late Mukundrao Wachcasundar Memorial Scholarship",
    details: "Scholarship and Award for securing Rank 1 throughout the Master's Program in Computer Science",
    foregroundColor: "#73BFDC",
    backgroundColor: "#FB8500",
    textColor: "#fff",
    year: "Aug 2017",
  },
  {
    image: "./ribbon.png",
    title: "Award for Rank 2 in Bachelor's Program",
    details: "Award for securing Second Rank in the Bachelor's Program in the University of Pune",
    foregroundColor: "#FFC533",
    backgroundColor: "#219EBC",
    textColor: "#000",
    year: "Aug 2015",
  },
  {
    image: "./cap.png",
    title: "Bachelor of Science, Computer Science",
    details: "Graduated with a Bachelor's Degree in Computer Science from the University of Pune",
    foregroundColor: "#034363",
    backgroundColor: "#FD9E02",
    textColor: "#fff",
    year: "May 2015",
  },
];

const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 min-h-screen">
      {achievements.map((achievement, index) => (
        <div key={index} className="card w-80 mx-auto">
          <div className="card__content relative w-full h-full text-center transition-transform duration-1000">

            {/* Front of the card */}
            <div className="card__front flex flex-row items-center justify-between text-white font-bold p-6 h-full shadow-xl rounded-lg" style={{ backgroundColor: achievement.foregroundColor }}>
              <img src={achievement.image} alt={achievement.title} className="w-28 h-28" />
              <h2 className="ml-4 text-2xl" style={{ color: 'textColor' }}>{achievement.title}</h2>
            </div>

            {/* Back of the card */}
            <div className="card__back flex flex-col items-center justify-center text-white font-bold p-6 h-full shadow-xl rounded-lg" style={{ backgroundColor: achievement.backgroundColor }}>
              <p className="text-lg" style={{ color: 'textColor' }}>{achievement.details}</p>
              <p> ___ </p>
              <h6 className="mt-2 text-sm">{achievement.year}</h6>
            </div>

          </div>
        </div>
      ))}
    </div>

  );
};

export default Achievements;