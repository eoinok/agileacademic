import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image";

function Jumbotron(props) {
  return (<Container>
     <div className="mt-4 p-3 bg-white rounded" >
       <StaticImage src="../images/jumbotron.jpg" />
     </div>
      
  </Container>
  );
}

export default Jumbotron