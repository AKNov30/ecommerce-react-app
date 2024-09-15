import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
    const products = [
        { id: 1, name: 'Product 1', image: 'https://placehold.co/600x400?text=Product+1'},
        { id: 2, name: 'Product 2', image: 'https://placehold.co/600x400?text=Product+2'},
        { id: 3, name: 'Product 3', image: 'https://placehold.co/600x400?text=Product+3'}
      ];
  return (
    <>
      <Container className="p-3">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
        <Container>
          <Row className="g-4 justify-content-center">
            {products.map((product) => (
              <Col md={4} className="d-flex justify-content-center align-items-center" key={product.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                      View
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default HomePage;
