import supertest from 'supertest';
import { Person } from '../../src/models';
import { app } from '../../src/index';

describe('when the getPerson route is accessed ', () => {
  it('should return success with the user created', async () => {
    const mock: Person = {
      cpf: '11111111111',
      name: 'Person A',
    };

    await supertest(app).post('/person').send(mock);

    const response = await supertest(app).get(`/person/${mock.cpf}`);

    expect(response.body).toEqual(mock);
    expect(response.status).toBe(200);
  });

  it('should return 404 error when the user isn\'t exist', async () => {
    const cpf = 'cpfnotexist';

    const response = await supertest(app)
      .get('/person/:CPF')
      .query({ CPF: cpf });

    expect(response.status).toBe(404);
  });
});
