"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-[#ADB7BE bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Full Stack",
                1000,
                "AWS Expert",
                1000,
                "Front-end",
                1000,
                "MERN Stack",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Full Stack Developer with 1.8+ years of hands-on experience in React, JavaScript, Node.js, and PostgreSQL, along with experience in AWS Services.
          </p>
          <div>
            {/* <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link> */}
            <button
              onClick={() => {
                // 1. URL for the file (view)
                const viewUrl = "https://drive.google.com/file/d/1zhwY6hM_0BuvlRBsvNWJC1bsDwcvXKsz/view?usp=sharing";

                // 2. URL for direct download
                const fileUrl = "https://drive.google.com/uc?export=download&id=1zhwY6hM_0BuvlRBsvNWJC1bsDwcvXKsz";

                // 3. Open the file in a new tab (view mode)
                window.open(viewUrl, "_blank");

                // 4. Trigger the download (background process)
                const link = document.createElement("a");
                link.href = fileUrl;
                link.download = ""; // Optional: specify filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Resume
            </button>






          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/photo2.jpg"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;