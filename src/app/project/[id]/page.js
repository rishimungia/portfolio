"use client";
import styles from "./Project.module.scss";

import { AiFillGithub } from "react-icons/ai";

import projectsData from "@/utils/projectData";

export default function Project({ params }) {

    const data = projectsData.find((project) => project.id === params.id);

    return (
        <div className={styles.projectContainer}>
            {data ? (
                <>
                    {/* Cover Image */}
                    <div
                        className={styles.coverImage}
                        style={{
                            backgroundImage: `url(` + data.coverImage + `)`,
                        }}
                    >
                        {data.repoLink ? (
                            <a
                                href={data.repoLink}
                                className={styles.projectRepo}
                            >
                                <AiFillGithub />
                                Repository
                            </a>
                        ) : null}
                    </div>
                    
                    <div className={styles.contentContainer}>
                        <h1>{data.title}</h1>

                        {/* Project Content */}
                        <div className={styles.content}>
                            {data.content?.map((contentBlock) => {
                                return (
                                    <>
                                        {/* Simple Paragraph */}
                                        {contentBlock.paragraph ? (
                                            <div className={styles.projectPara}>
                                                {contentBlock.paragraph.title ? (
                                                    <h2>
                                                        {
                                                            contentBlock.paragraph
                                                                .title
                                                        }
                                                    </h2>
                                                ) : null}
                                                <p>
                                                    {contentBlock.paragraph.content}
                                                </p>
                                            </div>
                                        ) : null}

                                        {/* Image Paragraph */}
                                        {contentBlock.imagePara ? (
                                            <div
                                                className={styles.projectImgPara}
                                                id={
                                                    contentBlock.imagePara.style ===
                                                    1
                                                        ? styles.reverse
                                                        : null
                                                }
                                            >
                                                {contentBlock.imagePara.style ===
                                                0 ? (
                                                    <>
                                                        <div
                                                            className={
                                                                styles.projectImage
                                                            }
                                                            style={{
                                                                backgroundImage:
                                                                    `url(` +
                                                                    contentBlock
                                                                        .imagePara
                                                                        .image +
                                                                    `)`,
                                                            }}
                                                        ></div>
                                                        {contentBlock.imagePara
                                                            .content ? (
                                                            <div
                                                                className={
                                                                    styles.imgContent
                                                                }
                                                            >
                                                                {contentBlock
                                                                    .imagePara
                                                                    .title ? (
                                                                    <h2>
                                                                        {
                                                                            contentBlock
                                                                                .imagePara
                                                                                .title
                                                                        }
                                                                    </h2>
                                                                ) : null}
                                                                <p>
                                                                    {
                                                                        contentBlock
                                                                            .imagePara
                                                                            .content
                                                                    }
                                                                </p>
                                                            </div>
                                                        ) : null}
                                                    </>
                                                ) : (
                                                    <>
                                                        {contentBlock.imagePara
                                                            .content ? (
                                                            <div
                                                                className={
                                                                    styles.imgContent
                                                                }
                                                            >
                                                                {contentBlock
                                                                    .imagePara
                                                                    .title ? (
                                                                    <h2>
                                                                        {
                                                                            contentBlock
                                                                                .imagePara
                                                                                .title
                                                                        }
                                                                    </h2>
                                                                ) : null}
                                                                <p>
                                                                    {
                                                                        contentBlock
                                                                            .imagePara
                                                                            .content
                                                                    }
                                                                </p>
                                                            </div>
                                                        ) : null}
                                                        <div
                                                            className={
                                                                styles.projectImage
                                                            }
                                                            style={{
                                                                backgroundImage:
                                                                    `url(` +
                                                                    contentBlock
                                                                        .imagePara
                                                                        .image +
                                                                    `)`,
                                                            }}
                                                        ></div>
                                                    </>
                                                )}
                                            </div>
                                        ) : null}

                                        {/* Hover Button */}
                                        {contentBlock.button ? (
                                            <div className={styles.projectBtnPara}>
                                                {contentBlock.button.title ? (
                                                    <h2>
                                                        {contentBlock.button.title}
                                                    </h2>
                                                ) : null}
                                                {contentBlock.button.content ? (
                                                    <p>
                                                        {
                                                            contentBlock.button
                                                                .content
                                                        }
                                                    </p>
                                                ) : null}

                                                <a
                                                    className={styles.projectBtn}
                                                    href={
                                                        contentBlock.button
                                                            .buttonLink
                                                    }
                                                >
                                                    {
                                                        contentBlock.button
                                                            .buttonTitle
                                                    }
                                                </a>
                                                {contentBlock.button
                                                    .buttonDescription ? (
                                                    <p className={styles.buttonDes}>
                                                        {
                                                            contentBlock.button
                                                                .buttonDescription
                                                        }
                                                    </p>
                                                ) : null}
                                            </div>
                                        ) : null}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.projectScreen404}>
                    <h1>404 Not Found</h1>
                </div>
            )}
        </div>
    );
}
