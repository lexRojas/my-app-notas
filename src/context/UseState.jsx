import React from "react";
import Context from "./Context";
import { useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";

function UseState(props) {
  const initialstate = {
    verDatos: false,
    id: 0,
    idMateria: 1,
    notas: [],
    estudiante:[],
    notaTemporal: 0,
  };

  const [state, dispatch] = useReducer(Reducer, initialstate);

  const setShowData = (value) => {
    dispatch({
      type: "SET_SHOW",
      payload: value,
    });
  };

  const setId = (value) => {
    dispatch({
      type: "SET_ID",
      payload: value,
    });
  };

  const setMateria = (value) => {
    dispatch({
      type: "SET_MATERIA",
      payload: value,
    });
  };

  const getNotas = async () => {
    const baseURL = "https://lexrojas-backend-c21ed8c2c96d.herokuapp.com/notas";
    let nt = 0;
    let notas = [];

    await axios
      .get(baseURL, { params: { id: state.id, idMateria: state.idMateria } })
      .then(function (response) {
        notas = response.data;
        if (notas) {
          notas.map(({ valor }) => (nt += valor));
        }
        dispatch({
          type: "GET_NOTAS",
          payload: notas
        });
        dispatch({
          type: "SET_NOTA_TOTAL",
          payload: nt
        });
      })
      .catch(function (error) {
        notas = [];
        console.log('error');
        console.log(error);
      });
  };
  const getEstudiante = async () => {
    const baseURL = "https://lexrojas-backend-c21ed8c2c96d.herokuapp.com/estudiante";
    let estudiante = [];

    await axios
      .get(baseURL, { params: { id: state.id} })
      .then(function (response) {
        estudiante = response.data;
        dispatch({
          type: "GET_ESTUDIANTE",
          payload: estudiante
        });
      })
      .catch(function (error) {
        estudiante = [];
        console.log('error');
      });
  };

  return (
    <Context.Provider
      value={{
        id: state.id,
        showDatos: state.verDatos,
        idMateria: state.idMateria,
        notas: state.notas,
        estudiante : state.estudiante,
        notaTemporal: state.notaTemporal,
        setId,
        setShowData,
        setMateria,
        getNotas,
        getEstudiante
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default UseState;
