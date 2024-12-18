"use client";

import { useState, useEffect } from "react";
import { fetchedHomeProjectsAtom } from "../jotai/AtomStore";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { Github } from "lucide-react";

// Define the Project interface to match your schema
interface Project {
  _id: string;
  title: string;
  description: string;
  sourcecodelink: string;
  livelink: string;
  thumbnail: string; // Adjusted to match "thumbnail.asset->url" from the schema
}

const ProjectGallery: React.FC = () => {
  const fetchedProjects = useAtomValue(fetchedHomeProjectsAtom) as Project[];
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Sync fetched projects with local state
  useEffect(() => {
    if (fetchedProjects.length > 0) {
      setProjects(fetchedProjects);
      setActiveProject(fetchedProjects[0]); // Set the first project as active by default
    }
  }, [fetchedProjects]);

  return (
    <div className="flex flex-col items-start md:flex-row justify-between md:gap-12 px-4 md:px-16 py-8">
      {/* Projects List */}
      <div className="space-y-6 w-full md:w-1/2">
        <h2 className="text-5xl font-semibold text-primary">My Projects</h2>
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div key={project._id} className="flex flex-col gap-2 items-start">
              <button
                onClick={() => setActiveProject(project)}
                className={`text-3xl font-bold ${activeProject?._id === project._id
                    ? "text-primary underline bg-transparent"
                    : "text-gray-700 hover:text-primary duration-300 bg-transparent"
                  }`}
              >
                {project.title}
              </button>
              <p className="text-gray-500 text-sm">{project.description}</p>
              <Link href={project.sourcecodelink} className="flex underline gap-2 text-primary">
              <Github/>
              Source Code
              </Link>

              <Link href={project.livelink} className="text-primary underline">
                Live Link
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview */}
      <div className="relative w-full md:w-1/2 md:h-[400px] h-[250px] overflow-hidden">
        {projects.map((project) => (
      
            <img
              key={project._id}
              src={project.thumbnail}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-in-out ${activeProject?._id === project._id
                ? "animate-in slide-in-from-right"
                : "translate-x-full opacity-0"
                }`}
            />
         
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
