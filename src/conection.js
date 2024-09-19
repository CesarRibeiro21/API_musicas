import mysql from 'mysql2/promisse';

const con = await mysql.createConnection({
    host: process.env.Mysql_host,
    user: process.env.Mysql_user,
    password: process.env.Mysql_pwd,
    database: process.env.Mysq_DB,
    typeCast: function (field, next){
        if(field.type === 'TINY' && field.length === 1){
            return (field.string() === '1')
        }
    else if (field.type.includes('Decimal')) {
        return Number(field.string());
    }
    else{
        return next();
    }
    }
})

console.log('->->DB Concectou');

export default con;