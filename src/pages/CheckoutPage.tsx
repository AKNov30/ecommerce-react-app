import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CheckoutPage() {
  return (
    <>
      <Container className="p-3">
        <div className="text-center">
          <h1>Checkout form</h1>
          <p>กรุณากรอกข้อมูลการชำระเงินของคุณด้านล่างเพื่อยืนยันการสั่งซื้อ</p>
        </div>
        <Row xs={12} md={8}>
          <Col>
            <h2>Billing address</h2>
            <form>
              <Row>
                <Col xs={6}>
                  <label>First name</label>
                  <input type="text" className="form-control" />
                </Col>
                <Col xs={6}>
                  <label>Last name</label>
                  <input type="text" className="form-control" />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <label>Username</label>
                  <input type="text" className="form-control" />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <label>Email</label>
                  <input type="email" className="form-control" />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <label>Address</label>
                  <input type="text" className="form-control" />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <label>City</label>
                  <input type="text" className="form-control" />
                </Col>
                <Col xs={3}>
                  <label>State</label>
                  <select className="form-control">
                    <option>Choose...</option>
                    <option>...</option>
                  </select>
                </Col>
                <Col xs={3}>
                  <label>Zip</label>
                  <input type="text" className="form-control" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Country</label>
                  <select className="form-control">
                    <option>Choose...</option>
                    <option>...</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="checkbox" />
                  <label>
                    {" "}
                    Shipping address is the same as my billing address
                  </label>
                </Col>
              </Row>
            </form>
          </Col>

          <Col xs={12} md={4}>
            <h2>Your cart</h2>
            <ul className="list-group">
              <li className="list-group-item">Product 1 - $50</li>
              <li className="list-group-item">Product 2 - $100</li>
              <li className="list-group-item">Product 3 - $70</li>
              <li className="list-group-item">Promo Code: - $20</li>
              <li className="list-group-item">Total: $200</li>
            </ul>
            <button className="btn btn-primary mt-3">Checkout</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CheckoutPage;
