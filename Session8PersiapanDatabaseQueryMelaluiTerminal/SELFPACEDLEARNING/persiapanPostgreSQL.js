/*//! how to open postgres on terminal
psql -U postgres -d postgres -p 5432 -h localhost

//* Show database
\l

//* Create db
create database db_kopiku;

//* Create new owner/new user
create user abang_kopiku with password 'qwer123';

//* change owner that had added to db_kopiku
alter database db_kopiku owner to abang_kopiku;

//* how to access database
\c db db_kopiku <nama database> postgress <nama owner>

//* how to see table on database
\dt

//* Clear terminal
\! cls 

//* Close from db 
\d
//* 
//* 
//* 
//* 
*/