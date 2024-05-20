/*const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const port = 3001;

// Function to open a database connection pool
const openDb = () => {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'todo',
        password: '123',
        port: 5432
    });
    return pool;
};

// GET endpoint to fetch all tasks
app.get("/", (req, res) => {
    const pool = openDb();

    pool.query('SELECT * FROM task', (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } 
        res.status(200).json(result.rows); // Send  the result of the query
    });
   
        
});


// POST endpoint to add a new task
app.post("/new", (req, res) => {
    const pool = openDb();
    pool.query('INSERT INTO task (description) VALUES ($1) RETURNING *',
        [req.body.description],
        (error, result) => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(200).json({ id: result.rows[0].id });
            }
        });
});

app.delete("/delete/:id", async(req,res) =>{
    const pool = openDb()
    const id = parseInt(req.params.id)
    pool.query('delete from task where id = $1',
    [id],
    (error,result) => {
        if (error) {
            res.status(500).json({error: error.message})
        }else {
            res.status(200).json({id:id})
        }
    })
})

// Start the server
app.listen(port)*/



/*require('dotenv').config();
console.log(process.env);
const express = require('express');
const cors = require('cors');
const { query } = require('./helpers/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const port = process.env.PORT || 3001;

// GET endpoint to fetch all tasks
app.get("/", async (req, res) => {
    try {
        const result = await query('SELECT * FROM task');
        res.status(200).json(result.rows); // Send the result of the query
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST endpoint to add a new task
app.post("/new", async (req, res) => {
    try {
        const result = await query('INSERT INTO task (description) VALUES ($1) RETURNING *', [req.body.description]);
        res.status(200).json({ id: result.rows[0].id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/delete/:id", async(req,res) =>{
    try {
        const id = parseInt(req.params.id);
        await query('delete from task where id = $1', [id]);
        res.status(200).json({id:id});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/


/*require('dotenv').config();
console.log(process.env);
const express = require('express');
const cors = require('cors');
const { query } = require('./helpers/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const port = process.env.PORT || 3001;

// GET endpoint to fetch all tasks
app.get("/", async (req, res) => {
  console.log(query)
  try {
    const result = await query('select * from task')
    const rows = result.rows ? result.rows : []
    res.status(200).json(rows)
  } catch (error) {
    console.log(error)
    res.statusMessage = error
    res.status(500).json({error: error})
  }
});

// POST endpoint to add a new task
app.post("/new", async (req, res) => {
    try {
        const result = await query('INSERT INTO task (description) VALUES ($1) RETURNING *', [req.body.description]);
        res.status(200).json({ id: result.rows[0].id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE endpoint to delete a task
app.delete("/delete/:id", async(req,res) =>{
    try {
        const id = parseInt(req.params.id);
        await query('delete from task where id = $1', [id]);
        res.status(200).json({id:id});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const todoRouter = require('./routes/todo.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', todoRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



