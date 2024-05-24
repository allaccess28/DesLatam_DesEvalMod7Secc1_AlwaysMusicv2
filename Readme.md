
# Desafio Evaluado Always Music v2.0

Desafio Evaluado Modulo 7 Seccion 1 "Always Music version 2".
Creacion deL CRUD en base a funciones locales, con conexion a base de datos.

## Optimizations

Se agrega la funcion buscar por rut.
Se modifica el request haciendolo desde un objeto parametrizado.
Se añade el modo `rowMode` para visualizar las acciones de select.

## Authors

- [@allaccess28](https://github.com/allaccess28)


## Deployment

Para correr este sistema use la terminal a traves de process.argv
ingresando los siguientes comandos y parametros:

add nombre rut curso nivel <--- añade un estudiante
get <----Revisa la base de datos total
getRut rut <------ busca un estudiante desde su rut.
edit nombre rut curso nivel <----edita algun parametro segun el rut
delete rut <----- elimina una columna segun su rut


## Environment Variables

Para correr esta base de datos debe usar sus variables de entorno en un archivo .env

`DB_USER`
`DB_PASSWORD`
`DB_HOST`
`DB_DATABASE`

La base de datos esta construida en PostgreSQL y debe tener por nombre `estudiantes`


## Appendix

Para construir el codigo se ha usado Node 21.7, por lo que las variables de entorno han sido llamadas con el comando `process.loadEnvFile`.
    Si cuenta con una version anterior de node por favor usar la configuracion de la libreria dotenv y modificar la llamada de .env en el archivo `db.js`