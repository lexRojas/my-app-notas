import Card from "react-bootstrap/Card";
import Context from "../context/Context";
import { useContext } from "react";

function Tarjeta() {
  const { notas,notaTemporal } = useContext(Context);
  

  let mensaje = "";
  let diseño = "";

  if (notaTemporal >= 70) {
    mensaje = "Felicidades has aprobado el curso, este periodo!!";
    diseño = 'tarjeta-aprobado'
  } else {
    mensaje = "Lamentablemente has reprobado este periodo!!";
    diseño ="tarjeta-reprobado"
  }

  return (
    <>
      {(notas.length>0) ? (
        <Card className={diseño}> 
          <Card.Body>{mensaje}</Card.Body>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}

export default Tarjeta;
