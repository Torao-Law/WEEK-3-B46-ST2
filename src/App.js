import { useContext, useEffect } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {UserContext as User} from "./config/userContext"

import Welcome from "./Welcome"
import GuestGreeting from "./GuestGreeting"

function App() {
    const [state, dispatch] = useContext(User)
  
    // phase did mount / will unmount
    useEffect(() => {
        console.log("Componen Mounting")
        console.log(state)
        // eslint-disable-next-line
    }, [])
    
    // phase updating
    useEffect(() => {
        if(state.user.email) {
            console.log("Componen Updating")
            console.log(state)
        }
    }, [state])

    function handleOnSubmit(e) {
        e.preventDefault()
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const data = {
          email,
          password
        }

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: data
        })
    }

    return (
        <>
        {state.isLogin ? (
          <Welcome />
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
