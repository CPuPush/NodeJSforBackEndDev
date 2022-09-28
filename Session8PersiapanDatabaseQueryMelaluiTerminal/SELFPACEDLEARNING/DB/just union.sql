create table tb_check_vaksin(
	id_peserta serial primary key,
	nama text,
	id_check integer
);
insert into tb_check_vaksin(nama, id_check) 
values
	('fori okto', 1),
	('king of', 2),
	('north blue', 2);
create table tb_check(
	id_check integer primary key,
	status text
);
insert into tb_check
VALUES
	(1, 'sudah divaksin'),
	(2, 'belum divaksin');
drop table tb_check_vaksin;

-- UNION
select p.nama, s.status
from tb_check_vaksin as p
left outer join tb_check as s
on p.id_check = s.id_check
UNION
select p.nama, s.status
from tb_check_vaksin as p
right outer join tb_check as s
on p.id_check = s.id_check


select * from tb_check_vaksin;
select * from tb_check;