import "./styles/global.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [loaderState, setLoaderState] = useState(true);

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  setTimeout(() => {
    setLoaderState(false);
  }, 5000);

  return (    
    <div className="main-container">
      {loaderState ? (
        <div className="preloader-container">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="preloader"
          >
            <motion.path
              d="M 49 0 L 0 85 H 99 L 49 0"             
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 4, ease: [1, 0, 0.8, 1] }
              }}
            />
          </motion.svg>
        </div>             
      ) : (
        <>
          <Router>
            <Route path ="/" component={Home}/>
          </Router>
        </>
      )}            
    </div>
    
  );
}

export default App;
