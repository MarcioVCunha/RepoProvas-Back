import { Request, Response } from 'express';
import insertExamService from '../service/exam';

export default async function insertExam(req: Request, res: Response) {
  const {
    teacherId, classId, type, name, link,
  } = req.body;

  const result = await insertExamService(teacherId, classId, type, name, link);

  if (result === 409) {
    return res.status(409).send('Esta prova já esta cadastrada');
  }

  return (res.send(result));
}
