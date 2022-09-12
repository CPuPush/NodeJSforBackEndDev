-- insert value
insert into tb_barang(id_barang, nama_barang) values(
	2,'monitor'
);

-- update table
update tb_barang 
set keterangan_barang = 'kabel update' 
where id_barang = 2 

-- create primary and foreign key
create TABLE tb_detail_pemesanan(
	id_pemesanan integer references tb_pemesanan(id_pemesanan) on delete cascade,
	id_barang integer references tb_barang(id_barang) on delete restrict,
	jumlah integer,
	primary key(id_barang, id_pemesanan)
);

-- insert tb_pemesanan
insert into tb_pemesanan(id_pemesanan, nama) 
values
	(1, 'fori'),
	(2, 'okto');
	
-- insert tb_detail_pemesanan
insert into tb_detail_pemesanan(id_pemesanan, id_barang, jumlah)
VALUES
	(1, 2, 50),
	(2, 3, 100);

-- insert tb_cashier
create table tb_cashier( 
	id_cashier integer primary key,
	nama CHARACTER(20),
	umur integer,
	alamat text,
	gaji money
);

-- insert value to tb_cashier
insert into tb_cashier values(
	5,
	'si mayani',
	30,
	'tarutung',
	1000000000
);


select * from tb_barang;