import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <span className="text-xl font-bold"></span>

        {/* Rights */}
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chetan-bargal-cb7673/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7s1.7.8 1.7 1.7c0 1-.8 1.7-1.7 1.7zm13.5 10.3h-3v-4.5c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3.9-.1.2-.1.5-.1.8v4.6h-3s.1-7.5 0-8.3h3v1.2c.4-.6 1.1-1.4 2.7-1.4 2 0 3.5 1.3 3.5 4.2v4.3z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/CHAITUBARGAL/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.3-3.9-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6-.7.6-.7-.4-.7-.9-1-1.4-1.2-.4-.2-.8-.6-.8-1.2 0-1.1.7-1.6 1.5-1.9.4-.2 1.1-.1 1.6.1.5-.1 1.2-.2 1.8-.2.6 0 1.3.1 1.8.2.5-.2 1.2-.3 1.6-.1.8.3 1.5.8 1.5 1.9 0 .6-.4 1-.8 1.2-.6.2-1.1.5-1.4 1.2 0 0-.4.8.6.7.5 0 1.1-1.1 1.7-1.1 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.5 0 0-.7 2-3.9 1.3v2.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
            </svg>
          </a>

          {/* Add more icons here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
//       <div className="container p-12 flex justify-between">
//         <span>LOGO</span>
//         <p className="text-slate-600">All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;