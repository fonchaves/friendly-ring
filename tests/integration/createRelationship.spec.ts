import supertest from 'supertest';
import { app } from '../../src/index';
import { personMock } from '../mocks';

describe('when the relationship route is accessed ', () => {
  beforeAll(() => {
    personMock.forEach(
      async (user) => await supertest(app).post('/person').send(user),
    );
  });

  it('should create a relationship.', async () => {
    const relationshipMock = {
      cpf1: '11111111111',
      cpf2: '22222222222',
    };

    const response = await supertest(app)
      .post('/relationship')
      .send(relationshipMock);

    expect(response.body).toEqual(relationshipMock);
    expect(response.status).toBe(200);
  });

  it('should return error when the relation wasn\'t found', async () => {
    const relationMock = {
      cpf1: '66666666666', // cpf no previously created
      cpf2: '33333333333',
    };

    const response = await supertest(app)
      .post('/relationship')
      .send(relationMock);

    expect(response.status).toBe(404);
  });
});
