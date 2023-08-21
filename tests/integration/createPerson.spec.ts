import { app } from '../../src/index';
import supertest from 'supertest';
import { Person } from '../../src/models';

describe('when the person route is accessed ', () => {
  afterEach(async () => {
    await supertest(app).delete('/clean')
  });

  it('should create a new person', async () => {
    const mock: Person = {
      cpf: '11111111111',
      name: 'Person A',
    };

    const response = await supertest(app).post('/person').send(mock);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mock);
  });

  it('shouldn\'t create a new person and return error 400', async () => {
    const response = await supertest(app).post('/person').send({
      cpf: 'morethan11digits',
      name: 'Person A',
    });

    expect(response.status).toBe(400);
  });

  it('shouldn\'t create a duplicated person', async () => {
    await supertest(app).post('/person').send({
      cpf: '11111111112',
      name: 'Person B',
    });

    const response = await supertest(app).post('/person').send({
      cpf: '11111111112',
      name: 'Person B',
    });

    expect(response.status).toBe(400);
  });
});
