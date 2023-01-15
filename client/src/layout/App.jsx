import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// icons
import { UsersThree, ClockCounterClockwise } from 'phosphor-react';

import CreateButton from '../components/createButton';

// pages
import HomePage from '../pages/HomePage';
import TestPage from '../pages/TestPage';
import NotFoundPage from '../pages/NotFoundPage';
import CreateAfiliado from '../pages/CreateAfiliado';
import CreateAuthorization from '../pages/CreateAuthorization';
import DetailAfiliado from '../pages/DetailAfiliado';

function App() {
  return (
    <div className="relative">
      <Router>
        <section className="container mx-auto xl:px-56 px-8">
          <div className="flex flex-col gap-6 py-12 w-full">
            <Link
              to="/"
              className="text-zinc-900 hover:text-zinc-900/80 font-bold rounded flex flex-row gap-3 items-center"
            >
              <UsersThree size={24} weight="bold" />
              <h1>Ver Afiliados</h1>
            </Link>
            <CreateButton />
            <Link
              to="/historyAuthorization"
              className="text-zinc-900 hover:text-zinc-900/80 font-bold rounded flex flex-row gap-3 items-center"
            >
              <ClockCounterClockwise size={24} weight="bold" />
              <h1>Historial de Autorizaciones</h1>
            </Link>
          </div>
        </section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route
            path="/createAuthorization"
            element={<CreateAuthorization />}
          />
          <Route path="/createAffiliate/:id" element={<CreateAfiliado />} />
          <Route
            path="/createAffiliate/:id/edit"
            element={<CreateAfiliado />}
          />
          <Route path="/detailAffiliate/:id" element={<DetailAfiliado />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
