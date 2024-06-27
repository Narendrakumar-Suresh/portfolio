import "./App.css";
import Card from "./Components/Card";
// import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import Niche from "./Components/Niche";
import ytImage from "./assets/yt_.png";
import instaImage from "./assets/insta.png";
import Bloggers from "./assets/bloggers.png";
import { useEffect, useState } from "react";
import Loader from "./Pages/Loader";
import faceRecog from "./assets/card_pics/face_recog.jpg";
import genderCl from "./assets/card_pics/gender_classifier.jpg";
import hotsCl from "./assets/card_pics/HOTS.png";

function App() {
  const [isLoading, setisLoading] = useState(true);

  const cont = [
    "Automate attendance tracking through facial recognition for efficient and accurate monitoring.",
    "Classify gender using vocal characteristics to enhance personalization in applications.",
    "Evaluate and categorize with a HOTS classifier based on Bloom's Taxonomy to foster critical thinking.",
  ];

  const titl = ["FaceTrack", "VoiceGen", "BloomHOTS"];

  const linkss = [
    "https://github.com/Narendrakumar-Suresh/Attendance-using-face-recoginition",
    "https://github.com/Narendrakumar-Suresh/gender-voice-clasifier",
    "https://github.com/Narendrakumar-Suresh/HOTS",
  ];

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setisLoading(false);
      }, 1500);
    };
    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
      <div className="home">
        <section className="first" id="first">
          <p className="links position-absolute top-0 start-0 p-4">
            <a className="link" href="#project">
              Project
            </a>
          </p>

          <p className="links position-absolute top-0 end-0 p-4">
            <a className="link" href="#niche">
              My Niche
            </a>
          </p>
          <div className="me position-absolute top-50 start-50 translate-middle">
            <h1 className="hi">👋 Hi,I'm Narendrakumar.</h1>
            <p className="sam object-fit-fill">
              I am a disciplined front-end developer and content creator with a
              passion for machine learning and deep learning. As a Taekwondo
              athlete, I bring dedication and innovation to creating impactful
              content and engaging user experiences.
            </p>
          </div>
          <p className="links position-absolute bottom-0 start-0 p-4">
            <a className="link" href="#contact">
              Contact
            </a>
          </p>

          <p className="links position-absolute bottom-0 end-0 p-4">
            <Link className="link" to="/about">
              About me
            </Link>
            {/* <h1>About me</h1> */}
          </p>
        </section>

        <section className="second" id="project">
          <h1>Project</h1>
          <div className="rows">
            <Card
              bg={faceRecog}
              Title={titl[0]}
              Content={cont[0]}
              Link={linkss[0]}
            />
            <Card
              bg={genderCl}
              Title={titl[1]}
              Content={cont[1]}
              Link={linkss[1]}
            />
            <Card
              bg={hotsCl}
              Title={titl[2]}
              Content={cont[2]}
              Link={linkss[2]}
            />
          </div>
          <div className="btn">
            <Link to="https://github.com/Narendrakumar-Suresh" target="_blank">
              Click here to check more projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </Link>
          </div>
        </section>
        {/* This is my niche */}
        <section className="third" id="niche">
          <h1>My Niche</h1>
          <div className="nich">
            <Niche
              image={ytImage}
              text="Discover the latest softwares and technoligies, reviews, and tech tips on our YouTube channel. Stay updated and enhance your tech skills!"
              link="https://youtube.com/@joe_kraper12?si=Lmf-lMp-qFlvspTm://www.youtube.com/watch?v=0sSYmRImgRY"
            />

            <Niche
              image={instaImage}
              text="Follow us for the newest tech news, software highlights, and sneak peeks into upcoming trends. Join our tech community!"
              link="https://www.instagram.com/joe_kraper?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            />

            <Niche
              image={Bloggers}
              text="Explore our tech blog for detailed articles, comprehensive guides, and insightful analysis on the latest in technology."
              link="https://techyxtalks.blogspot.com/"
            />
          </div>
        </section>

        <section className="fourth" id="contact">
          <h1>Contact</h1>
          <div className="cont">
            <a href="mailto:narendrkumarsuresh@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/narendrakumar-suresh-b0a2b4210/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
export default App;
