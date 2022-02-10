import React from "react"

const ProjectCard = ({ image, title, description, delay, onClick }) => {
    return ( 
        <div 
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="card-blur" onClick={onClick} >
                <p className="card-blur-title">{title}</p>
                <p>Learn More</p>
            </div>
            <div className="image" style={{backgroundImage: `url(`+ image +`)`}}>
            </div>
            
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
 
export default ProjectCard;