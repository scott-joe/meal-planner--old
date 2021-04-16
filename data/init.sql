CREATE USER admin;
CREATE DATABASE mealPlanner;
GRANT ALL ON DATABASE mealPlanner TO admin;

use mealPlanner;
CREATE TABLE recipes
(
id INTEGER AUTO_INCREMENT,
name TEXT,
PRIMARY KEY (id)
);