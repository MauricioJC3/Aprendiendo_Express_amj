const db = require('../../database/conexion.js');


class EmpresasController {
    constructor() {

    }

    // Todos los métodos que se utilizan en la ruta tienen dos parámetros req, res 
    consultar(req, res) {
        try {

            db.query(
                `SELECT * FROM empresas`,
                (error, rows) => {
                    if(error) {
                        res.status(400).send(error);
                    }
                    res.status(200).json(rows);
                });
            
        } catch (error) {
            res.status(500).send(error.message);
        }

    }

    consultarDetalle(req, res) {
       const { id } = req.params; // desestructuracion 
       try {

        db.query(
            `SELECT * FROM empresas WHERE id_empresa = ?`, [id],
            (error, rows) => {
                if(error) {
                    res.status(400).send(error);
                }
                res.status(200).json(rows[0]); // se convirtio en un objeto al agregar[0]
            });
        
    } catch (error) {
        res.status(500).send(error.message);
    }

    }

    ingresar(req, res) {
        try {
            const {nombre_empresa, direccion, telefono, email} = req.body;

            db.query(
                `INSERT INTO empresas (id_empresa, nombre_empresa, direccion, telefono, email)
                VALUES (NULL, ?, ?, ?, ?);`, 
                [nombre_empresa, direccion, telefono, email], 
                (error, rows) => {
                    if(error) {
                        res.status(400).send(error);
                    }
                    res.status(201).json(rows);
                });

        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    actualizar(req, res) {

        const { id } = req.params; // desestructuracion 

        try {
            const {nombre_empresa, direccion, telefono, email} = req.body;

            db.query(
                `
                UPDATE empresas 
                SET nombre_empresa = ?, 
                direccion = ?, 
                telefono = ?, 
                email = ? 
                WHERE id_empresa = ?;

                `, 
                [nombre_empresa, direccion, telefono, email, id], 
                (error, rows) => {
                    if(error) {
                        res.status(400).send(error);
                    }
                    if(rows.affectedRows == 1)
                    res.status(201).json({respuesta: 'Registro actualizado con exito'});
                });

        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    eliminar(req, res) {
        
        const { id } = req.params; // desestructuracion 

        try {
            db.query(`
                DELETE FROM empresas
                WHERE id_empresa = ?;
                `, 
                [id], 
                (error, rows) => {
                    if(error) {
                        res.status(400).send(error);
                    }
                    if(rows.affectedRows == 1)
                    res.status(201).json({respuesta: 'Registro eliminado con exito'});
                });

        } catch (error) {
            res.status(500).send(error.message);
        }
    }

}

// nueva instancia de la clase
module.exports = new EmpresasController();