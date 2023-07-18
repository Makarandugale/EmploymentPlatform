import React from "react";
import { Form, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'
import { useNavigate } from "react-router-dom";

function Signup() {
  const [value, setValue] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email)
      .then((cred) => {
        console.log('user created ', cred.user)
        navigate("/dashboardform")
      })
    console.log("Submitted")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          onChange={(e) => { setEmail(e.target.value) }}
          value={email}
        />
        <Form.Text className="text-muted">
          Your data is safe with us.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Full name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone no.</Form.Label>
        <PhoneInput
          country={"ind"}
          value={value}
          onChange={setValue}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          onChange={(e) => { setPassword(e.target) }}
          value={password}
        />
      </Form.Group>
      <Button variant="dark" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
