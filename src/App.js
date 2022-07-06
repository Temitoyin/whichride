import {useEffect} from 'react'
import styles from "./App.module.scss";
import Phones from "./assets/images/phones.png";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Phone from "./assets/images/phone.png";
import Footer from "./components/Footer/footer";
import {stepData, choiceData} from "./data"
import Navigation from "./components/Navigation/navigation";
import StepInfo from "./components/StepInfo/stepInfo";
import OptionInfo from "./components/OptionInfo/optionInfo"

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo("#navItem", {
      y: -10,
      opacity:0,
    },
    {
      y: 0,
      opacity:1,
      duration: 0.5
  })
  .fromTo("#headerText", {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1
  })
  .fromTo( "#headerImg", {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
  }, "-=0.9")
  gsap.fromTo("#rideInfoImg", 
  {
   x: -100,
   opacity: 0,
 },
 {
   x: 0,
   opacity: 1,
   duration: 1.5,
   scrollTrigger: {
     trigger: "#rideInfoMain",
     toggleActions: "play complete complete reverse",
    //  scrub: true,
    start: "top 90%",
    end: "top 0%",
   },
 }
 
)
const rideInfoItems = gsap.utils.toArray("#rideInfoItem")
rideInfoItems.forEach((el) => {
  gsap.fromTo(el, 
  {
   x: 100,
   opacity: 0,
   stagger: 0.2,
  },
  {
   x: 0,
   opacity: 1,
   duration: 1.5,
   stagger: 0.2,
   scrollTrigger: {
     trigger: "#rideInfoMain",
     toggleActions: "play complete complete reverse",
    //  scrub: true,
     start: "top 90%",
     end: "top 0%",
    //  markers: true
   },
  }
  
  )
})

gsap.fromTo("#choicesItem", {
  opacity: 0,
  y: -10,
  ease: "power1.in",

},
  {
    opacity: 1,
    stagger: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#choicesHeader",
      toggleActions: "play complete reverse reset",
      start: "0 80%",
      scrub: 0.1,
      end: "top 10%",
    }
  }
);

  }, [])


  return (
    <div className={styles.home}>
      <Navigation/>
      <section className={styles.home__header}>
        <div className={styles.home__header_text} id="headerText">
          <h1>Compare & book ride-hailing providers </h1>
          <p>
            Save money and time with WhichrRide. Think Compare the market but
            for taxis.
          </p>
        </div>
        <div className={styles.home__header_img} id="headerImg">
          <img src={Phones} alt="phones with app screens" />
        </div>
      </section>
      <section className={styles.home__rideInfo}>
        <div className={styles.home__rideInfo_header}>
          <h2>
            Whichride brings together multiple ride hailing providers and local
            taxi firms in one app
          </h2>
          <p>
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app
          </p>
        </div>
        <div className={styles.home__rideInfo_main} id="rideInfoMain">
          <img src={Phone} alt="phone with map" id="rideInfoImg" />
          <div>
            {
              stepData.map((e, i) => (
                <StepInfo heading={e.heading} subText={e.subText} step={i+1} />
              ))
            }
          </div>
        </div>
      </section>
      <section className={styles.home__choices}>
        <h3 id="choicesHeader">Why Whichride</h3>
        <div className={styles.home__choices_items}>
          {
            choiceData.map((e, i) => (
              <OptionInfo heading={e.heading} icon={e.icon} subText={e.subText} key={i+e.heading} />
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
