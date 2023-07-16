import  { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Ticket = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
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
                assistanceTime: ''
    });


    let [warningName, setWarningName] = useState(false);
    let [warningContactNumber, setWarningContactNumber] = useState(false);
    let [warningEmail, setWarningEmail] = useState(false);
    let [warningVehicleRegNumber, setWarningVehicleRegNumber] = useState(false);

    const handleInput = (fieldName, value) => {
       

        if(fieldName === 'name'){
             
            if(/^[a-zA-Z ]*$/.test(value)){
               
               setFormData(prevFormData => ({...prevFormData, name: value}));
               setWarningName(false);
               setReqiredName(false);
            }else{
                setFormData(prevFormData => ({...prevFormData, name: ''}))
                setWarningName(true);
            }
        }

        if(fieldName === 'contactNumber'){
            setFormData(prevFormData => ({...prevFormData,contactNumber:value}));
            setReqiredContact(false);
            if(value.toString().length === 10 ){
                setWarningContactNumber(false);        
            }else if(value.toString().length > 10){
                setWarningContactNumber(true);
            }else{
                setWarningContactNumber(true);
            }
            
        }

        if(fieldName === 'email'){
            if(!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value))){
                setWarningEmail(true);
            }else{
                setWarningEmail(false);
            }
            setFormData(prevFormData => ({...prevFormData, email: value})) 
            
        }

        if(fieldName === 'vehicleMake'){
            setFormData(prevFormData => ({...prevFormData, vehicleMake: value}))
            setReqiredVehicleMake(false)
        }

        if(fieldName === 'vehicleRegNumber'){
        setFormData(prevFormData => ({...prevFormData, vehicleRegNumber: value.toUpperCase()}))
        setReqiredVehicleRegNumber(false);
            if(!(/^[a-zA-Z0-9]*$/.test(value))){
                    setWarningVehicleRegNumber(true)
            }else{
                setWarningVehicleRegNumber(false);
            }
        }
        
        if(fieldName === 'breakdownIssue'){
            setFormData(prevFormData => ({...prevFormData, breakdownIssue: value}))
            setReqiredBreakdownIssue(false);
        }
        
        if(fieldName === 'location'){
            setFormData(prevFormData => ({...prevFormData, location: value}));
            setReqiredLocation(false);
        }

        if(fieldName === 'comments'){
            setFormData(prevFormData => ({...prevFormData, comments: value}))
            setReqiredComments(false);
        }

        if(fieldName === 'serviceFee'){
            setFormData(prevFormData => ({...prevFormData, serviceFee: value}))
        }
    }

    const handleSelect = (value) => {
        setFormData(prevFormData => ({...prevFormData, leadSource: value}));
        setReqiredLead(false);
    }

    const handleselectBlur = (value) => {
        if(!value){
            setReqiredLead(true);
        }
    }
    const [requiredName, setReqiredName]= useState(false);
    const [requiredContact, setReqiredContact]= useState(false);
    const [requiredEmail, setReqiredEmail]= useState(false);
    const [requiredVehicleMake, setReqiredVehicleMake]= useState(false);
    const [requiredVehicleRegNumber, setReqiredVehicleRegNumber]= useState(false);
    const [requiredBreakdownIssue, setReqiredBreakdownIssue]= useState(false);
    const [requiredLocation, setReqiredLocation]= useState(false);
    const [requiredAssistanceTime, setReqiredAssistanceTime]= useState(false);
    const [requiredComments, setReqiredComments]= useState(false);
    const [requiredLead, setReqiredLead]= useState(false);
   
    const handleBlur = (fieldName, value) => {
       if(fieldName === 'name'){
        if(!value){
            setWarningName(false);
            setReqiredName(true);
         }
       }

       if(fieldName === 'contactNumber'){
        if(!value){
            setReqiredContact(true);
        }
       }
       if(fieldName === 'email'){
           if(!value) setReqiredEmail(true);
           if(!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value))){
            setWarningEmail(true);
            setFormData(prevFormData => ({...prevFormData, email: ''}))
        }
        }

        if(fieldName === 'vehicleMake'){
            if(!value) setReqiredVehicleMake(true);
         }
         if(fieldName === 'vehicleRegNumber'){
            if(!value) setReqiredVehicleRegNumber(true);
         }

         if(fieldName === 'breakdownIssue'){
            if(!value) setReqiredBreakdownIssue(true);
         }

         if(fieldName === 'location'){
            if(!value) setReqiredLocation(true);
         }

         if(fieldName === 'assistanceTime'){
            if(!value) setReqiredAssistanceTime(true);
         }

         if(fieldName === 'comments'){
            if(!value) setReqiredComments(true);
         }
       
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name && formData.email && formData.contactNumber && formData.assistanceTime && formData.comments && formData.breakdownIssue && formData.leadSource && formData.vehicleMake && formData.vehicleRegNumber){
            setShowAlert(true);
        }
    }
    const handleClose = () => {
        setShowAlert(false);
    }

  return (
    <>
       {showAlert && <div className='popup-wrapper'><div className='success-popup'>
                <img src='https://w7.pngwing.com/pngs/442/715/png-transparent-check-mark-computer-icons-icon-design-cheque-successful-angle-logo-grass.png' alt='success' />
                <p>Ticket created successfully</p>
                <Button onClick={handleClose}>Close</Button>
            </div>
            </div>
        }
     <Container className='ticket-container'>
        
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className='ticket'>
            <h3>New Ticket</h3>

           

            <form autoComplete='off' onSubmit={e => handleSubmit(e)}>
            <div className="mb-3">
                <label className="form-label">Lead</label>
                <select name="leadSource"
                      className={formData.leadSource ? `form-control is-valid`: `form-control`}
                      value={formData.leadSource}
                      onChange={e => handleSelect( e.target.value)}
                      onBlur={e => handleselectBlur(e.target.value)}>
                      <option value="">Select Lead Source</option>
                      <option value="Web">Web</option>
                      <option value="Chat">Chat</option>
                      <option value="Call">Call</option>
                </select>
                {requiredLead && <div className='mt-1 text-danger'>Choose a lead</div>}
            </div>


            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className={formData.name ? `form-control is-valid`: `form-control`} id="formGroupExampleInput"  name='name' value={formData.name}
                onChange={e => handleInput(e.target.name, e.target.value)} onBlur={e => handleBlur(e.target.name,e.target.value)} required/>
                {warningName && <div className='mt-1 text-danger'>Name cannot contain numbers and special characters</div>}
                {requiredName && <div className='mt-1 text-danger'>Name is a required field</div>}
            </div>

            <div className="mb-3">
                <label  className="form-label">Contact Number</label>
                <input type="number" className={formData.contactNumber && !warningContactNumber ? `form-control is-valid`: `form-control`} id="formGroupExampleInput2" name='contactNumber'  value={formData.contactNumber}
                onBlur={e => handleBlur(e.target.name,e.target.value)} onChange={e => handleInput(e.target.name, e.target.value)}/>
                {requiredContact && <div className='mt-1 text-danger'>Contact number is a required number</div>}
                {warningContactNumber && <div className='mt-1 text-danger'>Contact Number should consist 10 numbers</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" 
                       className={!warningEmail && formData.email ? `form-control is-valid`: `form-control`}  
                       id="formGroupExampleInput" 
                       name='email' 
                       value={formData.email} 
                       onBlur={e => handleBlur(e.target.name,e.target.value)}
                       onChange={e => handleInput(e.target.name, e.target.value)}/>
                 {requiredEmail && <div className='mt-1 text-danger'>Email is a required field</div>}
                 {warningEmail && <div className='mt-1 text-danger'>Email looks incomplete or wrong</div>}
            </div>

            <div className="mb-3">
                <label  className="form-label">Vehicle Make</label>
                <input type="text" 
                       className={ formData.vehicleMake ? `form-control is-valid`: `form-control`}
                       id="formGroupExampleInput2" 
                       name='vehicleMake'  
                       value={formData.vehicleMake} 
                       onChange={e => handleInput(e.target.name, e.target.value)} 
                       onBlur={e => handleBlur(e.target.name,e.target.value)}/>
                {requiredVehicleMake && <div className='mt-1 text-danger'>Vehicle make is a required field</div>}
            </div>

            <div className="mb-3">
                <label className="form-label"> Vehicle Registration Number</label>
                <input 
                      type="text" 
                      className={ formData.vehicleRegNumber && !warningVehicleRegNumber ? `form-control is-valid`: `form-control`} 
                      id="formGroupExampleInput" 
                      value={formData.vehicleRegNumber}  
                      name='vehicleRegNumber'
                      onChange={e => handleInput(e.target.name, e.target.value)} 
                      onBlur={e => handleBlur(e.target.name,e.target.value)}/>
                 {requiredVehicleRegNumber && <div className='mt-1 text-danger'>Vehicle registration number is a required field</div>}
                 {warningVehicleRegNumber && <div  className='mt-1 text-danger'> Vehicle registration number cannot contain spaces or specail characters</div>}
            </div>

            <div className="mb-3">
                <label  className="form-label">Breakdown Issue</label>
                <input 
                     type="text" 
                     className={ formData.breakdownIssue ? `form-control is-valid`: `form-control`}
                     id="formGroupExampleInput2" 
                     value={formData.breakdownIssue} 
                     name='breakdownIssue'
                     onChange={e => handleInput(e.target.name, e.target.value)} 
                     onBlur={e => handleBlur(e.target.name,e.target.value)}/>
                 {requiredBreakdownIssue && <div className='mt-1 text-danger'>Breakdown issue is a required field</div>}      
            </div>

            <div className="mb-3">
                <label className="form-label">Location</label>
                <input type="text" 
                       className={ formData.location ? `form-control is-valid`: `form-control`} 
                       id="formGroupExampleInput" 
                       value={formData.location} 
                       name='location'
                       onBlur={e => handleBlur(e.target.name,e.target.value)}
                       onChange={e => handleInput(e.target.name, e.target.value)} />
                {requiredLocation && <div className='mt-1 text-danger'>Location is a required field</div>}
            </div>
            <div className="mb-3">
                <label  className="form-label">Service Fee</label>
                <input 
                    type="number" 
                    className={formData.serviceFee ? `form-control is-valid`: `form-control`}
                    id="formGroupExampleInput2" 
                    value={formData.serviceFee} 
                    name='serviceFee'
                    onChange={e => handleInput(e.target.name, e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Assistance Time</label><br/>
                <DatePicker
                    selected={formData.assistanceTime}
                    onChange={(date) => {
                        setFormData(prevFormData => ({...prevFormData, assistanceTime: date}));
                        setReqiredAssistanceTime(false)
                }}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className={formData.assistanceTime ? `form-control is-valid`: `form-control`}
                    placeholderText={Date()}
                    name='assistanceTime'
                    onBlur={e => handleBlur(e.target.name,e.target.value)}
                />
                {requiredAssistanceTime && <span className='mt-1 text-danger'>Assistance time is a required field</span>}
            </div>
            <div className="mb-3">
                <label  className="form-label">Comments</label>
                <input 
                      type="text" 
                      className={ formData.comments ? `form-control is-valid`: `form-control`}  
                      id="formGroupExampleInput2" 
                      name='comments'
                      onChange={e => handleInput(e.target.name, e.target.value)}
                      onBlur={e => handleBlur(e.target.name,e.target.value)}/>
                 {requiredComments && <div className='mt-1 text-danger'>Comments is a required field</div>}
            </div>

           

            <Button variant="primary" type="submit">
                    Submit
            </Button>
            </form>
          </Col>
        </Row>
      </Container>
      </>
    );
  };
  
  


export default Ticket;