import { Link } from "react-router-dom";
import "./About.css";
function About() {
  return (
    <>
      <div className="about">
        <button type="button">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </Link>
        </button>
        <div className="imag">
          <h1>Narendrakumar S</h1>
          <img src="src\assets\mine.jpg" alt="hello there" />
        </div>
        <div className="head">
          <h2>About Me</h2>
          <button type="button" className="resume">
            <a
              href="src/assets/Resume2024.pdf"
              rel="noreferrer"
              target="_blank"
            >
              📄Resume
            </a>
          </button>
        </div>
        <p>
          I am a passionate front-end developer with a keen interest in machine
          learning (ML) and deep learning (DL). My journey in the tech world
          started with creating dynamic and responsive web applications, where I
          honed my skills in HTML, CSS, and JavaScript. Over time, I expanded my
          expertise into ML and DL, exploring the fascinating realms of
          artificial intelligence and data science. This combination of
          front-end development and ML/DL allows me to bring a unique
          perspective to my projects, merging the best of user experience design
          and advanced data analytics.
          <br />
          <br />
          Beyond my professional interests, I am a dedicated Taekwondo athlete,
          embracing the discipline and physical challenges the sport offers. I
          believe in the power of continuous learning, which is why I am an avid
          reader, always seeking knowledge through books across various genres.
          Additionally, I enjoy sharing my insights and experiences through
          blogging, which has been a great way to connect with like-minded
          individuals. Recently, I have ventured into content creation,
          leveraging platforms to share my journey in tech, sports, and personal
          development, aiming to inspire and educate a broader audience.
        </p>
      </div>
    </>
  );
}

export default About;
