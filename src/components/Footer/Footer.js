import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h1>Rishi Mungia</h1>
                <p>This website was bootstrapped with NextJS 14</p>
            </div>

            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} Rishi Mungia. All rights reserved.</p>
            </div>
        </footer>
    )
  }