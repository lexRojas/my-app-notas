import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Context from "../context/Context";
import { useContext, useEffect, useRef, useState } from "react";

function AccessPage() {
  const {
    setId,
    setMateria,
    setShowData,
    getNotas,
    getEstudiante,
    estudiante,
  } = useContext(Context);

  const [name, setName] = useState("");
  const inputRef = useRef() 


  async function loadData() {
    await getEstudiante();
    await getNotas();
  }

  useEffect(() => {
    let n=""
    if (estudiante.length > 0) {
      estudiante.map(({ nombre }) => (n = nombre));
      setName(n);
    } else {
      setName("");
    }
  }, [estudiante]);

  function handleClick() {
    loadData();
    setShowData(true);
    const input = inputRef.current
    input.select()
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container className=" fondo-form container-fluid App-header">
      <Row>
        <Col className="fondo-form-title">
          <p>CTTP - Las Palmitas</p>
          <p> STN 2023 v2.1</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Digite su cédula:</Form.Label>
              <Form.Control
                ref={inputRef}
                type="number"
                placeholder="109990111"
                onChange={(e) => setId(e.target.value)}
              />

              <Form.Label>Seleccione su materia:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setMateria(e.currentTarget.value);
                }}
              >
                <option value="1">Entorno</option>
                <option value="2">Redes</option>
                <option value="3">Sistemas Operativos</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className=" p-3">
        <Col>
          <Button onClick={handleClick} variant="primary">
            Ver Notas
          </Button>
        </Col>
      </Row>
      <Row className=" p-3">
        <Col>
          <h2>{name}</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default AccessPage;
