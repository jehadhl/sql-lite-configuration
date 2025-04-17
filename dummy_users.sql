-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  age INTEGER
);

-- Insert dummy data
INSERT INTO users (name, email, age) VALUES ('Alice Johnson', 'alice@example.com', 28);
INSERT INTO users (name, email, age) VALUES ('Bob Smith', 'bob@example.com', 34);
INSERT INTO users (name, email, age) VALUES ('Charlie Brown', 'charlie@example.com', 22);
INSERT INTO users (name, email, age) VALUES ('Diana Prince', 'diana@example.com', 30);
INSERT INTO users (name, email, age) VALUES ('Ethan Hunt', 'ethan@example.com', 40);
