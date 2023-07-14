import  { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewTicketPage = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [assistanceTime, setAssistanceTime] = useState(null);


    const handleFormSubmit = (values) => {
      
      setShowAlert(true);
      
    };

  
    const validationSchema = Yup.object().shape({
      leadSource: Yup.string().required('Lead Source is required'),
      name: Yup.string().required('Name is required'),
      contactNumber: Yup.string().required('Contact Number is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      vehicleMake: Yup.string().required('Vehicle Make is required'),
      vehicleRegNumber: Yup.string().trim('No spaces allowed')
        .required('Vehicle Registration Number is required')
        .matches(/^[a-zA-Z0-9]*$/, 'Invalid Registration Number'),
      breakdownIssue: Yup.string().required('Breakdown Issue is required'),
      serviceFee:Yup.string(),
      location: Yup.string().required('Location is required'),
      comments: Yup.string().required('Comments is required'),
      assistanceTime: Yup.string(),
    });
  
    return (
      <Container className='ticket-container'>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}className='ticket'>
            <h1>New Ticket</h1>
            {showAlert &&  (
               <Modal
               
               show = {showAlert}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
             >
               <Modal.Header closeButton>
                 <Modal.Title id="contained-modal-title-vcenter">
                   Success!
                 </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <h4>Ticket created Successfully</h4>
                 <p>
                   Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                   dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                   consectetur ac, vestibulum at eros.
                 </p>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={()=> setShowAlert(false)}>Close</Button>
               </Modal.Footer>
             </Modal>
            )}
            <Formik
              initialValues={{
                leadSource: '',
                name: '',
                contactNumber: '',
                email: '',
                vehicleMake: '',
                vehicleRegNumber: '',
                breakdownIssue: '',
                serviceFee:'',
                location: '',
                comments: '',
                assistanceTime: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label >Lead Source</label>
                    <Field
                      as="select"
                      name="leadSource"
                      className="form-control"
                    >
                      <option value="">Select Lead Source</option>
                      <option value="Web">Web</option>
                      <option value="Chat">Chat</option>
                      <option value="Call">Call</option>
                    </Field>
                    <ErrorMessage
                      name="leadSource"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label >Contact Number</label>
                    <Field
                      type="text"
                      name="contactNumber"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="contactNumber"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label >Email Address</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label >Vehicle Make</label>
                    <Field
                      type="text"
                      name="vehicleMake"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="vehicleMake"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label >
                      Vehicle Registration Number
                    </label>
                    <Field
                      type="text"
                      name="vehicleRegNumber"
                      className="form-control registration-number"
                    />
                    <ErrorMessage
                      name="vehicleRegNumber"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label >Breakdown Issue</label>
                    <Field
                      type="text"
                      name="breakdownIssue"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="breakdownIssue"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label >Location</label>
                    <Field type="text" name="location" className="form-control" />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label >Service Fee</label>
                    <Field type="text" name="serviceFee" className="form-control" />
                    <ErrorMessage
                      name="serviceFee"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                  <label >Assistance Time</label>
                  <br />
                  <DatePicker
                    selected={assistanceTime}
                    onChange={(date) => setAssistanceTime(date)}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="form-control"
                    placeholderText={Date()}
                  />
                  <ErrorMessage
                    name="assistanceTime"
                    component="div"
                    className="text-danger"
                  />
                </div>
                  <div className="form-group">
                    <label >Comments</label>
                    <Field
                      as="textarea"
                      name="comments"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="comments"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    );
  };
  
  

export default NewTicketPage