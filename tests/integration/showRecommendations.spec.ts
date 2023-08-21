import supertest from 'supertest';
import { personMock, relationshipsMock } from '../mocks';
import { app } from '../../src/index';

describe('when the recommendations route is accessed ', () => {
  beforeAll(() => {
    personMock.forEach(
      async (user) => await supertest(app).post('/person').send(user),
    );

    relationshipsMock.forEach(
      async (relation) =>
        await supertest(app).post('/relationship').send(relation),
    );
  });

  it('should return success with a list of recommendations', async () => {
    const cpf = '11111111111';
    const expectedResponse = ['44444444444', '55555555555'];

    const response = await supertest(app).get(`/recommendations/${cpf}`);

    expect(response.body).toEqual(expectedResponse);
    expect(response.status).toBe(200);
  });

  it('should return error if the user not exist', async () => {
    const cpf = 'usernoexist';

    const response = await supertest(app).get(`/recommendations/${cpf}`);

    expect(response.status).toBe(404);
  });

  it('should return error if cpf is more than 11 digits', async () => {
    const cpf = 'morethan11digits';

    const response = await supertest(app).get(`/recommendations/${cpf}`);

    expect(response.status).toBe(404);
  });
});
