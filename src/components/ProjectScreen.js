import { MdClose } from "react-icons/md";
import projectData from '../data/projects.json';

const ProjectScreen = ({ projectScreen, setProjectScreen }) => {
    const data = projectData[projectScreen.id];

    return ( 
        <div 
            className="project-screen-container"
            style={projectScreen.isOpen ? {opacity: 1, pointerEvents: 'unset'} : null}
        >
            <div 
                className="project-screen"
                style={projectScreen.isOpen ? {transform: 'translateY(0px)'} : null}
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
                    <div 
                        className="cover-image"
                        style={{backgroundImage: `url(`+data.coverImage+`)`}}
                    ></div>

                    <h1>{data.title}</h1>
                    
                    <>{data.content.map((contentBlock) => {
                        return (
                        <>
                            {contentBlock.paragraph ? 
                            <div className="project-para">
                                {contentBlock.paragraph.title ? <h2>{contentBlock.paragraph.title}</h2> : null}
                                <p>{contentBlock.paragraph.content}</p>
                            </div> : null}

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