import "./App.css";
import AccessPage from "./components/AccessPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TablaValores from "./components/TablaValores";
import UseState from "./context/UseState";
import Tarjeta from "./components/Tarjeta";

function App() {


  return (
    <UseState>
      <Container fluid="p-1 solid fondo">
        <Row className="p-1 justify-content-center">
          <Col md={3}>
            <AccessPage />
          </Col>
        </Row>
        <Row>
          <Col>
            <TablaValores/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tarjeta/>
          </Col>
        </Row>

      </Container>
    </UseState>
  );
}
export default App;
