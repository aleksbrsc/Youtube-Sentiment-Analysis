import styles from '@css/landing.module.css';
import curved_panel from '@resources/landing/curved_panel.svg';
import pie_chart_3d from '@resources/landing/pie_chart_3d.svg';
import pie_chart from '@resources/landing/pie_chart.svg';
import play_button from '@resources/landing/play_button.svg';
import speech_bubble from '@resources/landing/speech_bubble.svg';
import stars_review from '@resources/landing/stars_review.svg';
import thumbs_up from '@resources/landing/thumbs_up.svg';

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
            <div id={styles.graphics}>
                <img id={styles.curved_panel} className={styles.graphic} src={curved_panel}></img>
                <img id={styles.pie_chart_3d} className={styles.graphic} src={pie_chart_3d}></img>
                <img id={styles.play_button} className={styles.graphic} src={play_button}></img>
                <img id={styles.thumbs_up} className={styles.graphic} src={thumbs_up}></img>
                <img id={styles.pie_chart} className={styles.graphic} src={pie_chart}></img>
                <img id={styles.stars_review} className={styles.graphic} src={stars_review}></img>
                <img id={styles.speech_bubble} className={styles.graphic} src={speech_bubble}></img>
            </div>
        </section>
    )
}

export default Landing;