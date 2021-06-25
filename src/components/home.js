import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {motion, useSpring} from "framer-motion";
import {Link, useLocation} from "react-router-dom";

const data = [
  {id: "a", src: "https://bit.ly/3nNkgEE"},
  {id: "b", src: "https://bit.ly/2Kmxv0U"},
  {id: "c", src: "https://bit.ly/2KNiKnt"},
  {id: "d", src: "https://bit.ly/34GiQV3"},
  {id: "e", src: "https://bit.ly/3pis3uv"},
]

const Container = styled(motion.div)`
  width: 60%;
  margin: 0 auto;
  padding: 20px 0;
  height: 100%;

  
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px 20px;
    justify-content: center;
    align-items: center;
    height: 100%;

    
   img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 #111;
        cursor: zoom-in;
        object-fit: cover;
      }  
   }  
`;

const Home = () => {
  const location = useLocation();
  const [dimensions, setDimensions] = useState([]);
  const Img = useRef();

  useEffect(() => {
     const width = Img.current.naturalWidth;
     const height = Img.current.naturalHeight;
     
     setDimensions({width, height})

  }, [])

  return (
    <Container>
       {location && 
         <motion.div
           initial={ location.search.includes("switch=true") ? false : {opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 1, delay: 1}}
         >
           {data && data.map((obj) => (
             <Link to={{pathname: "/display", state: obj}}>
               <motion.img ref={(elm) => Img.current = elm} transition={{duration: 0.2}} layoutId={obj.id} src={obj.src} />
             </Link>
           ))}
         </motion.div>
       }
    </Container>
 )
}

export default Home;