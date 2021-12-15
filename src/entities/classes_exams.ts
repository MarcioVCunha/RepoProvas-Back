import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('classes_exams')
export default class ClassesExams {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    class_id: number;

  @Column()
    exam_id: number;
}
