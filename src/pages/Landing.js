import styles from '@css/landing.module.css';
import curved_panel from '@resources/landing/curved_panel.svg';
import pie_chart_3d from '@resources/landing/pie_chart_3d.svg';
import pie_chart from '@resources/landing/pie_chart.svg';
import play_button from '@resources/landing/play_button.svg';
import speech_bubble from '@resources/landing/speech_bubble.svg';
import stars_review from '@resources/landing/stars_review.svg';
import thumbs_up from '@resources/landing/thumbs_up.svg';
import { Fragment, useEffect, useRef } from 'react'
import { Mouse, Composite, MouseConstraint, Engine, Render, World, Bodies } from 'matter-js'

function Landing() {
    const engineRef = useRef();
    const boxRef = useRef();
    const groundRef = useRef();
  
    useEffect(() => {
      const animate = () => {
        engineRef.current = Engine.create();
        const engine = engineRef.current;
        
        const cw = document.body.clientWidth
        const ch = document.body.clientHeight
        
        
        const box = Bodies.rectangle(150, 0, 40, 40);
        boxRef.current.style.width = '40px'; 
        boxRef.current.style.height = '40px';
        boxRef.current.style.backgroundColor = 'black';
  
        const ground = Bodies.rectangle(
          0, // x
          0, // y
          400, // w
          120, // h
          { isStatic: true }
        );

        groundRef.current.style.width = '400px';
        groundRef.current.style.height = '120px';
        groundRef.current.style.backgroundColor = '#777';
        groundRef.current.style.bottom ='0';
        // groundRef.current.style.bottom = '120px';

        const mouseConstraint = MouseConstraint.create({ element: boxRef.current });
        Composite.add(engine.world, [box, ground, mouseConstraint]);
  
        Render.create({
          element: boxRef.current, // Attach render to the box element
          engine: engine,
          options: {
            width: cw,
            height: ch,
            wireframes: false,
            background: 'transparent'
          }
        });
  
        (function rerender() {
          Engine.update(engine);
          requestAnimationFrame(rerender);
        })();
      };
  
      animate();
  
      return () => {
        // Cleanup function
        cancelAnimationFrame(requestAnimationFrame);
        Engine.clear(engineRef.current);
      };
    }, []);
    

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

            {/* matter js */}
            {/* <div id="matter" ref={scene} /> */}
            {/* <div id="box"><h1>nigga</h1></div> */}
            <Fragment>
                <div id={styles.box} ref={boxRef}></div>
                <div id={styles.ground} ref={groundRef}></div>
            </Fragment>
        </section>
    )
}

export default Landing;