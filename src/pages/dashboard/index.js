import React from "react";
import { Row, Col, Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import websiteIcon from "../../assets/icons/WebSiteLogo.png";
import profileIcon from "../../assets/icons/ProfileIcon.png";
import profilePic from "../../assets/profile/logo512.png";
import cardImg from '../../assets/profile/office.jpeg'
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from '../../firebase/config'

import { projectFirestore } from "../../firebase/config";
import { collection, getDocs } from 'firebase/firestore/lite';


function Dashboard() {

  const [usersData, setData] = useState(null)
  var index = 0;



  const anchorStyles = {
    color: "black",
  };
  const user = auth.currentUser;
  console.log(user)





  useEffect(() => {
    const colRef = collection(projectFirestore, 'user')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No Data to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setData(result);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])


  if(usersData === null)
  {
    return (
      <Container>
        <div style={{ marginBottom: "40px", marginTop: "40px" }}>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <img
                  src={profilePic}
                  width={"60%"}
                  height={"250px"}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </Col>
            <Col md={8}>
              {" "}
              <br />
              <h3>Dhiraj Karangale</h3>
              <p>
                Third year computer engineering student at SCOE. Have a two years to experiance as a game Developer.
                Also have a knowladge of C#, C++ programing language, use C++ as a primary language for DSA.
                Have a knowladge of Data Structure and Algorithm.
                Currently working as a Developer in GodSpeed games.
              </p>
              <span style={{ fontWeight: "lighter" }}>Pune, Maharashtra</span>
              <Row className="mt-2">
                <Row>
                  <Col md={1} className="text-center">
                    <Image src={websiteIcon} width={"90%"} />
                  </Col>
                  <Col md={5} className="mt-1">
                    <a
                      style={anchorStyles}
                      href="https://dksoftware.netlify.app/"
                    >
                      https://dksoftware.netlify.app/
                    </a>
                  </Col>
                  <Col md={1}>
                    <Image src={profileIcon} width={"90%"} />
                  </Col>
                  <Col md={5}>
                    <a
                      style={anchorStyles}
                      href="https://playvalorant.com/en-us/"
                    >
                      DKode (Valorant)
                    </a>
                  </Col>
                </Row>
                <Row className="mt-2">
                </Row>
              </Row>
            </Col>
          </Row>
        </div>
        <br />
      </Container>
    );
  }


  return (
    <Container>
      <div style={{ marginBottom: "40px", marginTop: "40px" }}>
        <Row>
          <Col md={4}>
            <div className="text-center">
              <img
                src={profilePic}
                width={"60%"}
                height={"250px"}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Col>
          <Col md={8}>
            <h3>{usersData[index].name}</h3>
            <br />
            <p>
              {usersData[index].about}
            </p>
            <span style={{ fontWeight: "lighter" }}>Pune, Maharashtra</span>
            <Row className="mt-2">
              <Row>
                <Col md={1} className="text-center">
                  <Image src={websiteIcon} width={"90%"} />
                </Col>
                <Col md={5} className="mt-1">
                  <a
                    style={anchorStyles}
                    href="{usersData[index].linkedin}"
                  >
                    {usersData[index].linkedin}
                  </a>
                </Col>
                <Col md={1}>
                  <Image src={profileIcon} width={"90%"} />
                </Col>
                <Col md={5}>
                  <a
                    style={anchorStyles}
                    href=" {usersData[index].github}"
                  >
                    {usersData[index].github}
                  </a>
                </Col>
              </Row>
              <Row className="mt-2">
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
      <br />
      
      {/* <h4> Applied jobs.</h4> */}
      {/* <br />
      <div>
        <Card style={{ marginBottom: "40px" }}>
          <Row>
            <Col md={3} className="text-center p-4">
              <Card.Img
                variant="top"
                src={cardImg}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>abracadabra</Card.Title>
                <Card.Text>
                  <br />
                  The company was started in John Warnock's garage. The name of
                  the company, Adobe, comes from Adobe Creek in Los Altos,
                  California, which ran behind Warnock's house. That creek is so
                  named because of the type of clay found there (Adobe being a
                  Spanish word for Mudbrick), which alludes to the creative
                  nature of the company's software. Adobe's corporate logo
                  features a stylized "A" and was designed by graphic designer
                  Marva Warnock, John Warnock's wife. In 2020, the company
                  updated its visual identity, including updating its logo to a
                  single color, an all-red logo that is warmer and more
                  contemporary.
                </Card.Text>
                <Link to={`/applynow`}>
                  <Button variant="dark">Learn More</Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: "40px" }}>
          <Row>
            <Col md={3} className="text-center p-4">
              <Card.Img
                variant="top"
                src={cardImg}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>abracadabra</Card.Title>
                <Card.Text>
                  <br />
                  The company was started in John Warnock's garage. The name of
                  the company, Adobe, comes from Adobe Creek in Los Altos,
                  California, which ran behind Warnock's house. That creek is so
                  named because of the type of clay found there (Adobe being a
                  Spanish word for Mudbrick), which alludes to the creative
                  nature of the company's software. Adobe's corporate logo
                  features a stylized "A" and was designed by graphic designer
                  Marva Warnock, John Warnock's wife. In 2020, the company
                  updated its visual identity, including updating its logo to a
                  single color, an all-red logo that is warmer and more
                  contemporary.
                </Card.Text>
                <Link to={`/applynow`}>
                  <Button variant="dark">Apply Now</Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <div>
        <Card style={{ marginBottom: "40px" }}>
          <Row>
            <Col md={3} className="text-center p-4">
              <Card.Img
                variant="top"
                src={cardImg}
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>abracadabra</Card.Title>
                <Card.Text>
                  <br />
                  The company was started in John Warnock's garage. The name of
                  the company, Adobe, comes from Adobe Creek in Los Altos,
                  California, which ran behind Warnock's house. That creek is so
                  named because of the type of clay found there (Adobe being a
                  Spanish word for Mudbrick), which alludes to the creative
                  nature of the company's software. Adobe's corporate logo
                  features a stylized "A" and was designed by graphic designer
                  Marva Warnock, John Warnock's wife. In 2020, the company
                  updated its visual identity, including updating its logo to a
                  single color, an all-red logo that is warmer and more
                  contemporary.
                </Card.Text>
                <Link to={`/applynow`}>
                  <Button variant="dark">Apply Now</Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div> */}
    </Container>
  );
}

export default Dashboard;
