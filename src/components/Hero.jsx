import { motion, useAnimation } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const animation = useAnimation();
  
  setTimeout(() => {
    animation.start({
      y: 10,
      transition: {
        yoyo: Infinity,
        type: "just",
        duration: 1.5
      }                  
    });
  }, 4000);    
    
  return (
    <section id="home">
      <div className="hero-main-container">
        <motion.header 
          className="header"
          initial={{y: -100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{type: "just", duration: 1}}
        >
          <div className="logo-container">          
            <img src="https://i.imgur.com/p0pU0LX.png" alt="logo" className="logo"/>
          </div>
          <div className="nav-bar">
            <HashLink to="#about">
              <h5 className="button">About</h5>
            </HashLink>
            <HashLink to="#services">
              <h5 className="button">Services</h5>
            </HashLink>
            <HashLink to="#gallery">
              <h5 className="button">Gallery</h5>
            </HashLink>
            <HashLink to="#contact">
              <h5 className="button">Contact</h5>
            </HashLink>            
          </div>
        </motion.header>
        <motion.div 
          className="hero"
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{type: "just", duration: 1}}
        >
          <div className="main-logo-container">
            <img src="https://i.imgur.com/wb3oYoh.png" alt="main-logo" className="main-logo"/>
          </div>          
          <h1>FRONT END DEVELOPER</h1>
        </motion.div>
        <motion.div 
          className="scroll-icon-container"
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{type: "just", duration: 2}}
        >
          <div className="animated-icon">
            <motion.div 
              className="scroll"
              animate={animation}
            ></motion.div>
          </div>
        </motion.div>
      </div>  
    </section>
  );
};

export default Hero;
