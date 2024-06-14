import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './ProjectScreen.module.scss';

import { MdClose } from "react-icons/md";
import { AiFillGithub } from 'react-icons/ai';

import projectsData from '@/utils/projectData';
import { useRouter } from 'next/navigation';

export default function ProjectScreen ({ projectId }) {
    const router = useRouter();
    const data = projectsData.find((project) => project.id === projectId);

    const [close, setClose] = useState(false);  

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);

    function handleClose (event) {
        if (event.target.id === styles.closeBtn) {
            setClose(true);
    
            setTimeout(() => {
                document.body.style.overflow = 'unset';
                router.back();
            }, 200);
        }
    }

    if (data) return (
        <div className={styles.projectScreen} id={close ? styles.close : styles.closeBtn} onClick={handleClose}>
            <div className={styles.projectContainer}>
                <div className={styles.closeBtn} onClick={handleClose} id={styles.closeBtn}>
                    <MdClose id={styles.closeBtn}/>
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
                    {data.content?.map((contentBlock, i) => {
                        return (
                        <span key={i}>
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
                        </span>    
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