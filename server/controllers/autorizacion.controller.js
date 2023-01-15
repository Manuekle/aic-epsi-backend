//? Autorizacion Controllers
import { pool } from "../db.js";

//* GET
export const getAutorizaciones = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM autorizacion ORDER BY created_at ASC"
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAutorizacion = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM autorizacion WHERE id = ?",
      [req.params.id]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Autorizacion no encontrada" });
    }
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//? POST
export const createAutorizacion = async (req, res) => {
  try {
    const {
      afiliado,
      diagnostico_principal,
      diagnostico_relacionado,
      regimen,
    } = req.body;

    const [result] = await pool.query(
      "INSERT INTO autorizacion(afiliado, diagnostico_principal, diagnostico_relacionado, regimen) VALUES (?, ?, ?, ?)",
      [afiliado, diagnostico_principal, diagnostico_relacionado, regimen]
    );
    return res.status(201).json({ message: "Autorizacion creada" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
