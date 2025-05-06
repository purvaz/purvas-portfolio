import React from 'react';
import ExperienceCard from '../components/card'

const Experience = () => {
  return (
    <div className="experience-page bg-gray-200 min-h-screen">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 gap-10 justify-center">
        <ExperienceCard
            companyName="San Francisco State University"
            yearsOfService="Feb 2023 - June 2023"
            designation="Research Assistant (Software Engineer)"
            responsibilities= {["Developed a modular software system for Post-Earthquake Structural Damage Assessment, enabling engineers to identify structural damage with 95% accuracy in a VR environment, reducing on-site visits.",
              "Built a desktop version with training & assessment modes using Unity and C#, using object-oriented design and reusable components.",
              "Led a performance enhancement initiative, increasing system speed by 25% and piloted rollout to 50+ users with HMD devices."]}
            techTags={['Virtual Reality', 'Unity', 'C#', 'OOPs', "HMD", ]}
            skillTags={['Simulation', 'Problem-Solving', 'User Training', 'Human Research']}
          />
          <ExperienceCard
            companyName="Google"
            yearsOfService="Feb 2023 - June 2023"
            designation="Research Scholar"
            responsibilities= {["Employed design thinking and rapid prototyping to conduct user-centered research, uncovering ethical considerations of AI bias and contributing to developing fairer algorithms.",
              "Leveraged Google mentorship and peer collaboration to hone research skills.",
              "Led discussions, project development, and innovative, rigorous research, gaining valuable insights into cutting-edge methodologies."]}
            techTags={['Computing Research', 'Project Development', 'Innovation', 'AI Bias', 'Fair Algorithms']}
            skillTags={['Collaboration', 'Problem-Solving', 'Leadership', 'Research']}
          />
          <ExperienceCard
            companyName="San Francisco State University"
            yearsOfService="May 2022 - Dec 2023"
            designation="Graduate Teaching Assistant"
            responsibilities= {["Mentored 40+ students in coursework and research by conducting weekly teaching and discussion sessions for 8 courses in the Computer Science Department.",
              "Instructed students in Java and Python, covering advanced topics such as Data Structures, OOPs, and Python libraries including Scikit-learn, Numpy, Pandas, Matplotlib, NLTK, and SciPy.",
              ]}
            techTags={['Java', 'Python', 'DSA', 'OOPs', 'AI/ML']}
            skillTags={['Mentorship', 'Teaching', 'Communication Skills', 'Student Engagement', 'Academic Instruction']}
          />
          <ExperienceCard
            companyName="Maharashtra Knowledge Corporation Limited"
            yearsOfService="Jul 2017 - Dec 2021"
            designation="Senior Software Engineer (Member Technical Development Staff)"
            responsibilities= {[
              "Designed and developed scalable, performance-optimized, secured, and easy-to-maintain solutions, resulting in enhanced capabilities of the e-learning platform.",
              "Spearheaded a cross-functional team of 4 using Agile to launch a project in 3 months. Implemented a novel and intuitive learning workflow, boosting academic success for 400,000+ students and boosting annual revenue by 23%.",
              "Transformed the e-learning platform for remote learning, leading a team of 5 to reach 150,000 students at home during the COVID-19 pandemic, showcasing decisive decision-making and collaborative skills.",
              "Led data-driven optimization of distributed systems architecture using continuous micro-services integration, collaborating with clients, and fostering effective team management to enhance product performance and ensure system efficiency.",
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
              "Developed and integrated a new dashboard module in a Fintech app, substantially expanding product functionality and broadening its impact, resulting in a 21% increase in user engagement and improved overall performance.",
              "Utilized Java, Spring MVC, AngularJS, MongoDB, MySQL, and Oracle for application development.",
              "Identified and fixed bugs through rigorous unit testing, benchmarking, and troubleshooting, maintaining system functionality."
            ]}
            techTags={["Java", "Spring MVC", "AngularJS", "MongoDB", "MySQL", "Oracle", "Application Development"]}
            skillTags={["Problem-Solving", "Troubleshooting", "Performance Optimization"]}
          />
          <ExperienceCard
            companyName="University of Pune"
            yearsOfService="July 2018 - Dec 2020"
            designation="Visiting Faculty"
            responsibilities= {[
              "Delivered interactive and engaging lectures to 30+ students as a visiting faculty, teaching Introduction to Cyber/Information Security.",
              "Focused on advanced networking and cybersecurity concepts, ISO/OSI architectural models, and TCP/IP protocols."
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
