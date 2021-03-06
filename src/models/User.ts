import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity('users')

class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cidade: string;

  @Column()
  uf: number;

//  @BeforeInsert()
//  @BeforeUpdate()
  
//  @CreateDateColumn()
//  created_at: Date;

}

export { User };