"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Dummy Tag Component
const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition ${isSelected
        ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
        : "border-white text-white hover:bg-white hover:text-black"
        }`}
    >
      {name}
    </button>
  );
};

// Card Component
const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  // Clean gitUrl if it starts with a /
  const cleanedGitUrl = gitUrl.startsWith("/") ? gitUrl.slice(1) : gitUrl;

  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-lg h-full flex flex-col justify-between">
      <div>
        <img
          src={imgUrl}
          alt={title}
          className="rounded-md mb-4 w-full h-48 object-cover"
        />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={cleanedGitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600"
        >
          GitHub
        </a>
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500"
        >
          Preview
        </a>
      </div>
    </div>
  );
};

// Main Component
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const projectsData = [
    {
      id: 6,
      title: "Doctor Appointment Booking App",
      description:
        "Developed a doctor appointment app using Next.js, React.js, Strapi, and Tailwind CSS, with calendar and time slot options. Configured Strapi CMS, used RestAPI for data management, and integrated Kind authentication for secure logins. Added features like appointment cancellation, appointment history, and email confirmations for bookings.",
      image: "/images/projects/7.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CHAITUBARGAL/doctor-appointment-nextjs",
      previewUrl: "https://doctor-appointment-nextjs.vercel.app/",
    },
    {
      id: 1,
      title: "Cars-ShoeCase By using NextJs Language",
      description:
        "Developed an innovative Car-Showcase app utilizing Nextjs language, allowing efficient identification of various car models. Implemented a highly responsive website design, ensuring seamless user experience across different devices. Enabled easy navigation and search functionalities, facilitating quick access to desired car information",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CHAITUBARGAL/nextjs-cars-showcase",
      previewUrl: "https://nextjs-cars-showcase-rouge.vercel.app/",
    },
    {
      id: 3,
      title: "OTP Verification App",
      description:
        "Developed an OTP-Verification web application using React.js and Bootstrap for the frontend, Node.js for the backend, and MongoDB for the database. Implemented user registration, login, and profile update functionalities to enhance user experience and security.",
      image: "/images/projects/3.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CHAITUBARGAL/OTP-Verification",
      previewUrl: "http://chetan-bargal-otp-verification.netlify.app",
    },
    {
      id: 4,
      title: "Chat App",
      description:
        "Developed a dynamic and interactive Chat Clone App using the MERN Stack. Implemented features like messaging, chat rooms, and notifications for real-time communication.",
      image: "/images/projects/4.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/CHAITUBARGAL/chat-app-frontend",
      previewUrl: "https://chetan-bargal-chat-app.netlify.app/",
    },
    {
      id: 5,
      title: "i-notebook App by using MERN",
      description:
        "Developed a full stack i-notebook app with authentication and secure notes management using MERN stack. Enabled user registration, login, and CRUD operations on notes.",
      image: "/images/projects/5.jpeg",
      tag: ["All", "Web"],
      gitUrl: "/https://github.com/CHAITUBARGAL/i-notebook-server",
      previewUrl: "https://chetan-bargal-i-notebook.netlify.app/",
    },
    {
      id: 2,
      title: "Netflix Clone in NextJS",
      description:
        "Developed a Netflix clone application using Next.js framework. Included user authentication, category browsing, and server-side rendering for better performance.",
      image: "/images/projects/2.avif",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CHAITUBARGAL/nextjs-netflix",
      previewUrl:
        "https://nextjs-netflix-lbj0r1v3i-chetanbargal11-gmailcom.vercel.app/",
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;



// "use client";
// import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

// const projectsData = [
//   {
//     id: 6,
//     title: " Doctor Appointment Booking App",
//     description: "Developed a doctor appointment app using Next.js, React.js, Strapi, and Tailwind CSS, with calendar and time slot options.    Configured Strapi CMS, used RestAPI for data management, and integrated Kind zuthentication for secure logins. Added features like appointment cancellation,     appointment history, and email confirmations for bookings.",
//     image: "/images/projects/7.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/CHAITUBARGAL/doctor-appointment-nextjs",
//     previewUrl: "https://doctor-appointment-nextjs.vercel.app/",
//   },

//   {
//     id: 1,
//     title: "Cars-ShoeCase By using NextJs Language",
//     description: "Developed an innovative Car-Showcase app utilizing Nextjs language, allowing efficient identification of various car models. Implemented a highly responsive website design, ensuring seamless user experience across different devices. Enabled easy navigation and search functionalities, facilitating quick access to desired car information",
//     image: "/images/projects/1.png",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/CHAITUBARGAL/nextjs-cars-showcase",
//     previewUrl: "https://nextjs-cars-showcase-rouge.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "OTP Verification App",
//     description: "Developed an OTP-Verification web application using React.js and Bootstrap for the frontend, Node.js for the backend, and MongoDB for the database. Implemented user registration, login, and profile update functionalities to enhance user experience and security.  Successfully utilized React.js components and Bootstrap styling to create a visually appealing and responsive user interface Integrated Node.js API endpoints for seamless communication between the frontend and backend",
//     image: "/images/projects/3.jpg",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/CHAITUBARGAL/OTP-Verification",
//     previewUrl: "http://chetan-bargal-otp-verification.netlify.app",
//   },
//   {
//     id: 4,
//     title: "Chat App",
//     description: "Developed a dynamic and interactive Chat Clone App using the MERN Stack, allowing users to engage in real-time conversations with people. Designed a user-friendly interface that facilitated seamless communication and enhanced user experience. Implemented features such as messaging, chat rooms, and notifications to create an immersive and engaging platform. Utilized the MERN Stack framework to ensure efficient data flow, scalability, and optimal performance of the application",
//     image: "/images/projects/4.jpg",
//     tag: ["All", "Mobile"],
//     gitUrl: "https://github.com/CHAITUBARGAL/chat-app-frontend",
//     previewUrl: "https://chetan-bargal-chat-app.netlify.app/",
//   },
//   {
//     id: 5,
//     title: "i-notebook App by using MERN ",
//     description: "- Developed a full stack web application called OTP-Verification using React.js and Bootstrap for the frontend, Node.js for the backend, and MongoDB for the database Implemented user registration, login, and profile update functionalities to enhance user experience and engagement. Utilized OTP verification to ensure secure access and protection of user information. Successfully integrated React.js and Bootstrap to create a visually appealing and responsive user interface",
//     image: "/images/projects/5.jpeg",
//     tag: ["All", "Web"],
//     gitUrl: "/https://github.com/CHAITUBARGAL/i-notebook-server",
//     previewUrl: "https://chetan-bargal-i-notebook.netlify.app/",
//   },
//   {
//     id: 2,
//     title: "Netflix Clone in NextJS    ",
//     description: "Developed a Netflix clone application using Next.js framework. Implemented key functionalities such as user authentication, browsing movie/TV show categories, and playing videos. Utilized Next.js features like server-side rendering for improved performance and SEO optimization. Integrated API calls to retrieve movie/TV show data from external sources.",
//     image: "/images/projects/2.avif",
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/CHAITUBARGAL/nextjs-netflix",
//     previewUrl: "https://nextjs-netflix-lbj0r1v3i-chetanbargal11-gmailcom.vercel.app/",
//   },

// ];

// const ProjectsSection = () => {
//   const [tag, setTag] = useState("All");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleTagChange = (newTag) => {
//     setTag(newTag);
//   };

//   const filteredProjects = projectsData.filter((project) =>
//     project.tag.includes(tag)
//   );

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   return (
//     <section id="projects">
//       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
//         My Projects
//       </h2>
//       <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
//         <ProjectTag
//           onClick={handleTagChange}
//           name="All"
//           isSelected={tag === "All"}
//         />
//         <ProjectTag
//           onClick={handleTagChange}
//           name="Web"
//           isSelected={tag === "Web"}
//         />
//         <ProjectTag
//           onClick={handleTagChange}
//           name="Mobile"
//           isSelected={tag === "Mobile"}
//         />
//       </div>
//       <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
//         {filteredProjects.map((project, index) => (
//           <motion.li
//             key={index}
//             variants={cardVariants}
//             initial="initial"
//             animate={isInView ? "animate" : "initial"}
//             transition={{ duration: 0.3, delay: index * 0.4 }}
//           >
//             <ProjectCard
//               key={project.id}
//               title={project.title}
//               description={project.description}
//               imgUrl={project.image}
//               gitUrl={project.gitUrl}
//               previewUrl={project.previewUrl}
//             />
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default ProjectsSection;