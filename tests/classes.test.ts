import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../src/app';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('Classes controller', () => {
  it('Returns 200 if returned a list with all classes', async () => {
    const result = await supertest(app).get('/classes');
    expect(result.status).toEqual(200);
    expect(result.body[0]).toHaveProperty('id');
    expect(result.body[0]).toHaveProperty('name');
    expect(result.body[0]).toHaveProperty('period');
  });

  it('Returns 200 if returned a class based on the teacher id', async () => {
    const result = await (await supertest(app).post('/classes-teacher').send({ teacherId: 1 }));
    expect(result.status).toEqual(200);
    expect(result.body[0]).toHaveProperty('id');
    expect(result.body[0]).toHaveProperty('name');
    expect(result.body[0]).toHaveProperty('classes');
  });
});
