const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/',(req, res)=> {
    mysqlConnection.query( 'SELECT * FROM establecimientos where tipo_establecimiento_id_tipo ="5";',(err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
    router.get('/:id', (req,res) => {
        const {id } = req.params;
        mysqlConnection.query('SELECT * FROM establecimientos where id_Establecimiento =?',[id],(err, rows, fields) => {
            if(!err) {
                res.json(rows[0]);
            }else {
                console.log(err);
            } 
        });
    });
    
});




module.exports = router;