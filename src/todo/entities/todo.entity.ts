import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


//สร้างดาต้าเบส
@Entity()
export class Todo {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    title: string;
    @Column({ nullable: true })
    username: string;
    @Column({ nullable: true })
    status: string;
    @Column({ nullable: true })
    sta: number;
}

