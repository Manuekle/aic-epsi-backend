import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  database: "epsidb",
  password: "",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export { pool };