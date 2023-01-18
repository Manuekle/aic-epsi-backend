/* eslint-disable radix */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Eye } from 'phosphor-react';
import { Link } from 'react-router-dom';
import {
  diagnosticoPrincipal,
  diagnosticoRelacionado
} from '../utils/constantes';

function tableAutorizaciones({ data }) {
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
    <tr className="text-white/80 text-sm text-normal transition duration-300 ease-in-out hover:bg-zinc-800">
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{data.afiliados_id}</h1>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{filterDiagnosticoPrincipal(data.diagnostico_principal)}</h1>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{filterDiagnosticoRelacionado(data.diagnostico_relacionado)}</h1>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{formatDate(data.created_at)}</h1>
      </td>
      <td className="text-white/80 text-[11px] font-normal px-6 py-4 text-left capitalize tracking-wide">
        <div className="border-[1px] border-white/50 bg-zinc-800 px-2 rounded-full w-full">
          <span className="flex flex-row gap-1 items-center justify-center">
            {data.regimen}
          </span>
        </div>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <Link to={`/autorizaciones/${data.id}`}>
          <Eye size={20} className="hover:text-amber-400" />
        </Link>
      </td>
    </tr>
  );
}

export default tableAutorizaciones;
