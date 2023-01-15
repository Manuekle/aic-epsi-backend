/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  FolderNotchOpen,
  GenderFemale,
  GenderMale,
  GenderNeuter
} from 'phosphor-react';

import { getAfiliadoDetails } from '../actions/afiliadosActions';

function DetailAfiliado() {
  const dispatch = useDispatch();
  const params = useParams();
  const afiliadoDetail = useSelector((state) => state.afiliadoDetail);
  const { loading, error, afiliados } = afiliadoDetail;

  useEffect(() => {
    dispatch(getAfiliadoDetails(params.id));
  }, [dispatch, params]);

  console.log(afiliados);
  return (
    <section className="container mx-auto xl:px-56 px-8 w-full">
      <div className="border-2 border-zinc-600 px-8 py-4 rounded-md bg-zinc-900">
        <span className="flex justify-between items-center">
          <h1 className="text-lg text-zinc-100 font-bold">
            Datos del Afiliado
          </h1>
          <Link
            to="/createAuthorization"
            className="text-white hover:text-amber-400 font-bold rounded flex flex-row gap-3 items-center"
          >
            <FolderNotchOpen size={20} weight="fill" />
            <h1 className="text-md">Crear Autorización</h1>
          </Link>
        </span>
        <hr className="my-4 border-zinc-600" />
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : error ? (
          <div className="text-white">{error}</div>
        ) : (
          <div className="grid grid-cols-3 gap-8 pb-8">
            <span>
              <h1 className="text-zinc-100 font-bold">Nombre:</h1>
              <h1 className="text-zinc-100 tracking-wider capitalize">
                {afiliados.nombre}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Tipo de Documento:</h1>
              <h1 className="text-zinc-100 tracking-wider capitalize">
                {afiliados.tipo_documento}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Numero de Documento:</h1>
              <h1 className="text-zinc-100 tracking-wider capitalize">
                {afiliados.numero_documento}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Correo Electronico:</h1>
              <h1 className="text-zinc-100 tracking-wider">
                {afiliados.correo_electronico}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Género:</h1>
              <h1 className="text-zinc-100 flex flex-row gap-2 items-center tracking-wider capitalize">
                {afiliados.genero === 'Masculino' && (
                  <GenderMale size={18} weight="bold" />
                )}
                {afiliados.genero === 'Femenino' && (
                  <GenderFemale size={18} weight="bold" />
                )}
                {afiliados.genero === 'Otro' && (
                  <GenderNeuter size={18} weight="bold" />
                )}
                {afiliados.genero}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Estado Civil:</h1>
              <h1 className="text-zinc-100 tracking-wider capitalize">
                {afiliados.estado_civil}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Municipio:</h1>
              <h1 className="text-zinc-100 tracking-wider capitalize">
                {afiliados.municipio}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Departamento:</h1>
              <h1 className="text-zinc-100 tracking-wider capitalize">
                {afiliados.departamento}
              </h1>
            </span>
            <span>
              <h1 className="text-zinc-100 font-bold">Dirección:</h1>
              <h1 className="text-zinc-100 tracking-wider capitalize">
                {afiliados.direccion}
              </h1>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default DetailAfiliado;