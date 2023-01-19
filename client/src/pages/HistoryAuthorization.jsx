/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { listAutorizaciones } from '../actions/autorizacionActions';
import Pagination from '../components/pagination';
import Loader from '../components/loader';
import Autorizacion from '../components/autorizacion';

import TableAutorizaciones from '../components/tableAutorizaciones';

function HistoryAuthorization() {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;

  const [isOpen, setIsOpen] = useCycle(false, true);

  useEffect(() => {
    dispatch(listAutorizaciones(keyword));
  }, [dispatch, keyword]);

  const autorizacionList = useSelector((state) => state.autorizacionList);
  const { loading, error, autorizacion } = autorizacionList;

  // paginate
  const PageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return autorizacion.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, autorizacion]);
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <section className="container mx-auto xl:px-56 px-8 w-full">
        <div className="border-2 border-zinc-600 bg-[#18181B] px-8 py-4 rounded-md">
          <h1 className="text-lg font-bold text-white tracking-wide">
            Historial de Autorizaciones
          </h1>
          <hr className="my-4 border-zinc-600" />
          {loading ? (
            <span className="h-96 flex justify-center items-center">
              <Loader color="#eee" size={60} />
            </span>
          ) : error ? (
            <div className="text-white">{error}</div>
          ) : (
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="border border-zinc-600 rounded-md">
                    <table className="min-w-full rounded-md shadow-sm overflow-hidden">
                      <thead className="border-b border-zinc-800">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                          >
                            Afiliado
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                          >
                            Diagnostico Principal
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                          >
                            Diagnostico Relacionado
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                          >
                            Fecha de Autorización
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                          >
                            Regimen
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                          />
                        </tr>
                      </thead>
                      <tbody>
                        {currentTableData.map((data) => (
                          <>
                            <TableAutorizaciones
                              key={data.id}
                              data={data}
                              setIsOpen={setIsOpen}
                            />
                            <AnimatePresence exitBeforeEnter>
                              {isOpen ? (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50"
                                >
                                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Autorizacion
                                      data={data}
                                      setIsOpen={setIsOpen}
                                    />
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="flex justify-center mt-8">
                    <Pagination
                      currentPage={currentPage}
                      totalCount={autorizacion.length}
                      pageSize={PageSize}
                      onPageChange={(page) => setCurrentPage(page)}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}

export default HistoryAuthorization;
