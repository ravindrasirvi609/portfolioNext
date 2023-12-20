"use client"
import { useRouter } from "next/router";
import React from "react";

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProjectDetails: React.FC = () => {


  // Sample projectsData - Replace with your actual data source
  const projectsData: Project[] = [
    { id: 1, name: "operanr Next", description: "Pharma students and conference management system." },
    { id: 2, name: "Project 2", description: "Description for Project 2" },
    // Add more projects as needed
  ];

  // Find the project by ID
  const project = projectsData.find((project) => project.id === Number(1));

  // Guard clause for missing project
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
      <p className="mb-4">{project.description}</p>
      <p className="text-gray-500">ID: {project.id}</p>
    </div>
  );
};

export default ProjectDetails;
