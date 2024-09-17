"use client";
import { useState, useRef } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.scss";

import { useCursor } from "@/utils/CursorProvider";

import projectsData from "@/utils/projectData";

export default function Navbar() {
    const path = usePathname();
    const params = useParams();

    const isMobile = false;
    const project = projectsData.find((project) => project.id === params?.id);

    return (
        <nav className={styles.navbar}>
            {path === "/" ? (
                <Link className={styles.navLogo} href="#home">
                    RM
                </Link>
            ) : (
                <span className={styles.navLogo}>{project?.title}</span>
            )}

            <div className={styles.navLinks}>
                {path === "/" ?
                    <>
                        {/* <HoverButton text={"Tools"} link={"/#toolkit"} /> */}
                        <HoverButton text={"Projects"} link={"/#projects"} />
                        <HoverButton text={"Contact"} link={"/#contact"} />
                    </> :
                    <HoverButton text={"Home"} link={"/"} />
                }
            </div>
        </nav>
    );
}

function HoverButton({ text, link }) {
    const [isHovering, setIsHovering] = useState(false);

    const { position, setIsHovering: setCursorHover } = useCursor();
    let relativeX, relativeY;

    const inputRef = useRef();

    if (inputRef.current) {
        relativeX = position.x - inputRef.current.getBoundingClientRect().x;
        relativeY = position.y - inputRef.current.getBoundingClientRect().y;
    }

    return (
        <Link
            href={link}
            className={styles.hoverBtn}
            onMouseEnter={() => {
                setIsHovering(true);
                setCursorHover(true);
            }}
            onMouseLeave={() => {
                setIsHovering(false);
                setCursorHover(false);
            }}
            ref={inputRef}
        >
            <div
                className={styles.hoverBtnEffect}
                style={
                    isHovering
                        ? {
                              transform: `translate(${relativeX / 5}px, ${
                                  relativeY / 5
                              }px)`,
                              opacity: "1",
                          }
                        : null
                }
            ></div>
            <p
                style={
                    isHovering
                        ? {
                              transform: `translate(${relativeX / 15}px, ${
                                  relativeY / 15
                              }px)`,
                          }
                        : null
                }
            >
                {text}
            </p>
        </Link>
    );
}
