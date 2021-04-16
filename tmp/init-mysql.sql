ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

CREATE USER admin;
CREATE DATABASE meal-planner;
GRANT ALL ON DATABASE mealPlanner TO admin;
ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY '';