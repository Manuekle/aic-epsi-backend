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

const reducer = combineReducers({
  afiliadosList: listAfiliadosReducer,
  afiliadoDetail: detailsAfiliadoReducer,
  afiliadoCreate: createAfiliadoReducer,
  afiliadoUpdate: updateAfiliadoReducer,
  afiliadoDelete: deleteAfiliadoReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
