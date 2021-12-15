import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('classes')
export default class Classes {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
}
