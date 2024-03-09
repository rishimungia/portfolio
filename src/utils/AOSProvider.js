"use client";
import AOS from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

export default function AOSProvider ({ children }) {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-out',
          once: true
        });
    }, []);

    return (
        <>
            { children }
        </>
    )
}