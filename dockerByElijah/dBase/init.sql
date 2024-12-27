CREATE TABLE IF NOT EXISTS users (    
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,    
    age INTEGER NOT NULL,
    email VARCHAR(100) NOT NULL);
INSERT INTO users (name, age, email) VALUES
('Rodion', 19, 'rodionbog1@gmail.com'),
('Nikita', 19, 'Nruban@gamil.com'),
('Andre', 19, 'Qubert@gamil.com');
