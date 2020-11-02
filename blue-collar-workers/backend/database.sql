CREATE TABLE person;

--\c into postgres

CREATE TABLE person(
id bigserial PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(150) NOT NULL,
physical_address VARCHAR(50) NOT NULL
); 
