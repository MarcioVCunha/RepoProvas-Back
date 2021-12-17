import { getRepository } from 'typeorm';
import Teachers from '../entities/teachers';

export default async function getClassesByTeacherIdService(teacherId: number) {
  const result = await getRepository(Teachers).find({ where: { id: teacherId } });

  return (result);
}
