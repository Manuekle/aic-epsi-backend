/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FolderUser } from 'phosphor-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { createAfiliado } from '../actions/afiliadosActions';
import { AFILIADOS_CREATE_RESET } from '../constants/afiliadosConstants';

function createButton() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const afiliadoCreate = useSelector((state) => state.afiliadoCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    afiliados: createdAfiliado
  } = afiliadoCreate;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: AFILIADOS_CREATE_RESET });
      navigate(`/createAffiliate/${createdAfiliado.id}`);
    }
  }, [dispatch, navigate, successCreate, createdAfiliado]);

  const createAffiliateHandler = () => {
    dispatch(createAfiliado());
  };
  return (
    <button
      type="button"
      onClick={createAffiliateHandler}
      className="text-zinc-900 hover:text-zinc-900/80 font-bold rounded flex flex-row gap-3 items-center"
    >
      <FolderUser size={24} weight="bold" />
      <h1>Crear Afiliado</h1>
    </button>
  );
}

export default createButton;
