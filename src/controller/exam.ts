import { Request, Response } from 'express';
import {
  getExamsByClassIdService, getExamsByTeacherIdService, getExamsService, insertExamService,
} from '../service/exam';

export async function getExams(req: Request, res: Response) {
  const result = await getExamsService();

  res.send(result);
}

export async function getExamsByTeacherId(req: Request, res: Response) {
  const result = await getExamsByTeacherIdService(req.body.id);

  return res.send(result);
}

export async function getExamsByClassId(req: Request, res: Response) {
  const result = await getExamsByClassIdService(req.body.id);

  return res.send(result);
}

export async function insertExam(req: Request, res: Response) {
  const {
    teacherId, classId, type, name, link,
  } = req.body;

  const result = await insertExamService(teacherId, classId, type, name, link);

  if (result === 409) {
    return res.status(409).send('Esta prova já esta cadastrada');
  }

  return (res.send(result));
}
