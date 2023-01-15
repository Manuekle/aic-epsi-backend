/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listAfiliados } from '../actions/afiliadosActions';

import Table from '../components/table';

function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search;

  useEffect(() => {
    dispatch(listAfiliados(keyword));
  }, [dispatch, keyword]);

  const afiliadosList = useSelector((state) => state.afiliadosList);
  const { loading, error, afiliados } = afiliadosList;
  console.log(afiliadosList);

  return (
    <section className="container mx-auto xl:px-56 px-8 w-full">
      <div className="border-2 border-zinc-600 bg-[#18181B] px-8 py-4 rounded-md">
        <h1 className="text-lg font-bold text-white tracking-wide">
          Tabla de Afiliados
        </h1>
        <hr className="my-4 border-zinc-600" />
        {loading ? (
          <div className="text-white">Loading...</div>
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
                          Nombre
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                        >
                          Género
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                        >
                          Estado Civil
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                        >
                          Documento
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                        >
                          Municipio
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                        >
                          Dirección
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white/80 px-6 py-4 text-left"
                        />
                      </tr>
                    </thead>
                    <tbody>
                      {afiliados.map((data) => (
                        <Table key={data.id} data={data} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <span className="flex justify-center mt-8">
                  {/* <Pagination
                    currentPage={currentPage}
                    totalCount={products.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  /> */}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;
