DROP DATABASE IF EXISTS veryEasy;
CREATE DATABASE veryEasy;
USE veryEasy;
CREATE TABLE favCars (make varchar(225), model varchar(225), yr int, id int);
INSERT INTO favCars (make, model, yr, id)
VALUES ("Porchse", "Cayenne Turbo S E-Hybrid", "2020", "1"),
("Chevrolet", "Monte Carlo SS" ,"1943", "2"),
("Lincoln", "MKZ", "2020", "3");

INSERT INTO favCars (make, model, yr, id)
VALUES ("Nissan", "GTR", "2020", "4"),
("Pagani", "Huayra", "2020", "5");