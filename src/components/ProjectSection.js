import React from "react"

import ProjectCard from "./ProjectCard";
import projects from '../data/projectsData';

const ProjectSection = ({ setProjectScreen }) => {
    const delay = 500;
    return (
        <section className="projects-container" id="projects">
                <h1>Projects</h1>
                <div className="project-grid">
                    {
                        projects.map((project) => {
                            return (
                                <ProjectCard 
                                    image={project.cardImage}
                                    title={project.title}
                                    description={project.description}
                                    delay={delay*(project.id % 3)}
                                    onClick={() => setProjectScreen({id: project.id, isOpen: true})}
                                    key={project.id}
                                />
                            )
                        })
                    }
                </div>
        </section> 
    );
}
 
export default ProjectSection;