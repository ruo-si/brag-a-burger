-- create database
DROP DATABASE IF EXISTS brag-a-burger-db;
CREATE DATABASE brag-a-burger-db;
use brag-a-burger-db;

-- create table
CREATE TABLE burgers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(250) NOT NULL,
    in_my_tummy BOOL DEFAULT false
);

SELECT * FROM burgers;