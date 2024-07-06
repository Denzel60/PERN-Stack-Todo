const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db.js')
const cors = require('cors')


app.use(cors())

app.get('/todos/:userEmail', async (req, res) => {
    // console.log(req)
    const {userEmail} = req.params
    console.log(userEmail);
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE User_email = $1',[userEmail])
        res.send(todos.rows)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))