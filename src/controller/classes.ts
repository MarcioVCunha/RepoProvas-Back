import { Request, Response } from 'express';
import { getClassesByTeacherIdService, getClassesService } from '../service/classes';

export async function getClasses(req: Request, res: Response) {
  const result = await getClassesService();

  res.send(result);
}

export async function getClassesByTeacherId(req: Request, res: Response) {
  const { teacherId } = req.body;

  const result = await getClassesByTeacherIdService(teacherId);

  res.send(result);
}
