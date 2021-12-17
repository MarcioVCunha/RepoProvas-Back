import { Request, Response } from 'express';
import getClassesByTeacherIdService from '../service/classes';

export default async function getClassesByTeacherId(req: Request, res: Response) {
  const { teacherId } = req.body;

  const result = await getClassesByTeacherIdService(teacherId);

  res.send(result);
}
