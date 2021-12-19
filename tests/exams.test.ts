import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../src/app';
import createExam from './factories/examFactorie';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

const exam = createExam();

describe('Get exams', () => {
  it('Should return 200 if it returns a list with exams', async () => {
    const result = await supertest(app).get('/exams');
    expect(result.status).toEqual(200);
    expect(result.body[0]).toHaveProperty('id');
    expect(result.body[0]).toHaveProperty('name');
    expect(result.body[0]).toHaveProperty('type');
    expect(result.body[0]).toHaveProperty('link');
    expect(result.body[0]).toHaveProperty('teacher_id');
    expect(result.body[0]).toHaveProperty('class_id');
    expect(result.body[0]).toHaveProperty('teacher');
    expect(result.body[0]).toHaveProperty('classes');
  });
});

describe('Get exams by teacher id', () => {
  it('Should return 200 if return a exam with a teacher id', async () => {
    const result = await supertest(app).post('/exams-teacher').send({ id: 1 });
    expect(result.status).toEqual(200);
    expect(result.body[0]).toHaveProperty('id');
    expect(result.body[0]).toHaveProperty('name');
    expect(result.body[0]).toHaveProperty('type');
    expect(result.body[0]).toHaveProperty('link');
    expect(result.body[0]).toHaveProperty('teacher_id');
    expect(result.body[0]).toHaveProperty('class_id');
    expect(result.body[0]).toHaveProperty('teacher');
    expect(result.body[0]).toHaveProperty('classes');
  });
});

describe('Get exams by class id', () => {
  it('Should return 200 if return a exam with a class id', async () => {
    const result = await supertest(app).post('/exams-classes').send({ id: 1 });
    expect(result.status).toEqual(200);
    expect(result.body[0]).toHaveProperty('id');
    expect(result.body[0]).toHaveProperty('name');
    expect(result.body[0]).toHaveProperty('type');
    expect(result.body[0]).toHaveProperty('link');
    expect(result.body[0]).toHaveProperty('teacher_id');
    expect(result.body[0]).toHaveProperty('class_id');
    expect(result.body[0]).toHaveProperty('teacher');
    expect(result.body[0]).toHaveProperty('classes');
  });
});

describe('Inser Exam controller', () => {
  it('Returns 200 if returned a list with all exams', async () => {
    const result = await supertest(app).post('/insert-exam').send(exam);
    expect(result.status).toEqual(200);
  });

  it('Returns 409 if exam is alerady in database', async () => {
    const result = await supertest(app).post('/insert-exam').send(exam);
    expect(result.status).toEqual(409);
  });
});
