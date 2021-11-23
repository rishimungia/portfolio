import ProjectCard from "./ProjectCard";
import projects from '../data/projectsData';

const Projects = ({ setIsHovering, setProjectScreen }) => {
    const delay = 500;
    return (
        <div className="panel">
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="project-grid">
                    {
                        projects.map((project) => {
                            return (
                                <ProjectCard 
                                    setIsHovering={setIsHovering}
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
            </div>
        </div> 
    );
}
 
export default Projects;