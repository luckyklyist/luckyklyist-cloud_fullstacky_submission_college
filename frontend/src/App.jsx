import React, { useEffect, useState } from "react";

const ProjectCard = ({ title, description, image, demoLink, sourceLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition-colors duration-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-md text-white transition-colors duration-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      async function fetchProjects() {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "/projects"
        );
        const data = await response.json();
        setProjects(data);
      }
      await fetchProjects();
    }
    fetchData();

    console.log("Projects:", projects);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-lg leading-8 mb-6">
              Hi there! I'm a passionate web developer with a keen eye for
              detail and a love for creating beautiful, intuitive user
              experiences. With a strong background in React.js and a deep
              understanding of modern front-end technologies, I strive to build
              high-quality, performant web applications that not only look great
              but also deliver an exceptional user experience.
            </p>
            <p className="text-lg leading-8 mb-6">
              Throughout my journey, I've honed my skills in responsive design,
              accessibility, and usability principles. I believe that every
              project is an opportunity to learn and grow, and I'm constantly
              exploring new technologies and techniques to stay ahead of the
              curve.
            </p>
            <p className="text-lg leading-8">
              When I'm not coding, you can find me indulging in my love for
              photography, hiking in the great outdoors, or immersing myself in
              a good book. I'm a lifelong learner with a passion for continuous
              improvement, and I'm always excited to take on new challenges and
              collaborate with like-minded individuals.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://wallpapers.com/images/hd/moon-aesthetic-dark-crescent-9c3axo5im20iw41w.jpg"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              sourceLink={project.sourceLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
