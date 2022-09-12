-- where and operator perbandingan

-- sama dengan
select nama from tb_cashier where umur = 24;
-- tidak sama dengan
select * from tb_cashier where umur != 24;
-- lebih besar dari
select nama, gaji from tb_cashier where umur > 22;
-- lebih kecil dari
select nama, gaji from tb_cashier where umur < 24;
-- lebih besar sama dengan dari
select nama, gaji, umur from tb_cashier where umur >= 22;
-- lebih kecil sama dengan dari
select nama, gaji, umur from tb_cashier where umur <= 24;

select * from tb_cashier;