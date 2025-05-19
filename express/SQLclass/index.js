const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Mysql@123'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

let data = [];

for (let i = 0; i < 10; i++) {
    data.push(getRandomUser());
}

let query = "INSERT INTO user (id, username, email, password) VALUES ?";

try {
    connection.query(query, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
    // console.log(data)
} catch (err) {
    console.log(err);
} finally {
    connection.end();
}





// let getRandomUser = () => {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.username(), // before version 9.1.0, use userName()
//         email: faker.internet.email(),
//         password: faker.internet.password()
//     };
// }

// console.log(getRandomUser())