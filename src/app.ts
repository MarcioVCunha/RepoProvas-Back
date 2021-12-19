import './setup';

import express from 'express';
import cors from 'cors';

import connectDatabase from './database';
import getTeachers from './controller/teachers';
import { getClassesByTeacherId, getClasses } from './controller/classes';
import {
  getExams, getExamsByClassId, getExamsByTeacherId, insertExam,
} from './controller/exam';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/teachers', getTeachers);
app.get('/exams', getExams);
app.get('/classes', getClasses);

app.post('/classes-teacher', getClassesByTeacherId);
app.post('/exams-teacher', getExamsByTeacherId);
app.post('/exams-classes', getExamsByClassId);
app.post('/insert-exam', insertExam);

export async function init() {
  await connectDatabase();
}

export default app;
