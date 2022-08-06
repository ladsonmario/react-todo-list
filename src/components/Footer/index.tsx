import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            © Copyright - <a href="https://github.com/ladsonmario" target="_blank">Ladson</a>
        </div>
    );
}