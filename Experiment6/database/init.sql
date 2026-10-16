CREATE DATABASE IF NOT EXISTS college;
USE college;
CREATE TABLE IF NOT EXISTS students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);
INSERT INTO students (id, name) VALUES (1, 'Ganesh'), (2, 'Priya'), (3, 'Arun')
ON DUPLICATE KEY UPDATE name = VALUES(name);
