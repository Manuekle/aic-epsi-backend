/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import axios from 'axios';

import {
  INDIGENA_LIST_REQUEST,
  INDIGENA_LIST_SUCCESS,
  INDIGENA_LIST_FAIL,
  INDIGENA_DETAILS_REQUEST,
  INDIGENA_DETAILS_SUCCESS,
  INDIGENA_DETAILS_FAIL,
  INDIGENA_DELETE_REQUEST,
  INDIGENA_DELETE_SUCCESS,
  INDIGENA_DELETE_FAIL,
  INDIGENA_CREATE_REQUEST,
  INDIGENA_CREATE_SUCCESS,
  INDIGENA_CREATE_FAIL,
  INDIGENA_CREATE_RESET,
  INDIGENA_UPDATE_REQUEST,
  INDIGENA_UPDATE_SUCCESS,
  INDIGENA_UPDATE_FAIL,
  INDIGENA_UPDATE_RESET
} from '../constants/indigenaConstants';

//* GET AUTORIZACION
export const listIndigenas = () => async (dispatch) => {
  try {
    dispatch({ type: INDIGENA_LIST_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/indigena`);

    dispatch({
      type: INDIGENA_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INDIGENA_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

export const getIndigenaDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: INDIGENA_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/indigena/${id}`);

    dispatch({
      type: INDIGENA_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INDIGENA_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

// ? POST AUTORIZACION
export const createIndigena = (res) => async (dispatch) => {
  try {
    dispatch({
      type: INDIGENA_CREATE_REQUEST
    });

    const { data } = await axios.post(`http://localhost:4000/indigena`, res);
    dispatch({
      type: INDIGENA_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INDIGENA_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};
