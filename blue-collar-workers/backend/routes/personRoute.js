const pool = require('./../config/connection')
const appRoutes =(server)=>{
server.post('/person',async(req,res)=>{
    try{
const {first_name,last_name,email,physical_address}= req.body
const newDetails = await pool.query('INSERT INTO person (first_name,last_name,email,physical_address) VALUES ($1,$2,$3,$4) RETURNING *', [first_name,last_name,email,physical_address]);
res.json(newDetails.rows[0])
    }catch(e){
        console.log("error message",e)
    }
})

server.get('/person',async(req,res)=>{
    try{
const allJobs = await pool.query("SELECT * FROM person")
res.json(allJobs.rows)
    }catch(e){
console.log(e)
    }
})

}


module.exports = {appRoutes}