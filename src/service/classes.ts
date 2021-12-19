import { getRepository } from 'typeorm';
import Classes from '../entities/classes';
import Teachers from '../entities/teachers';

export async function getClassesService() {
  const result = await getRepository(Classes).find();

  return (result);
}

export async function getClassesByTeacherIdService(teacherId: number) {
  const result = await getRepository(Teachers).find({ where: { id: teacherId } });

  return (result);
}
