import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
} from 'typeorm';
import Classes from './classes';
import Teachers from './teachers';

@Entity('exams')
export default class Exams {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    type: string;

  @Column()
    link: string;

  @Column()
    teacher_id: number;

  @Column()
    class_id: number;

  @OneToOne(() => Teachers, { eager: true })
  @JoinColumn({ name: 'teacher_id' })
    teacher: Teachers;

  @OneToOne(() => Classes, { eager: true })
  @JoinColumn({ name: 'class_id' })
    classes: Classes;
}
