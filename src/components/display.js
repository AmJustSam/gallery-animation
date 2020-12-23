import React from "react";
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
     width: 450px;
     height: 450px;
     margin: 0 10px;
     border-radius: 20px;
     object-fit: cover;
     cursor: default;
   }
`;

const Display = () => {
  const location = useLocation();
  const history = useHistory();

  const handleClick = (e) => {
    console.log(e.target);
    if(!e.target.classList.contains("image")) {
      history.push("/")
    }
  }
  
  return(
    <Wrapper onClick={handleClick} className="bg">
      <Link to="/" style={{color: "#ccc", padding: "20px", textDecoration: "none", position: "absolute", top: "30px", left: "30px"}}>&larr; Go Back</Link>
      {location.state ? 
        <motion.img className="image"
          transition={{duration: 0.3}}
        layoutId={location.state.id} src={location.state.src} />
       : <Redirect to="/" />     
     }
    </Wrapper>
  )
}

export default Display;