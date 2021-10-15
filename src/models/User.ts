import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	public id: Number;

	@Column('varchar', { unique: true })
	public name: String;

	@Column('varchar', { unique: true })
	public email: String;

	@Column('varchar', { length: 255 })
	public password: String;

	@CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
	public created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
	public updated_at: Date;
}
