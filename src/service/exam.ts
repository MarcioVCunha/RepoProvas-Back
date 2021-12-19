import { getRepository } from 'typeorm';
import Exams from '../entities/exams';
import ExamInterface from '../interface/examInterface';

export async function getExamsService() {
  const result = await getRepository(Exams).find();

  return (result);
}

export async function getExamsByTeacherIdService(teacherId: number) {
  const result = await getRepository(Exams).find({ where: { teacher_id: teacherId } });

  return result;
}

export async function getExamsByClassIdService(classId: number) {
  const result = await getRepository(Exams).find({ where: { class_id: classId } });

  return result;
}

export async function insertExamService(
  teacherId: number,
  classId: number,
  type: string,
  name: string,
  link: string,
) {
  const result = await getRepository(Exams).find({ where: { name, link } });

  if (result.length !== 0) {
    return (409);
  }

  const exam: ExamInterface = {
    teacher_id: teacherId,
    class_id: classId,
    type,
    name,
    link,
  };

  await getRepository(Exams).insert(exam);

  return ('Ok');
}
