CREATE TABLE IF NOT EXISTS users (    
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,    
    age INTEGER NOT NULL,
    email VARCHAR(100) NOT NULL);
INSERT INTO users (name, age, email) VALUES
('Elijah', 19, 'ElijahKarz@gmail.com'),
('Ruslan', 19, 'Rusik11@gamil.com'),
('Alex', 19, 'AlexDemyan@gamil.com');
