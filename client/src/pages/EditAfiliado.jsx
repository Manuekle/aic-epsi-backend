/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import {
  User,
  EnvelopeSimple,
  IdentificationCard,
  HashStraight,
  GenderIntersex,
  Scales,
  MapTrifold,
  HouseSimple,
  MapPin,
  Mountains,
  FlagBanner
} from 'phosphor-react';
import Loader from '../components/loader';

import { generos, tipoDocumento, estadoCivil } from '../utils/constantes';
import { departamentos } from '../utils/departamentos';
import { AFILIADOS_UPDATE_RESET } from '../constants/afiliadosConstants';

import {
  getAfiliadoDetails,
  updateAfiliado
} from '../actions/afiliadosActions';

function EditAfiliado() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [formData, setFormData] = useState(false);

  const afiliadoDetail = useSelector((state) => state.afiliadoDetail);
  const { loading, afiliados } = afiliadoDetail;

  const [afiliado, setAfiliado] = useState({
    id: '',
    nombre: '',
    correo_electronico: '',
    tipo_documento: '',
    numero_documento: '',
    genero: '',
    estado_civil: '',
    municipio: '',
    departamento: '',
    direccion: '',
    indigena: '',
    pueblo: '',
    cabildo: ''
  });

  const afiliadoUpdate = useSelector((state) => state.afiliadoUpdate);
  const { success: successUpdate } = afiliadoUpdate;

  useEffect(() => {
    const loadAfiliado = async () => {
      if (successUpdate) {
        dispatch({ type: AFILIADOS_UPDATE_RESET });
        navigate('/');
      } else if (!afiliados.nombre || afiliados.id !== Number(params.id)) {
        await dispatch(getAfiliadoDetails(params.id));
      } else {
        setAfiliado({
          id: afiliados.id,
          nombre: afiliados.nombre,
          correo_electronico: afiliados.correo_electronico,
          tipo_documento: afiliados.tipo_documento,
          numero_documento: afiliados.numero_documento,
          genero: afiliados.genero,
          estado_civil: afiliados.estado_civil,
          municipio: afiliados.municipio,
          departamento: afiliados.departamento,
          direccion: afiliados.direccion,
          indigena: afiliados.indigena,
          pueblo: afiliados.pueblo,
          cabildo: afiliados.cabildo
        });
      }
    };
    loadAfiliado();
  }, [dispatch, params, successUpdate, navigate, afiliados]);

  // console.log(departamentos);
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
        <div className="border-2 border-zinc-600 px-8 py-4 rounded-md bg-zinc-900">
          <h1 className="text-lg font-bold tracking-wide text-white">
            Actualizar Afiliado
          </h1>
          <hr className="border-zinc-600 my-4" />
          {loading ? (
            <span className="h-96 flex justify-center items-center">
              <Loader color="#eee" size={60} />
            </span>
          ) : (
            <Formik
              initialValues={afiliado}
              enableReinitialize
              validate={(res) => {
                const error = {};

                // Validacion nombre
                if (!res.nombre) {
                  error.nombre = 'Por favor ingresa un nombre';
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(res.nombre)) {
                  error.nombre =
                    'El nombre solo puede contener letras y espacio';
                }

                // Validacion correo_electronico
                if (!res.correo_electronico) {
                  error.correo_electronico = 'Por favor ingresa un correo';
                } else if (
                  !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
                    res.correo_electronico
                  )
                ) {
                  error.correo_electronico =
                    'Por favor ingresa un correo valido';
                }

                // Validacion tipo_documento
                if (!res.tipo_documento) {
                  error.tipo_documento =
                    'Por favor seleccione el tipo de documento';
                }

                // Validacion numero_documento
                if (!res.numero_documento) {
                  error.numero_documento =
                    'Por favor ingresa un numero de documento';
                } else if (!/^[0-9]{1,40}$/.test(res.numero_documento)) {
                  error.numero_documento =
                    'El numero de documento solo puede contener numeros';
                }

                // Validacion genero
                if (!res.genero) {
                  error.genero = 'Por favor seleccione su genero';
                }

                // Validacion estado_civil
                if (!res.estado_civil) {
                  error.estado_civil = 'Por favor ingresa un estado civil';
                }

                // Validacion municipio
                if (!res.municipio) {
                  error.municipio = 'Por favor seleccione su municipio';
                }

                // Validacion departamento
                if (!res.departamento) {
                  error.departamento = 'Por favor seleccione su municipio';
                }

                // Validacion direccion
                if (!res.direccion) {
                  error.direccion = 'Por favor ingresa una direccion';
                }

                if (res.indigena) {
                  // Validacion cabildo
                  if (!res.cabildo) {
                    error.cabildo = 'Por favor ingresa el cabildo o resguardo';
                  }
                  // Validacion pueblo
                  if (!res.pueblo) {
                    error.pueblo = 'Por favor ingresa el pueblo';
                  }
                }

                return error;
              }}
              onSubmit={(res, { resetForm }) => {
                resetForm();
                setFormData(true);
                dispatch(updateAfiliado(res));
                setTimeout(() => {
                  setFormData(false);
                }, 1000);
                return res;
              }}
            >
              {({ errors, values }) => (
                <Form
                  className="py-8 flex flex-col gap-6 w-full"
                  autoComplete="off"
                  noValidate
                >
                  <div className="grid grid-cols-3 gap-6">
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={values.nombre}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Nombre Completo"
                        />
                        <User
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="nombre"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.nombre}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          type="email"
                          id="correo_electronico"
                          name="correo_electronico"
                          value={values.correo_electronico}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Correo Electronico"
                        />
                        <EnvelopeSimple
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="correo_electronico"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.correo_electronico}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          as="select"
                          id="tipo_documento"
                          name="tipo_documento"
                          value={values.tipo_documento}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Seleccione un tipo de documento"
                        >
                          <option disabled value="">
                            Seleccione un tipo de documento
                          </option>
                          {tipoDocumento.map((item) => (
                            <option key={item.id} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </Field>
                        <IdentificationCard
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="tipo_documento"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.tipo_documento}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          type="text"
                          id="numero_documento"
                          name="numero_documento"
                          value={values.numero_documento}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Numero de Documento"
                        />
                        <HashStraight
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="numero_documento"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.numero_documento}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          as="select"
                          id="genero"
                          name="genero"
                          value={values.genero}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Seleccione su género"
                        >
                          <option disabled value="">
                            Seleccione el genero
                          </option>
                          {generos.map((item) => (
                            <option key={item.id} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </Field>
                        <GenderIntersex
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="genero"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.genero}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          as="select"
                          id="estado_civil"
                          name="estado_civil"
                          value={values.estado_civil}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Seleccione un tipo de documento"
                        >
                          <option disabled value="">
                            Seleccione el estado civil
                          </option>
                          {estadoCivil.map((item) => (
                            <option key={item.id} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </Field>
                        <Scales
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="estado_civil"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.estado_civil}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          as="select"
                          id="municipio"
                          name="municipio"
                          value={values.municipio}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Seleccione el municipio"
                        >
                          <option value="0">Seleccione el municipio</option>
                          <option value="popayan">Popayan</option>
                        </Field>
                        <MapTrifold
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="municipio"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.municipio}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          as="select"
                          id="departamento"
                          name="departamento"
                          value={values.departamento}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Seleccione el municipio"
                        >
                          <option value="0">Seleccione el departamento</option>
                          <option value="cauca">Cauca</option>
                        </Field>
                        <MapPin
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="departamento"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.departamento}
                          </div>
                        )}
                      />
                    </div>
                    <div className="xl:col-span-1 col-span-3">
                      <span className="flex flex-row gap-2 relative">
                        <Field
                          type="text"
                          id="direccion"
                          name="direccion"
                          value={values.direccion}
                          className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                          placeholder="Dirección"
                        />
                        <HouseSimple
                          size={18}
                          weight="bold"
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                        />
                      </span>
                      <ErrorMessage
                        name="direccion"
                        component={() => (
                          <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                            {errors.direccion}
                          </div>
                        )}
                      />
                    </div>
                    {values.indigena === 1 && (
                      <>
                        <div className="xl:col-span-1 col-span-3">
                          <span className="flex flex-row gap-2 relative">
                            <Field
                              type="text"
                              id="pueblo"
                              name="pueblo"
                              className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                              placeholder="Pueblo"
                            />
                            <Mountains
                              size={18}
                              weight="bold"
                              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                            />
                          </span>
                          <ErrorMessage
                            name="pueblo"
                            component={() => (
                              <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                                {errors.pueblo}
                              </div>
                            )}
                          />
                        </div>
                        <div className="xl:col-span-1 col-span-3">
                          <span className="flex flex-row gap-2 relative">
                            <Field
                              type="text"
                              id="cabildo"
                              name="cabildo"
                              className="relative pl-11 w-full bg-zinc-800 border border-zinc-600 placeholder:text-white/70 text-white rounded-md px-4 py-2 text-sm font-bold outline-none"
                              placeholder="Cabildo o resguardo"
                            />
                            <FlagBanner
                              size={18}
                              weight="bold"
                              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
                            />
                          </span>
                          <ErrorMessage
                            name="cabildo"
                            component={() => (
                              <div className="text-red-500 text-xs pl-1 pt-2 font-bold tracking-wide">
                                {errors.cabildo}
                              </div>
                            )}
                          />
                        </div>
                      </>
                    )}
                    {/* {values.indigena === 1 && (
                      <div className="cxl:col-span-1 col-span-3">
                        <span className="text-white font-bold text-sm flex flex-row gap-1 items-center">
                          <Field
                            type="checkbox"
                            id="toggle"
                            name="indigena"
                            value={values.indigena}
                            className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-amber-400 checked:border-amber-400 fill-black focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          />
                          <label
                            htmlFor="indigena"
                            className="text-sm font-bold text-white"
                          >
                            ¿Es usted Indígena?
                          </label>
                        </span>
                      </div>
                    )} */}
                  </div>
                  <div className="xl:col-span-1 col-span-3 flex justify-center">
                    <button
                      type="submit"
                      className="text-sm text-white border font-bold tracking-wide rounded-md border-white/20 bg-zinc-800 w-56 h-10"
                    >
                      {!formData && (
                        <h1 className="text-white/80 hover:text-white text-sm font-normal flex justify-center">
                          Actualizar
                        </h1>
                      )}
                      {formData && (
                        <span className="flex justify-center ">
                          <Loader color="#eee" size={20} />
                        </span>
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </section>
    </motion.div>
  );
}

export default EditAfiliado;
