import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NotFound404() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <Row >
        <Col >
          <h1 className="mb-4">404 Not Found</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound404;
