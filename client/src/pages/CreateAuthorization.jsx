/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Syringe, Activity, FirstAidKit, BookmarkSimple } from 'phosphor-react';
import { createAutorizacion } from '../actions/autorizacionActions';

import {
  enfermedad,
  diagnosticoPrincipal,
  diagnosticoRelacionado,
  regimenes
} from '../utils/constantes';

// loader
import Loader from '../components/loader';

function CreateAuthorization() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(false);

  const autorizacionCreate = useSelector((state) => state.autorizacionCreate);
  const { loading: loadingCreate, success: successCreate } = autorizacionCreate;

  const filterDiagnosticoPrincipal = (id) => {
    const e = parseInt(id);
    const filter = diagnosticoPrincipal.filter((item) => item.enfermedad === e);
    return filter;
  };

  const filterDiagnosticoRelacionado = (id) => {
    const e = parseInt(id);
    const filter = diagnosticoRelacionado.filter(
      (item) => item.diagnostico_principal === e
    );
    return filter;
  };

  useEffect(() => {
    if (successCreate) {
      navigate(`/detailAffiliate/${params.id}`);
    }
  }, [successCreate, navigate, params]);

  return (
    <section className="container mx-auto xl:px-56 px-8 w-full">
      <div className="border-2 border-zinc-600 px-8 py-4 rounded-md bg-zinc-900">
        <h1 className="text-lg text-zinc-100 font-bold">Crear Autorización</h1>
        <hr className="my-4 border-zinc-600" />
        {loadingCreate ? (
          <h1 className="text-lg font-bold tracking-wide text-white">
            Cargando...
          </h1>
        ) : (
          <Formik
            initialValues={{
              diagnostico_principal: '',
              diagnostico_relacionado: '',
              regimen: '',
              enfermedad: '',
              afiliados_id: params.id,
              medicamento: false
            }}
            validate={(res) => {
              const error = {};

              // Validacion diagnostico_principal
              if (!res.enfermedad) {
                error.enfermedad = 'Por favor seleccione el tipo de enfermedad';
              }
              // Validacion diagnostico_principal
              if (!res.diagnostico_principal) {
                error.diagnostico_principal =
                  'Por favor seleccione el diagnostico principal';
              }
              // Validacion diagnostico_relacionado
              if (!res.diagnostico_relacionado) {
                error.diagnostico_relacionado =
                  'Por favor seleccione el diagnostico relacionado';
              }
              // Validacion diagnostico_principal
              if (!res.regimen) {
                error.regimen = 'Por favor seleccione un regimen';
              }

              return error;
            }}
            onSubmit={(res, { resetForm }) => {
              resetForm();
              setFormData(true);
              dispatch(createAutorizacion(res));
              setTimeout(() => {
                setFormData(false);
              }, 1000);
              return res;
            }}
          >
            {({ errors, values }) => (
              <Form
                className="py-8 grid grid-cols-1 gap-6"
                autoComplete="off"
                noValidate
              >
                <div className="grid grid-cols-4 gap-6">
                  <div className="xl:col-span-2 col-span-4">
                    <span className="flex flex-row gap-2 relative">
                      <Field
                        as="select"
                        id="enfermedad"
                        name="enfermedad"
                        className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                      >
                        <option disabled value="">
                          Seleccione el tipo de enfermedad
                        </option>
                        {enfermedad.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Field>
                      <Syringe
                        size={18}
                        weight="bold"
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                      />
                    </span>
                    <ErrorMessage
                      name="enfermedad"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                          {errors.enfermedad}
                        </div>
                      )}
                    />
                  </div>
                  {values.enfermedad ? (
                    <div className="xl:col-span-2 col-span-4">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          as="select"
                          id="diagnostico_principal"
                          name="diagnostico_principal"
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                        >
                          <option disabled value="">
                            Seleccione el diagnostico principal
                          </option>
                          {filterDiagnosticoPrincipal(values.enfermedad).map(
                            (item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            )
                          )}
                        </Field>
                        <Activity
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="diagnostico_principal"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.diagnostico_principal}
                          </div>
                        )}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {values.diagnostico_principal ? (
                    <div className="xl:col-span-2 col-span-4">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          as="select"
                          id="diagnostico_relacionado"
                          name="diagnostico_relacionado"
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                        >
                          <option disabled value="">
                            Seleccione el diagnostico relacionado
                          </option>
                          {filterDiagnosticoRelacionado(
                            values.diagnostico_principal
                          ).map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Field>
                        <FirstAidKit
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="diagnostico_relacionado"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.diagnostico_relacionado}
                          </div>
                        )}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="xl:col-span-2 col-span-4">
                    <span className="flex flex-row gap-2 relative">
                      <Field
                        as="select"
                        id="regimen"
                        name="regimen"
                        className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                      >
                        <option disabled value="">
                          Seleccione el regimen
                        </option>
                        {regimenes.map((item) => (
                          <option
                            className="capitalize"
                            key={item.id}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        ))}
                      </Field>
                      <BookmarkSimple
                        size={18}
                        weight="bold"
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                      />
                    </span>
                    <ErrorMessage
                      name="regimen"
                      component={() => (
                        <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                          {errors.regimen}
                        </div>
                      )}
                    />
                  </div>
                  <div className="cxl:col-span-1 col-span-3">
                    <span className="text-white font-bold text-sm flex flex-row gap-1 items-center">
                      <Field
                        type="checkbox"
                        name="medicamento"
                        id="toggle"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      />
                      <label
                        htmlFor="medicamento"
                        className="text-sm font-bold text-white"
                      >
                        ¿El paciente requiere medicamento?
                      </label>
                    </span>
                  </div>
                </div>
                <div className="xl:col-span-1 col-span-3 flex justify-center">
                  {values.medicamento ? (
                    <button
                      type="submit"
                      className="text-sm text-white border font-bold tracking-wide rounded-md border-white/20 bg-zinc-800 w-56 h-10"
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="text-sm text-white border font-bold tracking-wide rounded-md border-white/20 bg-zinc-800 w-56 h-10"
                    >
                      {!formData && (
                        <h1 className="text-white/80 hover:text-white text-sm font-normal flex justify-center">
                          Crear Autorización
                        </h1>
                      )}
                      {formData && (
                        <span className="flex justify-center ">
                          <Loader color="#eee" size={20} />
                        </span>
                      )}
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </section>
  );
}

export default CreateAuthorization;
