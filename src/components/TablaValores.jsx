import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Context from "../context/Context";

function TablaValores() {
  const { notas, notaTemporal } = useContext(Context);




  return (
    <>
      {(notas.length >0) ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Rubros</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {notas.map(({ idRubro, rubro, valor }) => (
              <tr key={idRubro}>
                <th> {idRubro} </th>
                <th> {rubro} </th>
                <th> {valor} </th>
              </tr>
            ))}
            <tr key={100}>
              <th> * </th>
              <th>
                <strong> TOTAL:</strong>
              </th>
              <th>
                <strong>{notaTemporal}</strong>
              </th>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div className="m-3 text-center alert alert-danger" role="alert">
          <p> No hay datos</p>
          <br/>
          <p>Verifique si esta digitanto correctamente su número de cédula!</p>
        </div>
      )}
    </>
  );
}

export default TablaValores;
