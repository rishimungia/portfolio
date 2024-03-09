import styles from './GradientText.module.scss';

export default function GradientText ({ text }) {
    return (
        <p className={styles.text}>{text}</p>
    )
}