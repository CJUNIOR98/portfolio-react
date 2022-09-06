import Data from "../assets/Projects.json";
import ProjectContainer from "./ProjectContainer";

const ProjectsGallery = () => {
  const projects = Data;
  
  const list = projects.projects.map((item) => (
    <ProjectContainer
      key={item.id}
      name={item.name}
      description={item.description}
      imgUrl={item.imageUrl}
      projectUrl={item.projectUrl}
    />
  ));

  return (
    <section id="gallery">
      <div className="gallery-main-container">
        <h2>GALLERY</h2>
        <div className="gallery-container">       
          {list}
        </div> 
      </div>           
    </section>
  );
};

export default ProjectsGallery;
