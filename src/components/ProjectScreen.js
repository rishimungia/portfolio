import React from "react"

import { MdClose } from "@react-icons/all-files/md/MdClose"
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import projectData from '../data/projectsData'
import HoverButton from "./HoverButton"

const ProjectScreen = ({ projectScreen, setProjectScreen, setCursorHover }) => {
    const data = projectData[projectScreen.id];

    return ( 
        <div 
            className="project-screen-container"
            style={projectScreen.isOpen ? {opacity: 1, pointerEvents: 'unset'} : null}
        >
            <div 
                className="project-screen"
                style={projectScreen.isOpen ? {transform: 'translateY(0px)', zIndex: '20'} : null}
            >
                <div 
                    className="close-btn"
                    onClick={() => {
                        setProjectScreen({id: projectScreen.id, isOpen: false}); 
                        setTimeout(() => setProjectScreen({id: -1, isOpen: false}), 250)} // delay added to prevent 404 error showing during closing animation
                    }
                >
                    <MdClose />
                </div>
                {(data) ? 
                <>
                    {/* Cover Image */}
                    <div 
                        className="cover-image"
                        style={{backgroundImage: `url(`+data.coverImage+`)`}}
                    >
                        {data.repoLink ? <a href={data.repoLink} className="project-repo"><AiFillGithub />Repository</a> : null}
                    </div>

                    <h1>{data.title}</h1>
                    
                    {/* Project Content */}
                    <>{data.content.map((contentBlock) => {
                        return (
                        <>
                            {/* Simple Paragraph */}
                            {contentBlock.paragraph ? 
                            <div className="project-para">
                                {contentBlock.paragraph.title ? <h2>{contentBlock.paragraph.title}</h2> : null}
                                <p>{contentBlock.paragraph.content}</p>
                            </div> : null}
                            
                            {/* Image Paragraph */}
                            {contentBlock.imagePara ?
                            <div className="project-img-para">
                                {(contentBlock.imagePara.style === 0) ? 
                                <>
                                    <div className="project-image" style={{backgroundImage: `url(`+contentBlock.imagePara.image+`)`}}></div>
                                    {contentBlock.imagePara.content ? 
                                    <div>
                                        {contentBlock.imagePara.title ? <h2>{contentBlock.imagePara.title}</h2> : null}
                                        <p>{contentBlock.imagePara.content}</p>
                                    </div> : null}
                                </> : 
                                <>
                                    {contentBlock.imagePara.content ? 
                                    <div>
                                        {contentBlock.imagePara.title ? <h2>{contentBlock.imagePara.title}</h2> : null}
                                        <p>{contentBlock.imagePara.content}</p>
                                    </div> : null}
                                    <div className="project-image" style={{backgroundImage: `url(`+contentBlock.imagePara.image+`)`}}></div>
                                </>}
                            </div> : null}
                            
                            {/* Hover Button */}
                            {contentBlock.button ? 
                            <div className="project-btn-para">
                                {contentBlock.button.title ? <h2>{contentBlock.button.title}</h2> : null}
                                {contentBlock.button.content ? <p>{contentBlock.button.content}</p> : null}

                                <a className="project-btn" href={contentBlock.button.buttonLink}>{contentBlock.button.buttonTitle}</a>
                                {contentBlock.button.buttonDescription ? <p className="button-des">{contentBlock.button.buttonDescription}</p> : null}
                            </div> : null}
                        </>    
                        )
                    })}</> 
                </> : 
                <div className="project-screen-404">
                    <h1>404 Not Found</h1>
                </div>}
                
            </div>
        </div>
    );
}
 
export default ProjectScreen;