/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { XCircle } from 'phosphor-react';
import {
  diagnosticoPrincipal,
  diagnosticoRelacionado
} from '../utils/constantes';

function Autorizacion({ data, setIsOpen }) {
  const filterDiagnosticoPrincipal = (id) => {
    const e = parseInt(id);
    const diagnosticos = diagnosticoPrincipal.filter(
      (diagnostico) => diagnostico.id === e
    );
    // console.log(diagnosticos[0].name);
    return diagnosticos[0].name;
  };
  const filterDiagnosticoRelacionado = (id) => {
    const e = parseInt(id);
    const diagnosticos = diagnosticoRelacionado.filter(
      (diagnostico) => diagnostico.id === e
    );
    // console.log(diagnosticos[0].name);
    return diagnosticos[0].name;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day} de ${month} ${year}`;
  };
  return (
    <section className="bg-[#19191C] rounded-md border border-zinc-600 w-full px-8 py-4">
      <div className="flex justify-between items-center justify-items-center gap-56">
        <h1 className="text-white tracking-wide text-md">
          Datos de la Autorización
        </h1>
        <button type="button" onClick={() => setIsOpen(false)}>
          <XCircle size={18} className="text-white/80 hover:text-white" />
        </button>
      </div>
      <hr className="my-4 border-zinc-600" />
      <div className="grid grid-cols-2 xl:gap-10 gap-6">
        <span className="col-span-2 xl:col-span-1">
          <h1 className="text-zinc-100 font-bold">Afiliado:</h1>
          <h1 className="text-zinc-100 tracking-wider capitalize">
            {data.nombre}
          </h1>
        </span>
        <span className="col-span-2 xl:col-span-1">
          <h1 className="text-zinc-100 font-bold">Fecha de Autorización:</h1>
          <h1 className="text-zinc-100 tracking-wider capitalize">
            {formatDate(data.created_at)}
          </h1>
        </span>
        <span className="col-span-2 xl:col-span-1">
          <h1 className="text-zinc-100 font-bold">Diagnostico Principal:</h1>
          <h1 className="text-zinc-100 tracking-wider capitalize">
            {filterDiagnosticoPrincipal(data.diagnostico_principal)}
          </h1>
        </span>
        <span className="col-span-2 xl:col-span-1">
          <h1 className="text-zinc-100 font-bold">Diagnostico Relacionado:</h1>
          <h1 className="text-zinc-100 tracking-wider capitalize">
            {filterDiagnosticoRelacionado(data.diagnostico_relacionado)}
          </h1>
        </span>
        <span className="col-span-2 xl:col-span-1">
          <h1 className="text-zinc-100 font-bold">Regimen:</h1>
          <h1 className="text-zinc-100 tracking-wider capitalize">
            {data.regimen}
          </h1>
        </span>
        {data.medicamento === null || data.medicamento === '' ? (
          ''
        ) : (
          <span className="col-span-2 xl:col-span-1">
            <h1 className="text-zinc-100 font-bold">Medicamento:</h1>
            <h1 className="text-zinc-100 tracking-wider capitalize">
              {data.medicamento}
            </h1>
          </span>
        )}
      </div>
    </section>
  );
}

export default Autorizacion;
