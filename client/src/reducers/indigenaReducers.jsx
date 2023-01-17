/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
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

//* GET REDUCER INDIGENA
export const listIndigenaReducer = (state = { indigena: [] }, action) => {
  switch (action.type) {
    case INDIGENA_LIST_REQUEST:
      return { loading: true, indigena: [] };

    case INDIGENA_LIST_SUCCESS:
      return {
        loading: false,
        indigena: action.payload
      };

    case INDIGENA_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const detailsIndigenaReducer = (state = { indigena: [] }, action) => {
  switch (action.type) {
    case INDIGENA_DETAILS_REQUEST:
      return { loading: true, indigena: [] };

    case INDIGENA_DETAILS_SUCCESS:
      return {
        loading: false,
        indigena: action.payload
      };

    case INDIGENA_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// ? POST REDUCER INDIGENA
export const createIndigenaReducer = (state = {}, action) => {
  switch (action.type) {
    case INDIGENA_CREATE_REQUEST:
      return { loading: true };

    case INDIGENA_CREATE_SUCCESS:
      return { loading: false, success: true, indigena: action.payload };

    case INDIGENA_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case INDIGENA_CREATE_RESET:
      return {};

    default:
      return state;
  }
};
