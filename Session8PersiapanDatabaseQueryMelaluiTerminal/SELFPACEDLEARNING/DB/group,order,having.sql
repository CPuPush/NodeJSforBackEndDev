-- group by, having, order by

-- order by
select nama, gaji from tb_cashier order by gaji asc;





-- create table
create table tb_pelanggan(
	id_pelanggan integer primary key,
	nama_pelanggan character(20),
	pembelian_perbulan numeric check(pembelian_perbulan > 0),
	diskon numeric check(diskon > 0),
	check(pembelian_perbulan > diskon)
);

-- insert value
insert into tb_pelanggan VALUES(
	1, 'indie', 100, 10
);


select * from public.tb_pelanggan 
ORDER By id_pelanggan asc;