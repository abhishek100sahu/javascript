CREATE TABLE user(
    id VARCHAR(50),
    username VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
)