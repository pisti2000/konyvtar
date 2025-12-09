const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '', 
    database: 'konyvtarak'
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM konyvek";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.delete('/konyvek/:id', (req, res) => {
    const sql = "DELETE FROM konyvek WHERE id = 1";
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Sikeres a törlés:ó!' });
    });
});

app.post('/konyv/ins', (req, res) => {
    const sql = "INSERT INTO konyvek (konyv_id, szerzo,cim, mufaj ) VALUES (?,?, ?, ?)";
    const { name, location, established } = req.body;
    db.query(sql, [name, location, established], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Sikeres hozzáadás!' });
    });
});
app.listen(3001, () => {
    console.log('Szerver fut a 3001-es porton');
}  );
