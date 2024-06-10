import Image from 'next/image';
import { useEffect } from 'react';

import styles from './ProjectScreen.module.scss';

import { MdClose } from "react-icons/md";
import { AiFillGithub } from 'react-icons/ai';

import projectsData from '@/utils/projectData';

export default function ProjectScreen ({ projectScreen, setProjectScreen }) {
    const data = projectsData[projectScreen?.id];

    useEffect(() => {
        if (projectScreen?.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                document.body.style.overflow = 'unset';
            }, 300)
        }
    }, [projectScreen])

    return (
        <div 
            className={styles.projectScreen}
            style={projectScreen?.isOpen ? {opacity: 1, pointerEvents: 'unset'} : null}
        >
            <div 
                className={styles.projectContainer}
                style={projectScreen?.isOpen ? {transform: 'translateY(0px)', zIndex: '20'} : null}
            >
                <div 
                    className={styles.closeBtn}
                    onClick={() => {
                        setProjectScreen({id: projectScreen?.id, isOpen: false}); 
                        setTimeout(() => setProjectScreen({id: -1, isOpen: false}), 250)} // delay added to prevent 404 error showing during closing animation
                    }
                >
                    <MdClose />
                </div>
                {(data) ? 
                <>
                    {/* Cover Image */}
                    <div 
                        className={styles.coverImage}
                        style={{backgroundImage: `url(`+data.coverImage+`)`}}
                    >
                        {data.repoLink ? <a href={data.repoLink} className={styles.projectRepo}><AiFillGithub />Repository</a> : null}
                    </div>

                    <h1>{data.title}</h1>
                    
                    {/* Project Content */}
                    <div className={styles.content}>
                    {data.content?.map((contentBlock) => {
                        return (
                        <>
                            {/* Simple Paragraph */}
                            {contentBlock.paragraph ? 
                            <div className={styles.projectPara}>
                                {contentBlock.paragraph.title ? <h2>{contentBlock.paragraph.title}</h2> : null}
                                <p>{contentBlock.paragraph.content}</p>
                            </div> : null}
                            
                            {/* Image Paragraph */}
                            {contentBlock.imagePara ?
                            <div className={styles.projectImgPara} id={contentBlock.imagePara.style === 1 ? styles.reverse : null}>
                                {(contentBlock.imagePara.style === 0) ? 
                                <>
                                    <div className={styles.projectImage} style={{backgroundImage: `url(`+contentBlock.imagePara.image+`)`}}></div>
                                    {contentBlock.imagePara.content ? 
                                    <div className={styles.imgContent}>
                                        {contentBlock.imagePara.title ? <h2>{contentBlock.imagePara.title}</h2> : null}
                                        <p>{contentBlock.imagePara.content}</p>
                                    </div> : null}
                                </> : 
                                <>
                                    {contentBlock.imagePara.content ? 
                                    <div className={styles.imgContent}>
                                        {contentBlock.imagePara.title ? <h2>{contentBlock.imagePara.title}</h2> : null}
                                        <p>{contentBlock.imagePara.content}</p>
                                    </div> : null}
                                    <div className={styles.projectImage} style={{backgroundImage: `url(`+contentBlock.imagePara.image+`)`}}></div>
                                </>}
                            </div> : null}
                            
                            {/* Hover Button */}
                            {contentBlock.button ? 
                            <div className={styles.projectBtnPara}>
                                {contentBlock.button.title ? <h2>{contentBlock.button.title}</h2> : null}
                                {contentBlock.button.content ? <p>{contentBlock.button.content}</p> : null}

                                <a className={styles.projectBtn} href={contentBlock.button.buttonLink}>{contentBlock.button.buttonTitle}</a>
                                {contentBlock.button.buttonDescription ? <p className={styles.buttonDes}>{contentBlock.button.buttonDescription}</p> : null}
                            </div> : null}
                        </>    
                        )
                    })}</div> 
                </> : 
                <div className={styles.projectScreen404}>
                    <h1>404 Not Found</h1>
                </div>}
                
            </div>
        </div>
    )
}