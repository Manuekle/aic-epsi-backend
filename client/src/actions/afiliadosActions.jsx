/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import axios from 'axios';

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

//* GET AFILIADOS
export const listAfiliados = () => async (dispatch) => {
  try {
    dispatch({ type: AFILIADOS_LIST_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/afiliados`);

    dispatch({
      type: AFILIADOS_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AFILIADOS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

export const getAfiliadoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: AFILIADOS_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/afiliados/${id}`);

    dispatch({
      type: AFILIADOS_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AFILIADOS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

// ? POST AFILIADO
export const createAfiliado = () => async (dispatch) => {
  try {
    dispatch({
      type: AFILIADOS_CREATE_REQUEST
    });

    const { data } = await axios.post(`http://localhost:4000/afiliados`, {});
    dispatch({
      type: AFILIADOS_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AFILIADOS_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

// TODO: UPDATE AFILIADO
export const updateAfiliado = (afiliado) => async (dispatch) => {
  try {
    dispatch({
      type: AFILIADOS_UPDATE_REQUEST
    });

    const { data } = await axios.put(
      `http://localhost:4000/afiliados/${afiliado.id}/`,
      afiliado
    );
    dispatch({
      type: AFILIADOS_UPDATE_SUCCESS,
      payload: data
    });

    dispatch({
      type: AFILIADOS_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: AFILIADOS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

//! DELETE AFILIADO
export const deleteAfiliado = (id) => async (dispatch) => {
  try {
    dispatch({
      type: AFILIADOS_DELETE_REQUEST
    });

    const { data } = await axios.delete(
      `http://localhost:4000/afiliados/${id}/`
    );

    dispatch({
      type: AFILIADOS_DELETE_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: AFILIADOS_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};
