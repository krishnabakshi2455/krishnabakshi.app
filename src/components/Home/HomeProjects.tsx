"use client"
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ds-steinteppich.de",
    image: "https://live.staticflickr.com/3620/5834481951_56f883a9e8.jpg", // Replace with your actual image path
    tags: "#Nextjs #Tailwindcss #Monaco Editor #Vercel",
  },
  {
    id: 2,
    title: "beyondjustwork.com",
    image: "https://www.thekerneltrip.com/images/random-forest-vs-extra-trees.jpg", // Replace with your actual image path
    tags: "#Reactjs #Tailwindcss #Scss #Vite #React-router-dom #Redux #Vercel",
  },
  {
    id: 3,
    title: "pcbeheben.de",
    image: "https://wallpaperset.com/w/full/e/5/c/246537.jpg", // Replace with your actual image path
    tags: "#Reactjs #Vite #Tailwindcss #Vercel #Zustand #React DND",
  },
];

const ProjectGallery: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="flex flex-col items-start md:flex-row justify-between md:gap-12 gap-5 px-4 md:px-16 py-8">
      {/* Projects List */}
      <div className="space-y-6 w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-primary">My Projects</h2>
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div key={project.id}>
              <button
                onClick={() => setActiveProject(project)}
                className={`text-2xl font-bold ${activeProject.id === project.id
                  ? "text-primary underline"
                  : "text-gray-700 hover:text-primary"
                  }`}
              >
                {project.id}. {project.title}
              </button>
              <p className="text-gray-500 text-sm">{project.tags}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview */}
      <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden">
        {projects.map((project) => (
          <img
            key={project.id}
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-in-out ${activeProject.id === project.id
              ? "animate-in slide-in-from-right"
                : "translate-x-full opacity-0"
              } hover:translate-x-0`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
