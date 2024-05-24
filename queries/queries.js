import pool from "../config/db.js";
import chalk from 'chalk';
const err = chalk.bold.red;
const succ = chalk.bold.green;
const argumento = process.argv.slice(2);
const opcion = argumento[0]
let nombre = argumento[1]
let rut = argumento[2]
let curso = argumento[3]
let nivel = argumento[4]

//revisar conexion con la base de datos
/* const getconection = async()=>{
    try {
        const text = await pool.query("SELECT NOW()")
        console.log(text.rows)
    } catch (error) {
        console.log(error)
    }
}
getconection(); */

const addStudent = async ()=>{
    try {
        const sql ={
            text : "INSERT INTO estudiantes(nombre, rut, curso, nivel) values($1, $2, $3, $4) returning *",
            values : [nombre, rut, curso, nivel]
        }
        const response = await pool.query(sql);
        console.log(succ(`Estudiante con RUT ${sql.values[1]} agregado correctamente`), response.rows);
    } catch (error) {
        const {code, message} = error
        console.log(err(`Error ${code}: ${message}`))
    }
};

const getStudents = async()=>{
    try {
        const sql = {
            text: "SELECT * from estudiantes",
            rowMode: "array",
        }
        const response = await pool.query(sql);
        console.log(succ(response.rows))
    } catch (error) {
        const {code, message} = error
        console.log(err(`Error ${code}: ${message}`))
    }
};

const getStudentsByRut = async(rut)=>{
    try {
        const sql = {
            text: "SELECT * from estudiantes where rut = $1",
            values:[rut],
            rowMode: "array",
        }
        const response = await pool.query(sql);
        console.log(succ(response.rows))
    } catch (error) {
        const {code, message} = error
        console.log(err(`Error ${code}: ${message}`))
    }
}


const editStudents = async ()=>{
    try {
        const sql={
            text: "UPDATE estudiantes set nombre = $1, curso = $3, nivel = $4 WHERE rut = $2 RETURNING *",
            values: [nombre, rut, curso, nivel]
        }
        const response = await pool.query(sql);
        console.log(succ(response.rows))
    } catch (error) {
        const {code, message} = error
        console.log(err(`Error ${code}: ${message}`))
    }
}

const deleteStudents = async()=>{
    try {
        const sql ={
            text: "delete from estudiantes where rut = $1",
            values : [rut],
        }
        const response = await pool.query(sql);
        console.log(succ(`Registro de estudiante con RUT ${sql.values} eliminado correctamente`))
    } catch (error) {
        const {code, message} = error
        console.log(err(`Error ${code}: ${message}`))
    }
};



if(opcion === 'add'){
    addStudent()
}else if(opcion === 'get'){
    getStudents()
}else if(opcion === 'getRut'){
    rut = argumento[1]
    getStudentsByRut(rut)
}else if(opcion === 'edit'){
    editStudents()
}else if(opcion === 'delete'){
    rut = argumento[1]
    deleteStudents()
}else{
    console.log('Opcion Invalida')
}