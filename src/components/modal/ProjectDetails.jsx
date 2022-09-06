import Backdrop from "./Backdrop";
import {motion} from "framer-motion";

const ProjectDetails = ({handleClose, name, image, description, projectUrl}) => {

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 35,
        stiffness: 300
      }
    },
    exit: {
      y: "100vh",
      opacity: 0
    }
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="project-info-container"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="full-size-image-container">
          <img src={image} alt={name} className="full-size-image"/>
        </div>
        <div className="project-info">
          <h2>{name}</h2>
          <p className="description">{description}</p>
          <a href={projectUrl} target="blank">
            <h3>Open</h3>
          </a>
        </div>
      </motion.div>
    </Backdrop>
  )
};

export default ProjectDetails