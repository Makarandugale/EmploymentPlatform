import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { projectFirestore } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore/lite";
import "./Post.css";

function JobForm() {

  const [company, setCompanyName] = useState('');
  const [profile, setProfile] = useState('');
  const [salary, setSalary] = useState('');
  const [desc, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('')

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const doc = { company, profile, desc, salary, location, email };
    try {
      await addDoc(collection(projectFirestore, "jobs"), doc);
      navigate('/findJob');
    } catch (err) {
      console.log(err);
    }
    console.log(doc);
  }

  return (
    <Container className="post-container">
      <Form onSubmit={handleSubmit} className="post-form">
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter company name" value={company} onChange={(e) => setCompanyName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridRole">
          <Form.Label>Profile</Form.Label>
          <Form.Control type="text" placeholder="Enter profile" value={profile} onChange={(e) => setProfile(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter job location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter description" value={desc} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Container className="text-center">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default JobForm;

