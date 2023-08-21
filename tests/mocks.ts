import { Person, Relationship } from '../src/models';

const personMock: Person[] = [
  {
    cpf: '11111111111',
    name: 'Person A',
  },
  {
    cpf: '22222222222',
    name: 'Person B',
  },
  {
    cpf: '33333333333',
    name: 'Person C',
  },
  {
    cpf: '44444444444',
    name: 'Person D',
  },
  {
    cpf: '55555555555',
    name: 'Person E',
  },
];

const relationshipsMock: Relationship[] = [
  {
    cpf1: '11111111111',
    cpf2: '22222222222',
  },
  {
    cpf1: '11111111111',
    cpf2: '33333333333',
  },
  {
    cpf1: '22222222222',
    cpf2: '44444444444',
  },
  {
    cpf1: '33333333333',
    cpf2: '44444444444',
  },
  {
    cpf1: '33333333333',
    cpf2: '55555555555',
  },
];

export { personMock, relationshipsMock };
