import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {data} from '../users/data';

const Login = ({ onLogin }) => {
    const handleLogin = (values) => {
      data.forEach((userInfo) => {
        if(userInfo.username === values.username && userInfo.password === values.password){
            onLogin(values.username);
        }else {
            alert('Invalid username or password');
        }
      })
    };
  
    const validationSchema = Yup.object().shape({
      username: Yup.string().max(50, 'Too Long!').required('Username is required'),
      password: Yup.string().min(8, 'Password must  be 8 character or more').required('Password is required'),
    });
  
    return (
      <Container className='login-container'>
        <Row className="justify-content-center " >
          <Col xs={12} md={6} lg={4} className='login'>
            <h4>Login Page</h4>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} autoComplete='off'>
                  <div className="form-group">
                    <label >Username</label>
                    <Field
                      type="text"
                      name="username"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="username"
                      component="span"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-danger"
                    />
                  </div>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
            
            <a href="#" onClick={() => alert('Forgot password not implemented')}>Forgot Password?</a>
          </Col>
        </Row>
      </Container>
    );
  };
  

export default Login;