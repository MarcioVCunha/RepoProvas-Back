import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teachers_classes')
export default class TeacherClasses {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    teacher_id: number;

  @Column()
    class_id: number;
}
