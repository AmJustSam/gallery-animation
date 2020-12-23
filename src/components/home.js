import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  a {
    margin-right: 20px;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 20px;
      cursor: zoom-in;
    }
  }
  
  a:last-of-type: {
    margin-right: 0;
  }
`;

const Home = () => (
  <Container>
    <Link to={{pathname: "/display", state: {id: "a", src: "https://bit.ly/3nNkgEE"}}}>
      <motion.img
          transition={{duration: 0.3}}
      layoutId="a" src="https://bit.ly/3nNkgEE" />
    </Link>
    <Link to={{pathname: "/display", state: {id: "b", src: "https://bit.ly/38s9MUQ"}}}>
      <motion.img
          transition={{duration: 0.3}}
      layoutId="b" src="https://bit.ly/38s9MUQ" />
    </Link>
    <Link to={{pathname: "/display", state: {id: "c", src: "https://bit.ly/2KNiKnt"}}}>
      <motion.img
          transition={{duration: 0.3}}
      layoutId="c" src="https://bit.ly/2KNiKnt" />
    </Link>
  </Container>
)

export default Home;