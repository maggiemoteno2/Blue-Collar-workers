const pool = require('../config/connection')
const seekingRoutes =(server)=>{
server.post('/help',async(req,res)=>{
    try{
const {title,description,city,province,expiry_date}= req.body
const newDetails = await pool.query('INSERT INTO person (title,description,city,province,expiry_date) VALUES ($1,$2,$3,$4,$5) RETURNING *', [title,description,city,province,expiry_date]);
res.json(newDetails.rows[0])
    }catch(e){
        console.log("error message",e)
    }
})

}


module.exports = {seekingRoutes}