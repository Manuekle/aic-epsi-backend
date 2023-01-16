export const generos = [
  { id: 1, name: 'Masculino' },
  { id: 2, name: 'Femenino' },
  { id: 3, name: 'Otro' }
];

export const tipoDocumento = [
  { id: 1, name: 'DNI' },
  { id: 2, name: 'Pasaporte' },
  { id: 3, name: 'Carnet de extranjería' },
  { id: 4, name: 'Carnet de identidad' },
  { id: 5, name: 'Cedula' }
];

export const estadoCivil = [
  { id: 1, name: 'Soltero' },
  { id: 2, name: 'Casado' },
  { id: 3, name: 'Divorciado' },
  { id: 4, name: 'Viudo' },
  { id: 5, name: 'Concubinato' }
];

export const regimenes = [
  { id: 1, name: 'Subsidiado' },
  { id: 2, name: 'Contributivo' }
];

export const enfermedad = [
  {
    id: 1,
    code: 'A00-B99',
    name: 'Ciertas enfermedades infecciosas y parasitarias'
  }
];

export const diagnosticoPrincipal = [
  {
    id: 1,
    code: 'A00-A09',
    name: 'Enfermedades infecciosas intestinales',
    enfermedad: 1
  },
  {
    id: 2,
    code: 'A15-A19',
    name: 'Tuberculosis',
    enfermedad: 1
  }
];

export const diagnosticoRelacionado = [
  { id: 1, code: 'A00', name: 'Cólera', diagnostico_principal: 1 },
  {
    id: 2,
    code: 'A01',
    name: 'Fiebres tifoidea y paratifoidea',
    diagnostico_principal: 1
  },
  {
    id: 3,
    code: 'A02',
    name: 'Otras infecciones debidas a Salmonella',
    diagnostico_principal: 1
  },
  { id: 4, code: 'A03', name: 'Shigelosis', diagnostico_principal: 1 },
  {
    id: 5,
    code: 'A04',
    name: 'Otras infecciones intestinales bacterianas',
    diagnostico_principal: 1
  },
  {
    id: 6,
    code: 'A05',
    name: 'Otras intoxicaciones alimentarias bacterianas, no clasificadas en otra parte',
    diagnostico_principal: 1
  },
  { id: 7, code: 'A06', name: 'Amebiasis', diagnostico_principal: 1 },
  {
    id: 8,
    code: 'A07',
    name: 'Otras enfermedades intestinales debidas a protozoarios',
    diagnostico_principal: 1
  },
  {
    id: 9,
    code: 'A08',
    name: 'Infecciones intestinales debidas a virus y otros organismos especificados',
    diagnostico_principal: 1
  },
  {
    id: 10,
    code: 'A09',
    name: 'Diarrea y gastroenteritis de presunto origen infeccioso',
    diagnostico_principal: 1
  },
  {
    id: 11,
    code: 'A15',
    name: 'Tuberculosis respiratoria, confirmada bacteriológica e histológicamente',
    diagnostico_principal: 2
  },
  {
    id: 12,
    code: 'A16',
    name: 'Tuberculosis respiratoria, no confirmada bacteriológica o histológicamente',
    diagnostico_principal: 2
  },
  {
    id: 13,
    code: 'A17',
    name: 'Tuberculosis del sistema nervioso',
    diagnostico_principal: 2
  },
  {
    id: 14,
    code: 'A18',
    name: 'Tuberculosis de otros órganos',
    diagnostico_principal: 2
  },
  {
    id: 15,
    code: 'A19',
    name: 'Tuberculosis miliar',
    diagnostico_principal: 2
  }
];
