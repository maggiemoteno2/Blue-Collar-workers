CREATE TABLE person;

--\c into postgres

CREATE TABLE person(
id bigserial PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(150) NOT NULL,
physical_address VARCHAR(50) NOT NULL
); 

-- a person who's looking for help
CREATE TABLE help;

-- \c into postgres 
CREATE TABLE help(
id bigserial PRIMARY KEY,
title VARCHAR(50) NOT NULL,
description  VARCHAR(50) NOT NULL,
city VARCHAR(150) NOT NULL,
province VARCHAR(50) NOT NULL,
expiry_date VARCHAR(50) NOT NULL
); 