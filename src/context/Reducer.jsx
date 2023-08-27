/* eslint-disable import/no-anonymous-default-export */
import {
  SET_ID,
  SET_MATERIA,
  SET_SHOW,
  GET_NOTAS,
  SET_NOTA_TOTAL,
  GET_ESTUDIANTE,
} from "./types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_ID:
      return {
        ...state,
        id: payload,
      };
    case SET_SHOW:
      return {
        ...state,
        verDatos: payload,
      };
    case SET_MATERIA:
      return {
        ...state,
        idMateria: payload,
      };
    case GET_NOTAS:
      return {
        ...state,
        notas: payload,
      };
    case SET_NOTA_TOTAL:
      return {
        ...state,
        notaTemporal: payload,
      };
    case GET_ESTUDIANTE:
      return {
        ...state,
        estudiante: payload,
      };
    default:
      return { state };
  }
};
