import { Request, Response } from 'express';
import getTeachersService from '../service/teachers';

export default async function getTeachers(req: Request, res: Response) {
  const result = await getTeachersService();

  return res.send(result);
}
