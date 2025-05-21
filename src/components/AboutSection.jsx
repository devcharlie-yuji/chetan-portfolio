"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>TailwindCSS</li>
        <li>Amazon Web Services</li>
        <li>REST API</li>

        <li>Redux</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SavitriBai Phule Pune University</li>
        <li>Bacholor of Engineering</li>
        <li>Stream : Information Technology</li>
      </ul>
    ),
  },
  {
    title: "Developer Tools",
    id: "developer-tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Git</li>
        <li>Docker</li>
        <li>Visual Studio Code</li>
      </ul>
    ),
  },
  {
    title: "AWS Services",
    id: "aws-services",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS S3</li>
        <li>AWS DynamoDB</li>
        <li>AWS Lambda</li>
        <li>AWS EC2</li>
        <li>AWS CloudWatch</li>
        <li>AWS API Gateway</li>
        <li>AWS Amplify</li>
        <li>AWS Cognito</li>
        <li>Amazon RDS PostgreSQL</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer Coursera</li>
        <li>Front-end Developer Coursera</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Full Stack Developer with +1.8 years of hands-on experience in React, JavaScript, Node.js, and MongoDB, along with experience in AWS, delivering responsive and dynamic user interfaces.
            Expertise in RESTful API development, efficiently handling data storage and retrieval using AWS RDS and other relational databases.
            AWS Expert, skilled in Lambda, API Gateway, DynamoDB, and IoT Core, ensuring real-time data streaming and efficient backend workflows for high-demand environments.
            Demonstrated ability to optimize performance for high-traffic applications, focusing on reliability and scalability.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("aws-services")}
              active={tab === "aws-services"}
            >
              {" "}
              AWS Services{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("developer-tools")}
              active={tab === "developer-tools"}
            >
              {" "}
              Developer Tools{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;