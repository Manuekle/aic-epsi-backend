/* eslint-disable default-param-last */
import {
  AUTORIZACION_LIST_REQUEST,
  AUTORIZACION_LIST_SUCCESS,
  AUTORIZACION_LIST_FAIL,
  AUTORIZACION_DETAILS_REQUEST,
  AUTORIZACION_DETAILS_SUCCESS,
  AUTORIZACION_DETAILS_FAIL,
  AUTORIZACION_DELETE_REQUEST,
  AUTORIZACION_DELETE_SUCCESS,
  AUTORIZACION_DELETE_FAIL,
  AUTORIZACION_CREATE_REQUEST,
  AUTORIZACION_CREATE_SUCCESS,
  AUTORIZACION_CREATE_FAIL,
  AUTORIZACION_CREATE_RESET,
  AUTORIZACION_UPDATE_REQUEST,
  AUTORIZACION_UPDATE_SUCCESS,
  AUTORIZACION_UPDATE_FAIL,
  AUTORIZACION_UPDATE_RESET
} from '../constants/autorizacionConstants';

//* GET REDUCER AUTORIZACION
export const listAutorizacionReducer = (
  state = { autorizacion: [] },
  action
) => {
  switch (action.type) {
    case AUTORIZACION_LIST_REQUEST:
      return { loading: true, autorizacion: [] };

    case AUTORIZACION_LIST_SUCCESS:
      return {
        loading: false,
        autorizacion: action.payload
      };

    case AUTORIZACION_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const detailsAutorizacionReducer = (
  state = { autorizacion: [] },
  action
) => {
  switch (action.type) {
    case AUTORIZACION_DETAILS_REQUEST:
      return { loading: true, autorizacion: [] };

    case AUTORIZACION_DETAILS_SUCCESS:
      return {
        loading: false,
        autorizacion: action.payload
      };

    case AUTORIZACION_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// ? POST REDUCER AUTORIZACION
export const createAutorizacionReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTORIZACION_CREATE_REQUEST:
      return { loading: true };

    case AUTORIZACION_CREATE_SUCCESS:
      return { loading: false, success: true, autorizacion: action.payload };

    case AUTORIZACION_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case AUTORIZACION_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

// TODO: UPDATE REDUCER AUTORIZACION
export const updateAutorizacionReducer = (
  state = { autorizacion: {} },
  action
) => {
  switch (action.type) {
    case AUTORIZACION_UPDATE_REQUEST:
      return { loading: true };

    case AUTORIZACION_UPDATE_SUCCESS:
      return { loading: false, success: true, autorizacion: action.payload };

    case AUTORIZACION_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case AUTORIZACION_UPDATE_RESET:
      return { autorizacion: {} };

    default:
      return state;
  }
};

//! DELETE REDUCER AUTORIZACION
export const deleteAutorizacionReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTORIZACION_DELETE_REQUEST:
      return { loading: true };

    case AUTORIZACION_DELETE_SUCCESS:
      return { loading: false, success: true };

    case AUTORIZACION_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
