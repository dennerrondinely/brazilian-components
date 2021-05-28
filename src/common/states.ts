export const STATES_DATA = {
  AC: {
    code: 'AC',
    name: 'Acre'
  },
  AL: {
    code: 'AL',
    name: 'Alagoas'
  },
  AP: {
    code: 'AP',
    name: 'Amapá'
  },
  AM: {
    code: 'AM',
    name: 'Amazonas'
  },
  BA: {
    code: 'BA',
    name: 'Bahia'
  },
  CE: {
    code: 'CE',
    name: 'Ceará'
  },
  DF: {
    code: 'DF',
    name: 'Distrito Federal'
  },
  ES: {
    code: 'ES',
    name: 'Espírito Santo'
  },
  GO: {
    code: 'GO',
    name: 'Goiás'
  },
  MA: {
    code: 'MA',
    name: 'Maranhão'
  },
  MG: {
    code: 'MG',
    name: 'Minas Gerais'
  },
  MT: {
    code: 'MT',
    name: 'Mato Grosso'
  },
  MS: {
    code: 'MS',
    name: 'Mato Grosso do Sul'
  },
  PA: {
    code: 'PA',
    name: 'Pará'
  },
  PB: {
    code: 'PB',
    name: 'Paraíba'
  },
  PE: {
    code: 'PE',
    name: 'Pernambuco'
  },
  PI: {
    code: 'PI',
    name: 'Piauí'
  },
  PR: {
    code: 'PR',
    name: 'Paraná'
  },
  RJ: {
    code: 'RJ',
    name: 'Rio de Janeiro'
  },
  RN: {
    code: 'RN',
    name: 'Rio Grande do Norte'
  },
  RO: {
    code: 'RO',
    name: 'Rondônia'
  },
  RS: {
    code: 'RS',
    name: 'Rio Grande do Sul'
  },
  RR: {
    code: 'RR',
    name: 'Roraima'
  },
  SC: {
    code: 'SC',
    name: 'Santa Catarina'
  },
  SE: {
    code: 'SE',
    name: 'Sergipe'
  },
  SP: {
    code: 'SP',
    name: 'São Paulo'
  },
  TO: {
    code: 'TO',
    name: 'Tocantins'
  }
};

export type State = keyof typeof STATES_DATA;

export type StateCode = State;

export type StateName =
  | 'Acre'
  | 'Alagoas'
  | 'Amapá'
  | 'Amazonas'
  | 'Bahia'
  | 'Ceará'
  | 'Distrito Federal'
  | 'Espírito Santo'
  | 'Goiás'
  | 'Maranhão'
  | 'Minas Gerais'
  | 'Mato Grosso'
  | 'Mato Grosso do Sul'
  | 'Pará'
  | 'Paraíba'
  | 'Pernambuco'
  | 'Piauí'
  | 'Paraná'
  | 'Rio de Janeiro'
  | 'Rio Grande do Norte'
  | 'Rondônia'
  | 'Rio Grande do Sul'
  | 'Roraima'
  | 'Santa Catarina'
  | 'Sergipe'
  | 'São Paulo'
  | 'Tocantins';

export const STATES = Object.keys(STATES_DATA) as State[];
