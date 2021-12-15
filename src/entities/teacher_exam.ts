import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teacher_exam')
export default class TeacherExam {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    teacher_id: number;

  @Column()
    exam_id: number;
}
