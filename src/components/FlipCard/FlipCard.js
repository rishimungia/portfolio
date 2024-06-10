import { useState, useEffect } from 'react';
import styles from './FlipCard.module.scss';

import { MdClose } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';

export default function FlipCard({ primaryContent, secondaryContent, primaryBg, secondaryBg, rotateAxis = 'X' }) {
    const [flipped, setFlipped] = useState(false);
    const [lastScrollAmount, setLastScrollAmount] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);

    const [primaryStyles, setPrimaryStyles] = useState({});
    const [secondaryStyles, setSecondaryStyles] = useState({
        opacity: 0,
        transform: `rotate${rotateAxis}(-180deg)`,
        visibility: 'hidden'
    });
    const [zIndex, setZIndex] = useState(0);

    const handleScroll = () => {
        if (lastScrollAmount && Math.abs(window.scrollY - lastScrollAmount) >= 400) {
            flipCard(false);
        }
    };
    useEffect(() => {
        if (flipped) {
            window.addEventListener('scroll', handleScroll);
            setLastScrollAmount(window.scrollY);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [flipped]);

    const flipCard = (flip) => {
        setFlipped(flip);
        setShowOverlay(flip);

        if (flip) {
            setPrimaryStyles({
                opacity: 0,
                transform: `rotate${rotateAxis}(180deg)`
            });
            setSecondaryStyles({
                opacity: 1,
                transform: `rotate${rotateAxis}(0deg)`
            });
            setZIndex(15);
            setLastScrollAmount(window.scrollY);
            setTimeout(() => {
                setPrimaryStyles({
                    opacity: 0,
                    transform: `rotate${rotateAxis}(180deg)`,
                    visibility: 'hidden'
                });
            }, 500);
        } else {
            setPrimaryStyles({
                opacity: 1,
                transform: `rotate${rotateAxis}(0deg)`
            });
            setSecondaryStyles({
                opacity: 0,
                transform: `rotate${rotateAxis}(-180deg)`
            });
            setTimeout(() => {
                setSecondaryStyles({
                    opacity: 0,
                    transform: `rotate${rotateAxis}(-180deg)`,
                    visibility: 'hidden'
                });
                setZIndex(0);
            }, 500);
        }
    }

    return (
        <>
            <div className={styles.bgOverlay} id={showOverlay ? styles.showOverlay : null} onClick={() => flipCard(false)}></div>
            <div className={styles.card} style={{ zIndex: zIndex }}>
                <div className={styles.primary} style={{...primaryStyles, background: primaryBg}} onClick={() => flipCard(true)}>
                    {primaryContent}
                    <BsFillPlusCircleFill className={styles.flipBtn} onClick={() => flipCard(true)}/>
                </div>
                <div className={styles.secondary} style={{...secondaryStyles, background: secondaryBg}}>
                    {secondaryContent}
                    <BsFillPlusCircleFill className={styles.flipBtn} id={styles.close} onClick={() => flipCard(false)}/>
                </div>
            </div>
        </>
    )
}