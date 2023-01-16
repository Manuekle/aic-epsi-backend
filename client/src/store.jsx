import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  listAfiliadosReducer,
  detailsAfiliadoReducer,
  createAfiliadoReducer,
  updateAfiliadoReducer,
  deleteAfiliadoReducer
} from './reducers/afiliadosReducers';

import {
  listAutorizacionReducer,
  detailsAutorizacionReducer,
  createAutorizacionReducer,
  updateAutorizacionReducer,
  deleteAutorizacionReducer
} from './reducers/autorizacionReducers';

const reducer = combineReducers({
  // * Afiliados
  afiliadosList: listAfiliadosReducer,
  afiliadoDetail: detailsAfiliadoReducer,
  afiliadoCreate: createAfiliadoReducer,
  afiliadoUpdate: updateAfiliadoReducer,
  afiliadoDelete: deleteAfiliadoReducer,
  // * Autorizacion
  autorizacionList: listAutorizacionReducer,
  autorizacionDetail: detailsAutorizacionReducer,
  autorizacionCreate: createAutorizacionReducer,
  autorizacionUpdate: updateAutorizacionReducer,
  autorizacionDelete: deleteAutorizacionReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
