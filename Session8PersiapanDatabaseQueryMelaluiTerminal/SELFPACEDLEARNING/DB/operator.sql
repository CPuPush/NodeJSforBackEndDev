-- Operator

-- aritmatika 
create table tb_aritmatik(
	id integer primary key,
	hasil numeric
);
-- modulasi
insert into tb_aritmatik values (
	1, 14%4
);
-- modulasi merupakan hasil sisa dari perkalian 

-- pangkat
insert into tb_aritmatik values(
	2, 10^2
);

-- factorial
insert into tb_aritmatik values(
	3, factorial(5)
);

-- akar || square root
insert into tb_aritmatik values(
	4, |/25
);

-- logika
-- logika and
select * from tb_cashier 
where umur > 23 AND gaji > '1000000';

-- logika or
select * from tb_cashier 
where umur > 23 OR gaji > '1000000';
 
-- operator like
select * from tb_cashier
where nama like 'a%'; -->artinya semua nama yang huruf depannya p
-- %a% -> artinya mencari yang huruf tengahnya a
-- %a => search where word that include 'a' behind 

-- operator _ => operator search which fill in one char
select * from tb_cashier where nama like '_i%';

-- operator in
select * from tb_cashier where umur in ('22','24','30');
-->artinya mencari umur dimana umur 22, 25, 30

-- operator between
select * from tb_cashier where umur between 21 and 24;

-- limit and offset
-- operator limit
select * from tb_cashier limit 4;

-- operator upset
select * from tb_cashier limit 2 offset 2;





select * from public.tb_cashier;

select * from public.tb_aritmatik 
ORDER By id ASC