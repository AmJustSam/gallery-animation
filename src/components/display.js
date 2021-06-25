import React, {useEffect} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useLocation, Redirect, Link, useHistory} from "react-router-dom";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 100vh;
  cursor: zoom-out;
  
  img {
     width: 100%;
     max-width: 500px;
     min-height: 500px;
     max-height: 500px;
     margin: 0 10px;
     border-radius: 20px;
     object-fit: cover;
     cursor: default;
     box-shadow: 0 0 10px 0 #111;
   }
`;

const Display = () => {
  const location = useLocation();
  const history = useHistory();

  console.log(location);

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeypress);

    return () => {
      document.body.removeEventListener("keydown", handleKeypress);
    }
  }, [])


  const handleKeypress = (e) => {
    if(e.key === "Escape") {
      history.push("/");
    }
  }

  const handleClick = (e) => {
    console.log(e.target);
    if(!e.target.classList.contains("image")) {
      history.push("/?switch=true");
    }
  }
  
  return(
    <Wrapper onClick={handleClick} className="bg">
      <Link to={{pathname: `/`, search: "switch=true"}} style={{color: "#ccc", padding: "20px", textDecoration: "none", position: "absolute", top: "30px", left: "30px"}}>&larr; Go Back</Link>
      {location.state ? 
        <motion.img className="image"
          transition={{duration: 0.2}}
        layoutId={location.state.id} src={location.state.src} />
       : <Redirect to="/" />     
     }
    </Wrapper>
  )
}

export default Display;