-- create database
DROP DATABASE IF EXISTS brag_a_burger_db;
CREATE DATABASE brag_a_burger_db;
use brag_a_burger_db;

-- create table
CREATE TABLE burgers (

    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(300) NOT NULL,
    yummy BOOLEAN DEFAULT false
);

SELECT * FROM burgers;