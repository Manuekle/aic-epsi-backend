/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// icons
import { FolderUser, UsersThree, ClockCounterClockwise } from 'phosphor-react';

import { AnimatePresence } from 'framer-motion';

// pages
import HomePage from '../pages/HomePage';
// import TestPage from '../pages/TestPage';
import NotFoundPage from '../pages/NotFoundPage';
import HistoryAuthorization from '../pages/HistoryAuthorization';
import EditAfiliado from '../pages/EditAfiliado';
import CreateAfiliado from '../pages/CreateAfiliado';
import CreateAuthorization from '../pages/CreateAuthorization';
import DetailAfiliado from '../pages/DetailAfiliado';

import Back from '../components/back';

function App() {
  return (
    <div className="relative">
      <Router>
        <section className="container mx-auto xl:px-56 px-8">
          <div className="grid grid-cols-2 justify-between items-start py-12">
            <span className="flex flex-col gap-6">
              <Link
                to="/"
                className="text-zinc-900 hover:text-zinc-900/80 font-bold rounded flex flex-row gap-3 items-center"
              >
                <UsersThree size={24} weight="bold" />
                <h1>Ver Afiliados</h1>
              </Link>
              <Link
                to="/createAffiliate"
                className="text-zinc-900 hover:text-zinc-900/80 font-bold rounded flex flex-row gap-3 items-center"
              >
                <FolderUser size={24} weight="bold" />
                <h1>Crear Afiliados</h1>
              </Link>
              {/* <CreateButton /> */}
              <Link
                to="/historyAuthorization"
                className="text-zinc-900 hover:text-zinc-900/80 font-bold rounded flex flex-row gap-3 items-center"
              >
                <ClockCounterClockwise size={24} weight="bold" />
                <h1>Historial de Autorizaciones</h1>
              </Link>
            </span>
            <span className="flex justify-end">
              <Back />
            </span>
          </div>
        </section>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/historyAuthorization"
              element={<HistoryAuthorization />}
            />
            <Route
              path="/createAuthorization/:id"
              element={<CreateAuthorization />}
            />
            <Route path="/createAffiliate" element={<CreateAfiliado />} />
            <Route path="/editAffiliate/:id" element={<EditAfiliado />} />
            <Route path="/detailAffiliate/:id" element={<DetailAfiliado />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
