/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import axios from 'axios';

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

//* GET AUTORIZACION
export const listAutorizaciones = () => async (dispatch) => {
  try {
    dispatch({ type: AUTORIZACION_LIST_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/autorizacion`);

    dispatch({
      type: AUTORIZACION_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTORIZACION_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

export const getAutorizacionDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: AUTORIZACION_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:4000/autorizacion/${id}`
    );

    dispatch({
      type: AUTORIZACION_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTORIZACION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

// ? POST AUTORIZACION
export const createAutorizacion = (res) => async (dispatch) => {
  try {
    dispatch({
      type: AUTORIZACION_CREATE_REQUEST
    });

    const { data } = await axios.post(
      `http://localhost:4000/autorizacion`,
      res
    );
    dispatch({
      type: AUTORIZACION_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTORIZACION_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

// TODO: UPDATE AUTORIZACION
export const updateAutorizacion = (autorizacion) => async (dispatch) => {
  try {
    dispatch({
      type: AUTORIZACION_UPDATE_REQUEST
    });

    const { data } = await axios.put(
      `http://localhost:4000/autorizacion/${autorizacion.id}/`,
      autorizacion
    );
    dispatch({
      type: AUTORIZACION_UPDATE_SUCCESS,
      payload: data
    });

    dispatch({
      type: AUTORIZACION_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AUTORIZACION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

//! DELETE AUTORIZACION
export const deleteAutorizacion = (id) => async (dispatch) => {
  try {
    dispatch({
      type: AUTORIZACION_DELETE_REQUEST
    });

    const { data } = await axios.delete(
      `http://localhost:4000/autorizacion/${id}/`
    );

    dispatch({
      type: AUTORIZACION_DELETE_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: AUTORIZACION_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};
