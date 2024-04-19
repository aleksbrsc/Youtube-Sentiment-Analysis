import styles from '@css/landing.module.css';
import submit from '@resources/submit.svg';

function Landing() {
    return (
        <section id={styles.container}>
            <main>
                <h1>Youtube Comments<br></br> Sentiment Analysis</h1>
                <input placeholder="enter video url"></input>
                <button>
                </button>
                <p>Discover how viewers feel about a YouTube video.<br></br>
                Get quick insights on audience sentiment in a click.</p>
            </main>
        </section>
    )
}

export default Landing;