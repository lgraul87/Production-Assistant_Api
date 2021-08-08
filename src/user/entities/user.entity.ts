import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    lastName:string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    photo:string;

}
