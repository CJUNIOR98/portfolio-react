import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1
        }
      });  
      animation2.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1
        }
      });    
    };
  }, [inView, animation, animation2])

  return (
    <section id="about">
      <div className="about-container" ref={ref} >
        <motion.div 
          className="about-sub-container"
          initial={{x: -100, opacity: 0}}
          animate={animation2}
        >
          <img
            src="https://i.imgur.com/AuD5PLE.jpg"
            alt="me"
            className="picture" 
          />
        </motion.div>
        <motion.div 
          className="about-sub-container"
          initial={{x: 100, opacity: 0}}
          animate={animation}
        >
          <h2>Hi!</h2>
          <p className="text">
            I'm Carlos, a Front-End Developer from México, currently
            studying in{" "}
            <a href="https://www.academlo.com/" target="blank">
              Academlo
            </a>{" "}
            for Full-Stack Developer.
          </p>
          <p className="text">
            I have experience with HTML, CSS, a bit of Node JS, Javascript and React with Redux, Hooks, Axios, Router and Context. 
            You can find some of my projects below. 
          </p>
          <p className="text">
            I'm a detailed-oriented, self-taught, creative and disciplined
            person who believes in compromise, teamwork and job well done.
          </p>
          <p className="text">
            Feel free to visit the links below to find more about me.
          </p>
          <div className="icons-container">
            <a href="https://www.linkedin.com/in/carlos-junior-mejia07/" target="blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/CJUNIOR98" target="blank">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com/Carlos_junior36" target="blank">
              <AiFillTwitterSquare />
            </a>
          </div>
        </motion.div>        
      </div>
    </section>
  );
};

export default About;
