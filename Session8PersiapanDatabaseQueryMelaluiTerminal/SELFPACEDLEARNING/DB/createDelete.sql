-- create Database
create database db_gorengan;
-- delete Database
drop database db_gorengan;

-- create table and delete table
create table tb_makanan();
drop table tb_makanan;

-- delete record on table
-- hal ini tidak akan berhasil karena ondelete restrict
delete from tb_barang where id_barang=2;
-- table child akan ikutan terhapus ketika record pada parent table dihapus
delete from tb_pemesanan where id_pemesanan=2;
