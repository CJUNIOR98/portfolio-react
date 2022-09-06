import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {FaNodeJs} from 'react-icons/fa';
import { BiCodeAlt, BiGitBranch } from "react-icons/bi";
import { MdOutlinePhonelink } from "react-icons/md";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "just",
          duration: 1,
        },
      });
    }
  }, [inView, animation]);

  return (
    <section className="skills-background" id="services">
      <div className="services-container">
        <h2>SKILLS</h2>
        <div className="services-sub-container" ref={ref}>
          <motion.div
            className="services-sub-container-2"
            initial={{ y: 100, opacity: 0 }}
            animate={animation}
          >
            <BiCodeAlt className="skill-icon" />
            <h3>Web Development</h3>
            <p className="text">
              Dynamic webpages and SPAs development with the use of HTML, CSS,
              JavaScript and React with Hooks, Router and Redux. REST APIs
              consumption.
            </p>
          </motion.div>
          <motion.div
            className="services-sub-container-2"
            initial={{ y: 100, opacity: 0 }}
            animate={animation}
          >
            <MdOutlinePhonelink className="skill-icon" />
            <h3>Web Design</h3>
            <p className="text">
              Web pages with responsive design, in other words, adaptable for
              different screen sizes to make them always look beautiful and easy
              to use.
            </p>
          </motion.div>
          <motion.div
            className="services-sub-container-2"
            initial={{ y: 100, opacity: 0 }}
            animate={animation}
          >
            <BiGitBranch className="skill-icon" />
            <h3>Code Branching</h3>
            <p className="text">
              Managament of code branching with the use of Git which allows to
              teamwork without impacting other developers.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="icons-container-2"
          initial={{ y: 100, opacity: 0 }}
          animate={animation}
        >
          <AiFillHtml5 />
          <DiCss3 />
          <FaNodeJs />
          <SiJavascript />
          <GrReactjs />
          <SiRedux />
          <FontAwesomeIcon icon={faGit} />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
