/* eslint-disable default-param-last */
import {
  AFILIADOS_LIST_REQUEST,
  AFILIADOS_LIST_SUCCESS,
  AFILIADOS_LIST_FAIL,
  AFILIADOS_DETAILS_REQUEST,
  AFILIADOS_DETAILS_SUCCESS,
  AFILIADOS_DETAILS_FAIL,
  AFILIADOS_DELETE_REQUEST,
  AFILIADOS_DELETE_SUCCESS,
  AFILIADOS_DELETE_FAIL,
  AFILIADOS_CREATE_REQUEST,
  AFILIADOS_CREATE_SUCCESS,
  AFILIADOS_CREATE_FAIL,
  AFILIADOS_CREATE_RESET,
  AFILIADOS_UPDATE_REQUEST,
  AFILIADOS_UPDATE_SUCCESS,
  AFILIADOS_UPDATE_FAIL,
  AFILIADOS_UPDATE_RESET
} from '../constants/afiliadosConstants';

//* GET REDUCER AFILIADOS
export const listAfiliadosReducer = (state = { afiliados: [] }, action) => {
  switch (action.type) {
    case AFILIADOS_LIST_REQUEST:
      return { loading: true, afiliados: [] };

    case AFILIADOS_LIST_SUCCESS:
      return {
        loading: false,
        afiliados: action.payload
      };

    case AFILIADOS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const detailsAfiliadoReducer = (state = { afiliados: [] }, action) => {
  switch (action.type) {
    case AFILIADOS_DETAILS_REQUEST:
      return { loading: true, afiliados: [] };

    case AFILIADOS_DETAILS_SUCCESS:
      return {
        loading: false,
        afiliados: action.payload
      };

    case AFILIADOS_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// ? POST REDUCER AFILIADO
export const createAfiliadoReducer = (state = {}, action) => {
  switch (action.type) {
    case AFILIADOS_CREATE_REQUEST:
      return { loading: true };

    case AFILIADOS_CREATE_SUCCESS:
      return { loading: false, success: true, afiliados: action.payload };

    case AFILIADOS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case AFILIADOS_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

// TODO: UPDATE REDUCER AFILIADO
export const updateAfiliadoReducer = (state = { afiliados: {} }, action) => {
  switch (action.type) {
    case AFILIADOS_UPDATE_REQUEST:
      return { loading: true };

    case AFILIADOS_UPDATE_SUCCESS:
      return { loading: false, success: true, afiliado: action.payload };

    case AFILIADOS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case AFILIADOS_UPDATE_RESET:
      return { afiliado: {} };

    default:
      return state;
  }
};

//! DELETE REDUCER AFILIADO
export const deleteAfiliadoReducer = (state = {}, action) => {
  switch (action.type) {
    case AFILIADOS_DELETE_REQUEST:
      return { loading: true };

    case AFILIADOS_DELETE_SUCCESS:
      return { loading: false, success: true };

    case AFILIADOS_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
