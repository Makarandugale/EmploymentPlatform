import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import officeImg from '../../assets/icons/Logo.png'

import { projectFirestore } from "../../firebase/config";
import { collection, getDocs } from 'firebase/firestore/lite';

function FindJob() {

  const [jobs, setJobs] = useState(null)
  const [post, setPost] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();


    const colRef = collection(projectFirestore, 'jobs')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No jobs to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {

          if (doc.data().desc.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || doc.data().profile.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            result.push({ id: doc.id, ...doc.data() })
          }
        })
        setJobs(result);
      }
    }).catch(err => {
      console.log(err)
    })

    const colRef2 = collection(projectFirestore, 'post')
    getDocs(colRef2).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No post to load")
      }
      else {
        let result2 = []
        snapshot.docs.forEach(doc => {
          if (doc.data().desc.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || doc.data().role.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            result2.push({ id: doc.id, ...doc.data() })
          }
        })
        setPost(result2);
      }
    }).catch(err => {
      console.log(err)
    })

  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }


  useEffect(() => {
    const colRef = collection(projectFirestore, 'jobs')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No jobs to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setJobs(result);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    const colRef = collection(projectFirestore, 'post')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No post to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setPost(result);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])




  return (
    <Container className="mt-4">

      <div className="position-relative position-relative-example">
        <div className="position-absolute bottom-40 end-0">
          <Form onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} value={searchTerm} />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </div>
      </div>

      <h2 className="text-center">Job Openings</h2><br />
      <Link to={`/user/setRole`}>
        <div className="d-flex align-items-center mb-4 text-center">
          <Button variant="dark" size="lg">
            Post
          </Button>
        </div>
      </Link>
      {jobs && jobs.map((job, id) => {
        return (
          <Card style={{ marginBottom: "40px" }} key={id}>
            <Row>
              <Col md={3} className="text-center p-4">
                <Card.Img
                  variant="top"
                  src={officeImg}
                  style={{ width: "80%" }}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>
                    {job.profile}, {job.company}
                  </Card.Title>
                  <Card.Text>
                    {job.desc.substring(0, 200)}....<br />
                  </Card.Text>
                  <Card.Text>
                    Location: {job.location}<br />
                  </Card.Text>
                  <Link to={`/jobform/${job.id}`}>
                    <Button variant="dark" style={{ backgroundColor: "green" }} >Apply Now</Button>
                  </Link>

                  <Link to={`/findJob/${job.id}`}>
                    <Button variant="dark" >Read more</Button>
                  </Link>

                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}
      {post && post.map((post, id) => {
        return (
          <Card style={{ marginBottom: "40px" }} key={id}>
            <Row>
              <Col md={3} className="text-center p-4">
                <Card.Img
                  variant="top"
                  src={officeImg}
                  style={{ width: "80%" }}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>
                    {post.name}, {post.role}
                  </Card.Title>
                  <Card.Text>
                    {post.desc.substring(0, 100)}<br />
                  </Card.Text>
                  <Link to={`/hireme/${post.id}`}>
                    <Button variant="dark" style={{ backgroundColor: "blue" }}>Hire Me !</Button>
                  </Link>
                  <Link to={`/findJob/post/${post.id}`}>
                    <Button variant="dark" >Read more</Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}
    </Container>
  );
}

export default FindJob;
