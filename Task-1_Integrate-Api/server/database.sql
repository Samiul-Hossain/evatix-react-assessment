--db create command
CREATE DATABASE integrateapi;

--table schema
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    profession VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--insert command
INSERT INTO users(user_name, user_email, user_password, date_of_birth, profession)
VALUES('henry','henry@gmail.com','asdfg12345','2021-07-07','engineer');

const updateUser = await pool.query(
      'UPDATE users SET user_name = $1, user_email = $2, date_of_birth = $3, profession = $4 where user_id = $5',
      [
        user.rows[0].user_name,
        user.rows[0].user_email,
        user.rows[0].date_of_birth,
        user.rows[0].profession,
        user.rows[0].user_id,
      ]
    )

UPDATE users SET user_name = $1, user_email = $2 user_password = $3, date_of_birth = $4 profession = $5 WHERE user_email = $2;