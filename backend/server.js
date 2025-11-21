import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root32145", // your MySQL password
  database: "portfolio"
});

db.connect(err => {
  if (err) {
    console.log("MySQL Connection Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// API Route to save contact form
app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql = `
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) return res.status(500).json({ error: "Database Error" });
    return res.json({ message: "Message saved successfully!" });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
