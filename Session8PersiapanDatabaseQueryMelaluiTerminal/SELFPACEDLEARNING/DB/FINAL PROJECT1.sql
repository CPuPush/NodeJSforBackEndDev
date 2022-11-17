create table users (
	id serial primary key,
	email VARCHAR(100) not null,
	password VARCHAR(100) not null
);

create table reflections (
	id serial primary key,
	success text not null,
	low_point text not null,
	take_away text not null,
	owner_id integer REFERENCES users(id),
	created_date date not null,
	modified_date date not null
);
ALTER TABLE reflections 
	ADD CONSTRAINT fk_reflections_users FOREIGN KEY (owner_id) REFERENCES users (id);
	