"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cars-ShoeCase By using NextJs Language",
    description : "Developed an innovative Car-Showcase app utilizing Nextjs language, allowing efficient identification of various car models. Implemented a highly responsive website design, ensuring seamless user experience across different devices. Enabled easy navigation and search functionalities, facilitating quick access to desired car information",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CHAITUBARGAL/nextjs-cars-showcase",
    previewUrl: "https://nextjs-cars-showcase-rouge.vercel.app/",
  },
  {
    id: 2,
    title: "Netflix Clone in NextJS    ",
    description: "Developed a Netflix clone application using Next.js framework. Implemented key functionalities such as user authentication, browsing movie/TV show categories, and playing videos. Utilized Next.js features like server-side rendering for improved performance and SEO optimization. Integrated API calls to retrieve movie/TV show data from external sources.",
    image: "/images/projects/2.avif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CHAITUBARGAL/nextjs-netflix",
    previewUrl: "https://nextjs-netflix-lbj0r1v3i-chetanbargal11-gmailcom.vercel.app/",
  },
  {
    id: 3,
    title: "OTP Verification App",
    description: "Developed an OTP-Verification web application using React.js and Bootstrap for the frontend, Node.js for the backend, and MongoDB for the database. Implemented user registration, login, and profile update functionalities to enhance user experience and security.  Successfully utilized React.js components and Bootstrap styling to create a visually appealing and responsive user interface Integrated Node.js API endpoints for seamless communication between the frontend and backend",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CHAITUBARGAL/OTP-Verification",
    previewUrl: "http://chetan-bargal-otp-verification.netlify.app",
  },
  {
    id: 4,
    title: "Chat App",
    description: "Developed a dynamic and interactive Chat Clone App using the MERN Stack, allowing users to engage in real-time conversations with people. Designed a user-friendly interface that facilitated seamless communication and enhanced user experience. Implemented features such as messaging, chat rooms, and notifications to create an immersive and engaging platform. Utilized the MERN Stack framework to ensure efficient data flow, scalability, and optimal performance of the application",
    image: "/images/projects/4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/CHAITUBARGAL/chat-app-frontend",
    previewUrl: "https://chetan-bargal-chat-app.netlify.app/",
  },
  {
    id: 5,
    title: "i-notebook App by using MERN ",
    description: "- Developed a full stack web application called OTP-Verification using React.js and Bootstrap for the frontend, Node.js for the backend, and MongoDB for the database Implemented user registration, login, and profile update functionalities to enhance user experience and engagement. Utilized OTP verification to ensure secure access and protection of user information. Successfully integrated React.js and Bootstrap to create a visually appealing and responsive user interface",
    image: "/images/projects/5.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CHAITUBARGAL/i-notebook-server",
    previewUrl: "https://chetan-bargal-i-notebook.netlify.app/",
  },
  {
    id: 6,
    title: "E-commerse Website",
    description: "",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CHAITUBARGAL/E_commerse_website",
    previewUrl: "https://chaitubargal.github.io/E_commerse_website/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

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
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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