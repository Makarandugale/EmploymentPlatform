
import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { doc,getDoc } from 'firebase/firestore/lite';

const Email = window.Email;

function ApplyJob() {

  const {id}=useParams()

  const [data,setData]=useState(null)

  useEffect(()=>{
      const docRef = doc(projectFirestore,'jobs', id); 
      getDoc(docRef).then((doc)=>{
        console.log(doc.data())
        if(doc.exists)
        {
          setData(doc.data())
        }
        else{
          console.log('Could not find that recipe')
        }
      })
    },[id])

  const [name, setName] = useState('');
  const [desc, setDescription] = useState('');
  const [link,setLink]=useState('');

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    console.log("Applied")
    Email.send({
      SecureToken: '2bf444f3-cb85-4ace-8f49-76f91c378c20',
      To: data.email,
      From:'dkhelp02@gmail.com' ,
      Subject: "Job application",
      Body: `Dear Sir/Madam,

      I hope this email finds you well. My name is ${name} and I am reaching out to express my interest in the ${data.profile} position that I saw listed on Pocket Money.
      
      I have attached my resume to this email for your review. You can access it by clicking on the following link: ${link}.
      
      I am a highly motivated and skilled . I am confident that my skills and experience make me a strong candidate for the position.
      
      I would love the opportunity to speak with you further about the position and how my experience aligns with the requirements. Thank you for considering my application.
      
      Best regards,
      
      ${name}`,
    }).then((message) => alert(message));
  }

  return (
    <Container className="post-container">
      <Form onSubmit={handleSubmit} className="post-form">
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridRole">
          <Form.Label>Resume Link</Form.Label>
          <Form.Control type="text" placeholder="Resume Link" value={link} onChange={(e) => setLink(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formGridDesc">
          <Form.Label>About Yourself</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter description" value={desc} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Container className="text-center">
          <Button variant="dark" type="submit" style={{backgroundColor:"green"}}>
            Apply
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default ApplyJob;
