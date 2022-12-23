import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { UserContext } from "../components/context";
import "../App.css";
export function Home() {
  const ctx = useContext(UserContext);
  return (
    <Row>
      <Col xs={12} lg={12}>
        <Card className="card" border="dark">
          <Card.Body class="center">
            <Card.Title>
              <h2> Welcome to Bank of Meyer.</h2>
            </Card.Title>
            <Card.Text>
              <h5>To ensure privacy, never share sensitive information.</h5>
              <img
                src="/bank.png"
                alt="bank-cover"
                class="img-fluid"
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
