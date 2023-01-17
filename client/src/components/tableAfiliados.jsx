/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';
import {
  GenderFemale,
  GenderMale,
  GenderNeuter,
  Eye,
  Trash,
  PencilSimple,
  DotsThree,
  XCircle
} from 'phosphor-react';
import Loader from './Loader';
import { deleteAfiliado } from '../actions/afiliadosActions';

function tableAfiliados({ data }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(false);

  const afiliadoDelete = useSelector((state) => state.afiliadoDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete
  } = afiliadoDelete;

  const deleteHandler = (id) => {
    dispatch(deleteAfiliado(id));
  };

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: '100vh',
      opacity: 0
    }
  };

  useEffect(() => {
    if (successDelete) {
      setFormData(true);
      setTimeout(() => {
        setFormData(false);
        window.location.reload();
      }, 1000);
    }
  }, [successDelete]);

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
                  to={`editAffiliate/${data.id}`}
                  className="flex flex-row gap-1 text-white/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center"
                >
                  <PencilSimple size={16} weight="light" />
                  <h1 className="ml-2">Editar</h1>
                </Link>
                <Dialog.Root>
                  <Dialog.Trigger asChild className="relative">
                    <button
                      type="button"
                      className="flex flex-row gap-1 text-red-500/80 font-bold text-sm px-4 py-2 bg-[#111113]/50 hover:bg-[#111113] cursor-pointer items-center"
                    >
                      <Trash size={16} weight="light" />
                      <h1 className="ml-2">Eliminar</h1>
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <motion.div
                      variants={dropIn}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-0 w-screen"
                    >
                      <Dialog.Content className="container mx-auto px-56 flex justify-center py-4">
                        <div className="w-[30em] border border-zinc-600 bg-[#19191C] rounded-lg overflow-hidden p-4 flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <span className="flex flex-col gap-1">
                              <h1 className="text-red-500/80 text-md font-normal tracking-normal">
                                Seguro que quieres eliminar a este afiliado?
                              </h1>
                            </span>
                            <Dialog.Close asChild>
                              <button type="button" aria-label="Close">
                                <XCircle
                                  size={18}
                                  className="text-white/50 hover:text-white"
                                />
                              </button>
                            </Dialog.Close>
                          </div>
                          <p className="text-white text-sm font-normal tracking-wide">
                            Esta acción no se puede deshacer. Esto eliminará
                            permanentemente a este afiliado.
                          </p>
                          <div className="flex justify-end">
                            <span className="flex flex-row gap-3">
                              <Dialog.Close asChild>
                                <button
                                  type="button"
                                  aria-label="Close"
                                  className="bg-zinc-800 border border-zinc-600 hover:bg-zinc-800/80 text-white/80 font-bold text-sm px-4 py-2 rounded-md cursor-pointer"
                                >
                                  Cancelar
                                </button>
                              </Dialog.Close>
                              <button
                                type="button"
                                aria-label="Delete"
                                onClick={() => {
                                  deleteHandler(data.id);
                                }}
                                className="bg-red-500/50 border border-red-500 hover:bg-red-500/40 text-white/80 font-bold text-sm px-4 py-2 rounded-md cursor-pointer"
                              >
                                {formData ? (
                                  <div className="flex flex-row gap-2 items-center justify-center w-12">
                                    <Loader color="#eee" size={20} />
                                  </div>
                                ) : (
                                  <h1 className="text-white/80 text-sm font-bold">
                                    Eliminar
                                  </h1>
                                )}
                              </button>
                            </span>
                          </div>
                        </div>
                      </Dialog.Content>
                    </motion.div>
                  </Dialog.Portal>
                </Dialog.Root>
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
