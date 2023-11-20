import mysql from 'mysql2/promise'

const conect=async()=>{
    const conectar =await mysql.createConnection("mysql://root:123456789@localhost:3306/")
    console.log('conectou au banco')
    return conectar
}
export {conect}