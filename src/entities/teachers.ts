import {
  Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany,
} from 'typeorm';
import Classes from './classes';

@Entity('teachers')
export default class Teachers {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @ManyToMany(() => Classes, (classes) => classes.id, { eager: true })
  @JoinTable({
    name: 'teachers_classes',
    joinColumn: {
      name: 'teacher_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'class_id',
      referencedColumnName: 'id',
    },
  })
    classes: Classes[];
}
