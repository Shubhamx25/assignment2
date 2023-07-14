import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Landing = ({ username }) => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning';
      } else if (currentHour >= 12 && currentHour < 16) {
        return 'Good Afternoon';
      } else {
        return 'Good Evening';
      }
    };
  
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}  className="justify-content-center landing-page p-3 ">
            <h1>Welcome,</h1>
            <p>{`${getGreeting()}, Rescuer! How are you doing today, ${username}?`}</p>
            <Link to="/new-ticket">Create New Ticket</Link>
          </Col>
        </Row>
      </Container>
    );
  };
  

export default Landing