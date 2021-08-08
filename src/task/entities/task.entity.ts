import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Task {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    type:string;

    @Column()
    description: string;

    @Column()
    duration: string;

    @Column()
    date: string;

}
