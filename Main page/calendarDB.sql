CREATE DATABASE calendarDB;

USE calendarDB;

CREATE TABLE reminders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day INT,
    month INT,
    year INT,
    reminder TEXT
);
