import { relationshipsMock, personMock } from '../mocks';
import supertest from 'supertest';
import { app } from '../../src/index';

describe('when the clean route is accessed', () => {

  beforeAll(() => {
    personMock.forEach(
      async (user) => await supertest(app).post('/person').send(user),
    );

    relationshipsMock.forEach(
      async (relation) =>
        await supertest(app).post('/relationship').send(relation),
    );
  });

  it('should clean all the data added to memory', async () => {
    const response = await supertest(app).delete('/clean');

    expect(response.status).toBe(200);
  });
});
