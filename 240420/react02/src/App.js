import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
