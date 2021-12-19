import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../src/app';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('Teachers controller', () => {
  it('Returns 200 if returned a list with all teachers', async () => {
    const result = await supertest(app).get('/teachers');
    expect(result.status).toEqual(200);
    expect(result.body[0]).toHaveProperty('id');
    expect(result.body[0]).toHaveProperty('name');
    expect(result.body[0]).toHaveProperty('classes');
  });
});
