/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  GenderFemale,
  GenderMale,
  GenderNeuter,
  Eye,
  Trash,
  PencilSimple,
  DotsThree
} from 'phosphor-react';
import { Link } from 'react-router-dom';
import * as Popover from '@radix-ui/react-popover';

function tableAfiliados({ data }) {
  return (
    <tr className="text-white/80 text-sm text-normal transition duration-300 ease-in-out hover:bg-zinc-800">
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{data.nombre}</h1>
      </td>
      <td className="text-white/80 text-[11px] font-normal px-6 py-4 text-left capitalize tracking-wide">
        <div className="border-[1px] border-white/50 bg-zinc-800 px-2 rounded-full w-full">
          <span className="flex flex-row gap-1 items-center justify-center">
            {data.genero === 'Masculino' && <GenderMale size={16} />}
            {data.genero === 'Femenino' && <GenderFemale size={16} />}
            {data.genero === 'Otro' && <GenderNeuter size={16} />}
            {data.genero}
          </span>
        </div>
      </td>
      <td className="text-white/80 text-[11px] font-normal px-6 py-4 text-left capitalize tracking-wide">
        <div className="border-[1px] border-white/50 bg-zinc-800 px-2 rounded-full w-full">
          <span className="flex flex-row gap-1 items-center justify-center">
            {data.estado_civil}
          </span>
        </div>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{data.numero_documento}</h1>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{data.municipio}</h1>
      </td>
      <td className="text-white/80 text-sm font-normal px-6 py-4 text-left capitalize tracking-wide">
        <h1>{data.direccion}</h1>
      </td>
      <td className="text-left relative">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              type="button"
              className="p-1 bg-black/50 shadow-md rounded-md cursor-pointer"
            >
              <DotsThree size={16} weight="light" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="border rounded-md flex flex-col border-white/20 bg-zinc-800 overflow-hidden shadow-md"
              sideOffset={5}
            >
              <div className="flex flex-col">
                <Link
                  to={`/detailAffiliate/${data.id}`}
                  className="flex flex-row gap-1 text-white/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center"
                >
                  <Eye size={16} weight="light" />
                  <h1 className="ml-2">Detalles</h1>
                </Link>
                <Link
                  to={`createAffiliate/${data.id}/edit`}
                  className="flex flex-row gap-1 text-white/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center"
                >
                  <PencilSimple size={16} weight="light" />
                  <h1 className="ml-2">Editar</h1>
                </Link>
                <button
                  type="button"
                  //   onClick={cycleDeleteProduct}
                  className="flex flex-row gap-1 text-red-500/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center"
                >
                  <Trash size={16} weight="light" />
                  <h1 className="ml-2">Eliminar</h1>
                </button>
                {/* <Modal /> */}
              </div>
              <Popover.Arrow className="fill-white/20" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </td>
    </tr>
  );
}

export default tableAfiliados;
