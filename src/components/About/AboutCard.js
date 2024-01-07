import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaCircle } from 'react-icons/fa';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> LIKHITH KEMMINJE  </span>
            from <span className="purple"> Puttur, India.</span>
            <br />
           
            I am curently pursuing B.E in Information Science at NMAM Institute of Technology.
            <br />
            <br />
          
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket,Video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br/>
         <p  style={{ textAlign: "justify" }}>
         <span className="purple" style={{ fontSize: "1.7em"}}>Education</span>
         <ul>
            <li className="about-activity">
             <span  style={{ paddingRight:"10px"}}> <FaCircle /></span>
             <p> Bachelor of Engineering in Information Science and Engineering <br/>
                NMAM Institute of Technology ( 2021- 2024), Nitte, Karkala India <br/>
                Affiliated to Visvesvaraya Technological University, Belagavi India
                <br/>CGPA: 7.73
              </p>
            </li>
            <li className="about-activity">
            <span  style={{ paddingRight:"10px"}}> <FaCircle /></span>
             <p> 10+2<br/>
             St Aloysius PU College Mangaluru, India ( 2019-2021 ) <br/>
             2019-2021 
              </p>
            </li>
            <li className="about-activity">
            <span  style={{ paddingRight:"10px"}}> <FaCircle /></span>
             <p> 10th / SSLC <br/>
             Vivekananda English Medium School Tenkila Puttur ( 2018-2019) 
                <br/>Percentage: 91.83
              </p>
            </li>
          </ul>
         </p>
         <p  style={{ textAlign: "justify" }}>
         <span className="purple" style={{ fontSize: "1.7em"}}>Certificates</span>
         <ul>
            <li className="about-activity">
             <span  style={{ paddingRight:"10px"}}> <FaCircle /></span>
             <p> Hands-0n Introduction to Linux Commands and Shell Scripting (10/2021 - 12/2021):
              </p>
            </li>
            <li className="about-activity">
            <span  style={{ paddingRight:"10px"}}> <FaCircle /></span>
             <p> The complete 2022 Web development Bootcamp (08/2023 - Present):
              </p>
            </li>
           
          </ul>
         </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
