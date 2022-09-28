-- PROCEDURE
-- procedure tidak memiliki return atau kembalian
create or replace procedure pemesanan_baru(
	a integer, b text
)
language sql
as $$
insert into tb_pemesanan(id_pemesanan, nama)
values (a, b);
$$;
select * from tb_pemesanan;
-- see procedure in 'Procedures' from public list.

-- panggil procedure
call pemesanan_baru(6, 'forioktopakpahan');


-- FUNCTION
-- function memiliki return 
create or replace function jumlah_cashier()
returns integer as $jumlah$ --menetapkan kembalian integer dengan parameter jumlah
declare 
	jumlah integer;
BEGIN
	select count(*) into jumlah from tb_cashier;
	return jumlah;
end;
$jumlah$ language plpgsql;

select count(*) from tb_cashier;

-- artinya menghitung field dan memasukkan ke jumlah

-- panggil fungsi
select jumlah_cashier()

-- create increment function
create or replace function inc(a int)
returns integer as $inc$
BEGIN	
	return a+1;
end;
$inc$ language plpgsql;
-- we can see in functions from public list

-- call function
select inc(4);

-- create function penambahan
create or replace function penambahan(a int, b int)
returns integer as $jumlah$
begin 
	return a+b;
end;
$jumlah$ language plpgsql;

-- call function
select penambahan(2, 5);

-- PARAMETER IN
-- create function penambahan() 
--artinya secara tidak otomatis sudah menambah in a int, in b int.
--sehingga tidak perlu menggunakan (IN a int, IN b in) ketika mendeklarasikan parameter baru.
--itu sudah default

-- PARAMETER OUT
create function minimalMax(a integer, b integer, c integer, OUT min integer, OUT max integer)
as $mm$
begin 
	min = least(a, b, c);
	max = greatest(a, b, c);
end;
$mm$ language plpgsql;
-- call function
select minimalMax(40, 3, 5);

-- INOUT
-- Artinya parameter bisa menjadi inputan dan outputan
create or replace function pangkat_dua (inout a integer)
as $jumlah$
begin 
	a = a * a;
end;
$jumlah$ language plpgsql;
-- call function
select pangkat_dua(33);


-- IF ELSE
do $$
DECLARE
no1 integer = 100;
no2 integer = 20;
BEGIN
	if no1 > no2 THEN
		raise notice 'angka 1 lebih besar dari angka 2';
	elsif no2 > no1 THEN
		raise notice 'angka 2 lebih besar dari angka 1';
	else
		raise notice 'angka 1 = angka 2';
end if;
end $$;

-- create fibonacci function with loop looping
create or replace function fibonacci (n integer)
returns integer as $$
declare 
	counter integer = 0;
	i integer = 0;
	j integer = 1;
begin 
	if(n<1) THEN
		return 0;
	end if;
	
	loop
		exit when counter = n;
		counter = counter + 1;
		select j, i+j into i, j;
	end loop;
	return i;
end;
$$ language plpgsql;
-- call function
select fibonacci(30);

-- create fibonacci function with loop while
create or replace function fibonacci_sec(n integer)
returns integer as $$
declare 
	counter integer = 0;
	i integer = 0;
	j integer = 1;
begin 
	if(n<1) THEN
		return 0;
	end if;
	
	while counter < n 
	loop
		counter = counter + 1;
		select j, i+j into i, j;
	end loop;
return i;
end;
$$ language plpgsql;
-- call function
select fibonacci_sec(30);

-- TRIGER
-- dimana jika dilakukan perubahan maka secara otomatis postgres akan mencatat didalam table.
create table tb_perubahan_profil(
	id_cashier integer primary key,
	alamat_lama text,
	alamat_baru text,
	nama text	
);
-- functions
-- fungsi ini berguna untuk mendetect perubahan alamat saja 
create or replace function berubah()
returns trigger as $yes$
begin
	if new.alamat <> old.alamat then
	insert into tb_perubahan_profil values(old.id_cashier, old.alamat, new.alamat, old.nama);
	end if;
	return new;
end;
$yes$ language plpgsql;

-- create new trigger
create trigger berubah 
before UPDATE
on tb_cashier
for each row
execute function berubah()

-- update in tb_cashier
update tb_cashier set alamat = 'laguboti' where id_cashier = 1;
update tb_cashier set umur = 100 where id_cashier = 2;

-- update trigger on table wkkwk
alter trigger berubah on tb_cashier
rename to berubah_alamatnya;
-- menonaktifkan trigger
alter table tb_cashier
disable trigger berubah_alamatnya;
-- ubah maka pada trigger tidak terdeteksi
update tb_cashier set alamat = 'nano'
where id_cashier = 4;

-- activate again
alter table tb_cashier enable trigger berubah_alamatnya;

-- "disable all" to disable all trigger
-- delete trigger
drop trigger berubah_alamatnya on tb_cashier;

-- TRANSACTION
-- begin;
-- commit;
-- rollback;-> jika tidak ingin query dijalankan, alias bisa dikemnalikan yang sudah di lakukan perubahan, sekaligus mengakhiri
begin;
delete from tb_barang where id_barang = 4;
-- mengembalikan id barang yang dihapus
rollback;
begin;
commit; -- sama seperti submit, maka perubahan yang dilakukan akan disimpan
select * from tb_barang;

select * from tb_pemesanan;
select * from tb_cashier;
select * from tb_perubahan_profil;