/*
//! Indexes
-- mencoba indexis apakah lebih menjadi cepat atau tidak
-- 0.00..16.38
create index idx_nama on tb_cashier(nama);
-- open tb_cashier and open indexes, there is the idx_name
-- hasil run explain 0.00..1.06
-- sehingga lebih mempercepat

//! Views
Create view defines a view of a query. the view is not physically materialized. instead, the query is run every time the view is referenced in a query.
create view view_cashier as 
select id_cashier, nama, umur from tb_cashier;
-- cara melihat ada di views 

-- panggil view
select * from view_cashier;
//! Union & Union All
-- union all menggabungan 2 query sekaligus, tetapi tidak menghilangkan duplikasi pada data
-- union menggabungkan 2 query sekaligus dan menghilangkan duplikasi
create table tb_status(
	id_status integer primary key,
	status text
);

insert into tb_status values(
	2, 'tidak aktif'
);

-- add id_status as foreign key to tb_pemesanan
insert into tb_pemesanan values(
	4, 'rio', 1
);

-- coba union all => menggabunggan dua buah sebelah kiri table, dan dua buah sebelah kanan table
select p.nama, s.status
from tb_pemesanan as p
left outer join tb_status as s
on p.id_status = s.id_status 

UNION

select p.nama, s.status
from tb_pemesanan as p
right outer join tb_status as s
on p.id_status = s.id_status ``

-- union all > ada duplikasi nama, tetapi union tidak ada


//! Subqueries
select * from tb_cashier
where umur 
in (select umur from tb_cashier where gaji > '1000000')
-- artinya mendapatkan umur dengan gaji diatas 1jt, sehingga umur itu nantinya dipanggil 

-- create table
create table tb_langganan(
	id_langganan integer primary key,
	nama_langganan character(25),
	id_status integer
);
-- sub query
insert into tb_langganan 
select * from tb_pemesanan
where id_pemesanan 
in (select id_pemesanan from tb_pemesanan);
-- harus memiliki row yang sama antar 2 table

-- sub query dari update
update tb_cashier
set gaji = gaji * 1.5
where umur in (
	select umur from tb_cashier where umur >= 24
);

-- sub query delete
delete from tb_cashier
where umur in (
select umur from tb_cashier where umur > 24
);
//! Create Update Array
-- create
create table tb_data_penjualan(
	id_penjualan integer primary key,
	nama text,
	harga integer[],
	keterangan text[][]
);
-- insert
insert into tb_data_penjualan VALUES
(2, 'darker', '{10000, 20050, 15000, 10000}','{{"nasi","terbaik"}, {"lama", "paten"}}');

-- select => get data array tidak dimulai dari 0 tetapi dari 1
select harga[2] from tb_data_penjualan;
-- using where
select nama from tb_data_penjualan where harga[1]<>harga[2];
-- dims
select array_dims(harga) from tb_data_penjualan;
-- update in array
update tb_data_penjualan
set harga = '{25000, 25000, 25000, 25000}'
where nama = 'dark'
-- update index array tertentu
update tb_data_penjualan 
set harga[3]=262626 where nama = 'dark'
-- menambahkan array dibelakang
update tb_data_penjualan 
set harga = array_append(harga, 99000);
-- menambah array lebih dari satu
update tb_data_penjualan
set harga = array_cat(harga, array[2000, 15000])
-- delete in array
update tb_data_penjualan 
set harga = array_remove(harga, 10000);

//! Searching Array
select * from tb_data_penjualan
where harga[1]= 20000 
or harga[2]=20000
or harga[3] = 20000
or harga[4] = 20000
*/