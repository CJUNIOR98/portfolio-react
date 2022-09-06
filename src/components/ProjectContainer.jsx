import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import ProjectDetails from './modal/ProjectDetails';
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const ProjectContainer = ({ name, description, imgUrl, projectUrl }) => {
  const [modalOpen, setModalOpen] =useState(false);
  const {ref, inView} = useInView();
  const animation = useAnimation();
  

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleModalOpen = () => {
    modalOpen ? close() : open();
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1
        }
      });      
    }
  }, [inView, animation]);

  return (
    <>
    <motion.div 
      className="project-container"
      initial={{y: 100, opacity: 0}}
      animate={animation}
      ref={ref}
    >
      <div className="image-container"  onClick={handleModalOpen}>
        <img src={imgUrl} alt={name} className="image"/>
        <div className="overlay">
          <p>INFO</p>
        </div>
      </div>
    </motion.div>
    <AnimatePresence
    initial={false}
    exitBeforeEnter={true}
    onExitComplete={() => null}      
  >
    {modalOpen && 
      <ProjectDetails 
        modalOpen={modalOpen} 
        handleClose={close}
        name={name}
        image={imgUrl}
        description={description}
        projectUrl={projectUrl}
      />
    }
  </AnimatePresence>
  </>
  );
};

export default ProjectContainer;
