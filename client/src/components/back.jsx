/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaretLeft } from 'phosphor-react';

function Back() {
  const locate = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {locate.pathname !== '/' && (
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-zinc-900 border-2 border-zinc-700 active:bg-zinc-800 font-bold py-2 px-4 rounded flex flex-row items-center gap-3"
        >
          <CaretLeft size={18} className="text-white" weight="bold" />
          <h1 className="text-white text-sm tracking-wide">Volver</h1>
        </button>
      )}
    </>
  );
}

export default Back;
