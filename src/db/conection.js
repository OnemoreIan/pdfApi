const { Sequelize } = require('sequelize');

const host =  process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;

/* var sequelize;
function conectarse() {
    try {
        return sequelize = new Sequelize(database, user, password, {
            host: host,
            dialect: 'mysql',
            logging: false,
            port: port
        });
    } catch (error) {
        console.error("problemas en "+error);
        
    }
    
} */

var sequelize = new Sequelize(database,user,password, {
    host: host,
    dialect: 'mysql',
    logging: false,
    port: port
});


module.exports = {
    sequelize
};