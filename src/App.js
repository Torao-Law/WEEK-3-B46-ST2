import {useState, useEffect} from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Welcome from "./Welcome"
import GuestGreeting from "./GuestGreeting"

function App() {
    const [data, setData] = useState({
        isLogin: false,
        user: {
            email: "",
            password: "",
        }
    })
  
    // phase did mount / will unmount
    useEffect(() => {
        console.log("Componen Mounting")
        console.log(data)
        // eslint-disable-next-line
    }, [])
    
    // phase updating
    useEffect(() => {
        if(data.user.email) {
            console.log("Componen Updating")
            console.log(data)
        }
    }, [data])

    function handleOnSubmit(e) {
        e.preventDefault()
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        setData({
            isLogin: true,
            user: {
                email,
                password
            }
        })
    }

    const handleLogout = () => {
      setData({
        isLogin: false,
        user: {}
    })
    }

    return (
        <>
        {data.isLogin ? (
          <Welcome logout={handleLogout}/>
        ) : (
          <>
            <GuestGreeting />
            
            <Container>
              <Row className="d-flex justify-content-center mt-5">
                <Col md="4">
                  <Form onSubmit={handleOnSubmit}>
                    <div className="text-center h5">Login</div>

                    <Form.Group className="mb-3" >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        id="email"
                        name="email"
                        size="sm"
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        id="password"
                        name="password"
                        size="sm"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="sm">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </>
    );
}

export default App
