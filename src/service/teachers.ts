import { getRepository } from 'typeorm';
import Teachers from '../entities/teachers';

export default async function getTeachersService() {
  const result = await getRepository(Teachers).find();

  return (result);
}
