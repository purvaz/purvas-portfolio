import React from 'react';

// const ExperienceCard = ({ companyName, designation, yearsOfService, responsibilities, techTags, skillTags }) => {
//     return (
//       <div className="project-card bg-white rounded-lg p-6 shadow-lg flex justify-between">
//         <div className="flex items-center">
//           <div className='pl-3'>
//             <h1 className="text-2xl text-gray-800 mb-2 pb-2 font-semibold border-b-2 border-b-gray-300">{companyName}</h1>
//             <h2 className="text-gray-700 font-semibold my-1">{designation}</h2>
//             <ul className="list-disc pl-6 text-gray-700">
//               {responsibilities.map((responsibility, index) => (
//                 <li key={index} className="mb-1">{responsibility}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between">
//           <div className='text-right font-semibold'>
//             <p className="text-gray-600">{yearsOfService}</p>
//           </div>
//           <div className="my-3 flex flex-wrap justify-end">
//             {techTags.map(tag => (
//               <span key={tag} className="bg-purple-800 mr-2 mb-2 py-1 px-2 text-white rounded">
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <div className="my-3 flex flex-wrap justify-end">
//             {skillTags.map(tag => (
//               <span key={tag} className="bg-gray-700 mr-2 mb-2 py-1 px-2 text-white rounded">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

const ExperienceCard = ({ companyName, designation, yearsOfService, responsibilities, techTags, skillTags }) => {
    return (
      <div className="project-card bg-white rounded-lg p-6 shadow-lg flex justify-between">
        <div className="flex items-center">
          <div className='pl-3'>
            <h1 className="text-2xl text-gray-800 mb-2 pb-2 font-semibold border-b-2 border-b-gray-300">{companyName}</h1>
            <h2 className="text-gray-700 font-semibold my-1">{designation}</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-1">{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between" style={{ flex: '1 0 calc(40% - 4rem)' }}>
          <div className='text-right font-semibold'>
            <p className="text-gray-600">{yearsOfService}</p>
          </div>
          <div className="my-3 flex flex-wrap justify-end" >
            {techTags.map(tag => (
              <span key={tag} className="bg-orange-700 mr-2 mb-2 py-1 px-2 text-white rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="my-3 flex flex-wrap justify-end" >
            {skillTags.map(tag => (
              <span key={tag} className="bg-gray-700 mr-2 mb-2 py-1 px-2 text-white rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
  
export default ExperienceCard;
