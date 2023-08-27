import React from 'react';
import ExperienceCard from '../components/card'

const Experience = () => {
  return (
    <div className="experience-page bg-gray-200 min-h-screen">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 gap-10 justify-center">
            <ExperienceCard
            companyName="Google"
            yearsOfService="Feb 2023 - June 2023"
            designation="Research Scholar"
            responsibilities= {["Participated in Google's CSRMP, supporting historically marginalized students in computing research pathways.",
              "Teamed up with a Google mentor and peers, enhancing research skills and contributing to the computing research community.",
              "Led discussions, project development, and innovative, rigorous research, gaining valuable insights into cutting-edge methodologies."]}
            techTags={['Computing Research', 'Project Development', 'Innovation']}
            skillTags={['Collaboration', 'Problem-Solving', 'Leadership']}
          />
          <ExperienceCard
            companyName="Maharashtra Knowledge Corporation Limited"
            yearsOfService="Jul 2017 - Dec 2021"
            designation="Senior Software Engineer (Member Technical Development Staff)"
            responsibilities= {[
              "Designed and developed scalable, performance-optimized, secured, and easy-to-maintain solutions, resulting in improved system efficiency and reliability.",
              "Spearheaded a team of 4 individuals in a time-sensitive project, successfully launching it and facilitating the academic success of over 400,000 students within 3 months.",
              "Led a team of 5 software engineers for a year, overseeing a critical module in a legacy application.",
              "Conducted client interactions, distributed project tasks, and ensured effective team management.",
              "Utilized analytical skills for data modeling, information classification, and API integration.",
              "Leveraged knowledge of design principles and software architecture to deliver robust software solutions."]}
            techTags={["Software Engineering", "Scalable Solutions", "Optimization", "System Efficiency", "Data Modeling", "Golang", "VueJS", "JavaScript"]}
            skillTags={["Team Leadership", "Project Management", "Problem-Solving", "Time Management", "Team Management", "Analytical Skills"]}
          />
          <ExperienceCard
            companyName="Omniscient Technologies Pvt Ltd"
            yearsOfService="Dec 2016 - July 2017"
            designation="Project Trainee"
            responsibilities= {[
              "Developed and integrated new modules in a legacy financial technology application as a full-stack developer intern, contributing to various stages of the product lifecycle.",
              "Utilized Java, Spring MVC, AngularJS, MongoDB, MySQL, and Oracle for application development.",
              "Conducted developer-level testing and actively resolved software issues to enhance system performance."
            ]}
            techTags={["Java", "Spring MVC", "AngularJS", "MongoDB", "MySQL", "Oracle", "Application Development"]}
            skillTags={["Problem-Solving", "Troubleshooting", "Performance Optimization"]}
          />
          <ExperienceCard
            companyName="University of Pune"
            yearsOfService="July 2018 - Dec 2020"
            designation="Visiting Faculty"
            responsibilities= {[
              "Delivered lectures as a visiting faculty member on Introduction to Cyber/Information Security at the Institute of Bioinformatics and Biotechnology."
            ]}
            techTags={["Cybersecurity", "Information Security"]}
            skillTags={["Teaching", "Curriculum Design", "Public Speaking"]}
          />
        </div>
      </div>
    </div>
  );
};


export default Experience;
